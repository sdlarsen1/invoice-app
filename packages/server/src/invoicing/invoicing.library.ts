import { Injectable } from '@nestjs/common';
import { InvoiceService } from 'src/invoicing/invoice/invoice.service';
import { CreateInvoiceDto } from 'src/invoicing/invoice/dto/invoice.dto';
import { InvoiceStatus } from 'src/invoicing/invoice/enum/invoice-status.enum';

@Injectable()
export class InvoicingLibrary {
  constructor(private readonly invoiceService: InvoiceService) {}

  async createInvoice(invoice: CreateInvoiceDto) {
    // TODO: this will interact with the invoice and invoiceLine services
    invoice.status = InvoiceStatus.PENDING;
    const res = await this.invoiceService.createInvoice(invoice);
    return res;
  }
}
