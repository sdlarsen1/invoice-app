import { Injectable } from '@nestjs/common';
import { InvoiceService } from 'src/invoicing/invoice/invoice.service';
import { InvoiceLineService } from 'src/invoicing/invoice-line/invoice-line.service';

@Injectable()
export class InvoicingService {
  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly invoiceLineService: InvoiceLineService,
  ) {}

  // TODO: move this to the lib ?

  getInvoices() {
    return this.invoiceService.getInvoices();
  }

  getInvoice(id: string) {
    return this.invoiceService.getInvoice(id);
  }

  getInvoiceLines() {
    return this.invoiceLineService.get();
  }
}
