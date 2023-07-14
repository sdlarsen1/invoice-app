import { Injectable } from '@nestjs/common';
import { InvoiceService } from 'src/invoicing/invoice/invoice.service';
import { CreateInvoiceDto } from 'src/invoicing/invoice/dto/invoice.dto';
import { InvoiceLineService } from 'src/invoicing/invoice-line/invoice-line.service';
import { CreateInvoiceLineDto } from 'src/invoicing/invoice-line/dto/invoice-line.dto';
import { QueryParams } from 'src/util/http.adapter';

@Injectable()
export class InvoicingLibrary {
  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly invoiceLineService: InvoiceLineService,
  ) {}

  getInvoices(params?: QueryParams) {
    return this.invoiceService.getInvoices(params);
  }

  getInvoice(id: string) {
    return this.invoiceService.getInvoice(id);
  }

  getInvoiceLines(params?: QueryParams) {
    return this.invoiceLineService.get(params);
  }

  getInvoiceLine(id: string) {
    return this.invoiceLineService.getById(id);
  }

  async createInvoice(invoice: CreateInvoiceDto) {
    // invoice.status = InvoiceStatus.PENDING;
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
