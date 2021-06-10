class Interfaz{

    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }

    construirSelect(){ 
        cotizador.ontenerMonedasAPI()
            .then(monedas =>{
             //   console.log(monedas);
             //Existen diversos ciclos en java Script uno de ellos es el sigueinte 
             //El siguiente lo ocuparemos para recorrer un objeto
            const select = document.querySelector('#criptomoneda');
            for(const [key,value] of Object.entries(monedas.monedas.Data)){
                const opcion = document.createElement('option');
                opcion.value = value.Symbol; 
                opcion.appendChild(document.createTextNode(value.CoinName));
                select.appendChild(opcion);
             }
            })
    }

    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //seleccionar mensajes
        const divMensajes = document.querySelector('.mensajes');
        divMensajes.appendChild(div);

        //mostrar contenido
        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        },2000);
    }

    mostrarResultado(resultado,moneda,cripto){

        const resultadoAnterior = document.querySelector('#resultado > div');

        if(resultadoAnterior){
            resultadoAnterior.remove();
        }
        const datosMoneda = resultado[cripto][moneda];

        //recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2);
        //construir el template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado</h2>
                    <p>El precio es de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${datosMoneda.PRICE.toFixed(2)}</p>
                    <p>Variación último día: % ${datosMoneda.CHANGEPCTDAY.toFixed(2)}</p>
                    <p>Ultima actualizacion: ${new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX')}</p>
            </div>
        `;

        this.mostrarSpinner('block');

        setTimeout(()=>{

            document.querySelector('#resultado').innerHTML = templateHTML;
            this.mostrarSpinner('none');
        },3000);
        
    }

    mostrarSpinner(vista){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
    
}