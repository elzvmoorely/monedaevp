import { Component } from '@angular/core';

interface CurrencyRates {
  [key: string]: {
    [key: string]: number;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  amount: number = 0;
  fromCurrency: string = 'MXN';
  toCurrency: string = 'EUR';
  result: number = 0;

  // Monedas disponibles para selección
  currencies = [
    { code: 'MXN', name: 'Peso Mexicano' },
    { code: 'EUR', name: 'Euro' },
    { code: 'KRW', name: 'Won Coreano' }
  ];

  // Tasas de cambio entre las monedas
  private rates: CurrencyRates = {
    MXN: { EUR: 0.046, KRW: 14.69 },
    EUR: { MXN: 21.74, KRW: 31.48 },
    KRW: { MXN: 0.068, EUR: 0.032 }
  };

  constructor() {}

  get filteredCurrencies() {
    return this.currencies.filter(currency => currency.code !== this.fromCurrency);
  }

  convert() {
    if (this.fromCurrency === this.toCurrency) {
      this.result = this.amount;
    } else {
      this.result = this.amount * this.rates[this.fromCurrency][this.toCurrency];
    }
  }
}
