import { ExchangeRatesResponse } from './payload/exchange-rates-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExchangeratesService {
  constructor(private httpClient: HttpClient) {}
  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    );
  }
}
