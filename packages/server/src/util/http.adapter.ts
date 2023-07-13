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

  get(params?: QueryParams) {
    let url = `${this.configService.get('apiEndpoint')}/invoice`;
    if (params) {
      url = `${url}?${Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&')}`;
    }
    return this.httpService.get(url).pipe(map((resp) => resp.data));
  }

  getById(id: string) {
    let url = `${this.configService.get('apiEndpoint')}/invoice/${id}`;
    return this.httpService.get(url).pipe(map((resp) => resp.data));
  }
}
