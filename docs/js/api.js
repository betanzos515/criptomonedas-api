class API{
    constructor(apikey){
        this.apikey = apikey;
    }

    async ontenerMonedasAPI(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        //fetch a la url

        const obtenerMonedas = await fetch(url);
        //respuesta en json()
        const monedas = await obtenerMonedas.json();

        return{
            monedas
        }
    }

    async obtenerValores(moneda,criptomoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

        const urlconvertir = await fetch(url);
        const resultado = await  urlconvertir.json();
        return{
            resultado
        }
    }
}