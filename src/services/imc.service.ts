export class IMCService {

    //valorSexoService = ['MASCULINO', 'FEMININO'];

    private getResultadoIMCMasculino(imc: number): number {

         if ( imc <= 15 ) {
             //Extremamente abaixo do peso
             return 0;         
        } else if ( imc > 15 && imc <= 16 ) {
            //Gravemente abaixo do peso
            return 1;
        } else if ( imc > 16 && imc <= 18.5 ) {
            //Abaixo o peso ideal
            return 2;
        } else if ( imc > 18.5 && imc <= 25 ) {
            //Faixa de peso ideal
            return 3;
        } else if ( imc > 25 && imc <= 30 ) {
            //Sobrepeso
            return 4;
        } else if ( imc > 30 && imc <= 35 ) {
            //Obesidade grau I
            return 5;
        } else if ( imc > 35 && imc <= 40 ) {
            //Obesidade grau II (grave)
            return 6;
        } else if ( imc > 40 ) {
            //Obesidade grau III (mórbida)
            return 7;
        } else {
            //Não calculado
            return -1;
        }

    }

    getIMCCalculado(peso: number, altura: number) {

        let imc: number = 0;
        let resultado: number;

        //IMC = 65 / (1,70 * 1,70) = 65 / 2,89 = 22,5 (peso normal) 
        imc = peso / ( (altura/100) * (altura/100) );

        console.log("mensagem");

        resultado = this.getResultadoIMCMasculino(imc);

        console.log(resultado);

        return resultado;
    }
}