import { Component, OnInit } from '@angular/core';
import { ExchangeratesService } from '../services/exchangerates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  from = 'USD';
  to = 'CAD';
  amount = 1;
  rates: { [key: string]: number };

  convert(): number {
    return this.amount * this.rates[this.to];
  }

  loadRates() {
    this.service
      .getRates(this.from)
      .subscribe((res) => (this.rates = res.rates));
  }

  getAllCurrencies(): string[] {
    return Object.keys(this.rates);
  }

  constructor(private service: ExchangeratesService) {}

  ngOnInit(): void {
    this.loadRates();
  }
}
