import { Injectable } from '@nestjs/common';
import { HttpAdapter } from 'src/util/http.adapter';
import { CreateInvoiceDto } from './dto/invoice.dto';

@Injectable()
export class InvoiceService {
  private endpoint = 'invoice';

  constructor(private readonly httpAdapter: HttpAdapter) {}

  async getInvoices(): Promise<any> {
    return this.httpAdapter.get(this.endpoint);
  }

  async getInvoice(id: string): Promise<any> {
    return this.httpAdapter.getById(this.endpoint, id);
  }

  async createInvoice(invoice: CreateInvoiceDto): Promise<any> {
    return this.httpAdapter.post(this.endpoint, invoice);
  }
}
