// Fonte: http://www.calcule.net/imc.calculo.indice.de.massa.corporal.a.php
export class IMCService {

    valorSexoService = ['MASCULINO', 'FEMININO'];

    private getResultadoIMCMasculino(imc: number): number {

        if ( imc <= 20.7 ) {
             //Abaixo do peso 
             return 0;         
        } else if ( imc > 20.7 && imc <= 26.4 ) {
            //No peso normal
            return 1;
        } else if ( imc > 26.4 && imc <= 27.8 ) {
            //Pouco acima do peso
            return 2;
        } else if ( imc > 27.8 && imc <= 31.1 ) {
            //Acima do peso ideal
            return 3;
        } else if ( imc > 31.1 ) {
            //Obesidade
            return 4;
        } else {
            //Não calculado
            return -1;
        }
    }

    private getResultadoIMCFeminino(imc: number): number {
        if ( imc <= 19.1 ) {
             //Abaixo do peso 
             return 0;         
        } else if ( imc > 19.1 && imc <= 25.8 ) {
            //No peso normal
            return 1;
        } else if ( imc > 25.8 && imc <= 27.3 ) {
            //Pouco acima do peso
            return 2;
        } else if ( imc > 27.3 && imc <= 32.3 ) {
            //Acima do peso ideal
            return 3;
        } else if ( imc > 32.3 ) {
            //Obesidade
            return 4;
        } else {
            //Não calculado
            return -1;
        }
    }

    getIMCCalculado(peso: number, altura: number, sexo: string) {

        let imc: number = 0;
        let resultado: number;

        imc = peso / ( (altura/100) * (altura/100) );

        console.log(sexo + ": " + imc);

        if (sexo === "MASCULINO") {
            resultado = this.getResultadoIMCMasculino(imc);
        } else {
            resultado = this.getResultadoIMCFeminino(imc);
        }

        console.log(resultado);

        return resultado;
    }
}