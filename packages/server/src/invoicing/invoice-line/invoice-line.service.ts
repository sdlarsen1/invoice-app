import { Injectable } from '@nestjs/common';
import { HttpAdapter } from 'src/util/http.adapter';

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
}
