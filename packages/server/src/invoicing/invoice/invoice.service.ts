import { Injectable } from '@nestjs/common';
import { HttpAdapter } from 'src/util/http.adapter';
import { CreateInvoiceDto } from './dto/invoice.dto';
import { Invoice } from 'src/invoicing/invoice/entity/invoice.entity';

@Injectable()
export class InvoiceService {
  private endpoint = 'invoice';

  constructor(private readonly httpAdapter: HttpAdapter) {}

  async getInvoices() {
    return this.httpAdapter.get(this.endpoint);
  }

  async getInvoice(id: string) {
    return this.httpAdapter.getById(this.endpoint, id);
  }

  async createInvoice(invoice: CreateInvoiceDto) {
    return this.httpAdapter.post<Invoice>(this.endpoint, invoice);
  }
}
