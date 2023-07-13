import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { HttpAdapter } from 'src/util/http.adapter';

@Injectable()
export class InvoicingService {
  constructor(
    private readonly httpService: HttpService,
    private readonly httpAdapter: HttpAdapter,
  ) {}

  async getInvoices(): Promise<any> {
    return this.httpAdapter.get();
  }

  async getInvoice(id: string): Promise<any> {
    return this.httpAdapter.getById(id);
  }

  async createInvoice(invoice: any): Promise<any> {
    const url = `https://64af4581c85640541d4e3dde.mockapi.io/api/invoice`;
    const res = await this.httpService
      .post(url, invoice)
      .pipe(map((resp) => resp.data));
    console.log(res);
    return res;
  }
}
