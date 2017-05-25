import { Component } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';
import { IMCService } from '../services/imc.service';

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
        <h2>Calculo do IMC</h2>
        <table style="width:30%">
            <tr>                
                <th>Peso (kg)</th>
                <th>Altura (cm)</th>
                <!-- <th>Sexo</th> -->
                <th>Resultado</th>
            </tr>
            <tr>
                <td>
                    <input type="number" [(ngModel)]="peso" [class.error]="isInvalid(peso)">
                </td>
                <td>
                    <input type="number" [(ngModel)]="altura" [class.error]="isInvalid(altura)">
                </td>
                <!--
                <td>
                    <imc-combobox [(selected)]="sexo"></imc-combobox>
                </td>
                 -->
                <td>
                  <p>{{resultadoIMC}}</p>
                </td>
            </tr>
        </table>        
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
    peso = 80.00;
    altura = 180;

    constructor (private exchangeService: ExchangeService, private imcService: IMCService) { }

    get targetAmount(){
        const exchangeRate = this.exchangeService
          .getExchangeRate(this.baseCurrency, this.targetCurrency);
        return this.baseAmount * exchangeRate;
    }

    get resultadoIMC() {
        const imcCalculado = this.imcService.getIMCCalculado(this.peso, this.altura);

        switch ( imcCalculado ) {
            case 0: return "Extremamente abaixo do peso";
            case 1: return "Gravemente abaixo do peso";
            case 2: return "Abaixo o peso ideal";
            case 3: return "Faixa de peso ideal";
            case 4: return "Sobrepeso";
            case 5: return "Obesidade grau I";
            case 6: return "Obesidade grau II (grave)";
            case 7: return "Obesidade grau III (mórbida)";
            else "Não calculado";
        }
    }

    isInvalid(value) {
        return !Number.isFinite(value);        
    }
}