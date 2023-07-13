import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export type QueryParams = { [key: string]: any };

@Injectable()
export class HttpAdapter {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  // NestJS returns observables natively, which are great, but we want to return the data directly.

  async get(endpoint: string, params?: QueryParams) {
    let url = `${this.configService.get('apiUrl')}/${endpoint}`;
    if (params) {
      url = `${url}?${Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&')}`;
    }
    const res = await this.httpService.axiosRef.get(url);
    return res.data;
  }

  async getById<T>(endpoint: string, id: string): Promise<T> {
    let url = `${this.configService.get('apiUrl')}/${endpoint}/${id}`;
    const res = await this.httpService.axiosRef.get(url);
    return res.data;
  }

  async post<T>(endpoint: string, value: any): Promise<T> {
    let url = `${this.configService.get('apiUrl')}/${endpoint}`;
    const res = await this.httpService.axiosRef.post(url, value);
    return res.data;
  }

  async put(endpoint: string, id: string, value: any) {
    let url = `${this.configService.get('apiUrl')}/${endpoint}/${id}`;
    const res = await this.httpService.axiosRef.put(url, value);
    return res.data;
  }

  async patch(endpoint: string, id: string, value: any) {
    let url = `${this.configService.get('apiUrl')}/${endpoint}/${id}`;
    const res = await this.httpService.axiosRef.patch(url, value);
    return res.data;
  }

  async delete(endpoint: string, id: string) {
    let url = `${this.configService.get('apiUrl')}/${endpoint}/${id}`;
    const res = await this.httpService.axiosRef.delete(url);
    return res.data;
  }
}
