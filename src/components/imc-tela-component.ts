import { Component } from '@angular/core';
import { IMCService } from '../services/imc.service';

@Component({
    selector: 'imc-tela',
    template: 
    `
    <h2>Calculo do IMC</h2>
        <table style="width:50%">
            <tr>                
                <th>Sexo</th>
                <th>Altura (cm)</th>
                <th>Peso (kg)</th>                             
                <th>Resultado</th>
            </tr>
            <tr>
                <td>
                    <imc-combobox [(selected)]="sexo"></imc-combobox>
                </td>
                <td>
                    <input type="number" [(ngModel)]="altura" [class.error]="isInvalid(altura)">                    
                </td>
                <td>
                    <input type="number" [(ngModel)]="peso" [class.error]="isInvalid(peso)">
                </td>                
                <td>
                  <p>{{resultadoIMC}}</p>
                </td>
            </tr>
        </table>       
    `,
    styles: [
    `   table, th {
            border: 1px solid black;
            border-collapse: collapse;
            text-align: left;
        }
        table, td {
            border: 1px solid black;
            border-collapse: collapse;
            text-align: center;
        }
        .error {
            background-color: #ff6666;
        }        
    `]
})
export class IMCTelaComponent {

    peso = 80.00;
    altura = 180;  
    sexo = "MASCULINO";

    constructor (private imcService: IMCService) { } 

    get resultadoIMC() {

        console.log("Inicio");

        const imcCalculado = this.imcService.getIMCCalculado(this.peso, this.altura, this.sexo);

        switch ( imcCalculado ) {
            case 0: return "Abaixo do peso";
            case 1: return "Peso normal";
            case 2: return "Pouco acima do peso";
            case 3: return "Acima do peso ideal";
            case 4: return "Obesidade";
            default: return "Não calculado";
        }        
    }

    isInvalid(value) {
        return !Number.isFinite(value);        
    }

}