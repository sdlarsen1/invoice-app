import { Injectable } from '@nestjs/common';
import { InvoiceService } from 'src/invoicing/invoice/invoice.service';
import { CreateInvoiceDto } from 'src/invoicing/invoice/dto/invoice.dto';
import { InvoiceStatus } from 'src/invoicing/invoice/enum/invoice-status.enum';
import { InvoiceLineService } from 'src/invoicing/invoice-line/invoice-line.service';
import { CreateInvoiceLineDto } from 'src/invoicing/invoice-line/dto/invoice-line.dto';

@Injectable()
export class InvoicingLibrary {
  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly invoiceLineService: InvoiceLineService,
  ) {}

  async createInvoice(invoice: CreateInvoiceDto) {
    invoice.status = InvoiceStatus.PENDING;
    const createdInvoice = await this.invoiceService.createInvoice(invoice);

    const invoiceLines = await Promise.all(
      invoice?.invoiceLines.map((invoiceLine) => {
        return this.invoiceLineService.createInvoiceLine({
          ...invoiceLine,
          invoiceId: createdInvoice.id,
        });
      }),
    );

    return { ...createdInvoice, invoiceLines };
  }

  async createInvoiceLine(invoiceLine: CreateInvoiceLineDto) {
    return this.invoiceLineService.createInvoiceLine(invoiceLine);
  }
}
