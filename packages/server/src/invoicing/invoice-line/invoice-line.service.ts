import { Injectable } from '@nestjs/common';
import { HttpAdapter } from 'src/util/http.adapter';
import { CreateInvoiceLineDto } from 'src/invoicing/invoice-line/dto/invoice-line.dto';
import { InvoiceLine } from 'src/invoicing/invoice-line/entity/invoice-line.entity';

@Injectable()
export class InvoiceLineService {
  private endpoint = 'invoiceLine';

  constructor(private readonly httpAdapter: HttpAdapter) {}

  get() {
    return this.httpAdapter.get(this.endpoint);
  }

  getById(id: string) {
    return this.httpAdapter.getById(this.endpoint, id);
  }

  createInvoiceLine(invoiceLine: CreateInvoiceLineDto) {
    return this.httpAdapter.post<InvoiceLine>(this.endpoint, invoiceLine);
  }
}
