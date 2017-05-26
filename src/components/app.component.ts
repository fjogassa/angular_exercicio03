import { Component } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';
import { IMCTelaComponent } from './imc-tela-component';

@Component({
    selector: 'conversor-moedas',
    template: 
    `
        <h2>Fábio Jun e Guilherme Américo</h2>
        <h2>Conversor de Moedas</h2>
        <input type="number" [(ngModel)]="baseAmount" [class.error]="isInvalid(baseAmount)">
        <currency-select [(selected)]="baseCurrency"></currency-select>
        = <strong>{{targetAmount | fixed:2}}</strong>
        <currency-select [(selected)]="targetCurrency"></currency-select>
        <p *ngIf="isInvalid(baseAmount)">Please enter a valid amount</p>
        <p></p>
        <imc-tela></imc-tela>
    `,
    styles: [`
        input[type=number] {
            width: 10ex;
            text-align: right;
        }
        .error {
            background-color: #ff6666;
        }        
    `]
})
export class AppComponent {

    baseCurrency = "USD";
    targetCurrency = "BRL";
    baseAmount = 1;    

    constructor (private exchangeService: ExchangeService) { }

    get targetAmount(){
        const exchangeRate = this.exchangeService
          .getExchangeRate(this.baseCurrency, this.targetCurrency);
        return this.baseAmount * exchangeRate;
    }    

    isInvalid(value) {
        return !Number.isFinite(value);        
    }
}