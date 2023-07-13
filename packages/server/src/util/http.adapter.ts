import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ConfigService } from '@nestjs/config';

type QueryParams = { [key: string]: any };

@Injectable()
export class HttpAdapter {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  get(endpoint: string, params?: QueryParams) {
    let url = `${this.configService.get('apiUrl')}/${endpoint}`;
    if (params) {
      url = `${url}?${Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&')}`;
    }
    return this.httpService.get(url).pipe(map((resp) => resp.data));
  }

  getById(endpoint: string, id: string) {
    let url = `${this.configService.get('apiUrl')}/${endpoint}/${id}`;
    return this.httpService.get(url).pipe(map((resp) => resp.data));
  }

  post(endpoint: string, value: any) {
    let url = `${this.configService.get('apiUrl')}/${endpoint}`;
    return this.httpService.post(url, value).pipe(map((resp) => resp.data));
  }

  put(endpoint: string, id: string, value: any) {
    let url = `${this.configService.get('apiUrl')}/${endpoint}/${id}`;
    return this.httpService.put(url, value).pipe(map((resp) => resp.data));
  }

  patch(endpoint: string, id: string, value: any) {
    let url = `${this.configService.get('apiUrl')}/${endpoint}/${id}`;
    return this.httpService.patch(url, value).pipe(map((resp) => resp.data));
  }

  delete(endpoint: string, id: string) {
    let url = `${this.configService.get('apiUrl')}/${endpoint}/${id}`;
    return this.httpService.delete(url).pipe(map((resp) => resp.data));
  }
}
