export class ExchangeService {

    supportedCurrencies = ['ARS', 'BRL', 'EUR', 'GBP', 'USD' ];

    private cotacoes = {
        "EUR/GBP": 0.86,
        "EUR/USD": 1.12,
        "EUR/BRL": 3.65,
        "EUR/ARS": 17.88,
        "GBP/EUR": 1.16,
        "GBP/USD": 1.30,
        "GBP/BRL": 4.24,
        "GBP/ARS": 20.79,
        "USD/EUR": 0.89,
        "USD/GBP": 0.77,
        "USD/BRL": 3.26,
        "USD/ARS": 15.95,
        "BRL/USD": 0.31,
        "BRL/GBP": 0.24,
        "BRL/EUR": 0.27,
        "BRL/ARS": 4.90,
        "ARS/BRL": 0.20,
        "ARS/USD": 0.0627,
        "ARS/EUR": 0.0559,
        "ARS/GBP": 0.0481
    }

    getExchangeRate(baseCurrency: string, targetCurrency: string) {
        if (baseCurrency === targetCurrency){
            return 1;
        }
        return this.cotacoes[baseCurrency + '/' + targetCurrency];
    }
}