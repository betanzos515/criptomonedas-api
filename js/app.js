const cotizador = new API('96840faaae7fb09f0fccd25d8453d4d5137325468e42de668317f7ab3263a763');
const ui = new Interfaz();


const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    const criptomoneda = document.querySelector('#criptomoneda');
    const criptoSeleccionada = criptomoneda.options[criptomoneda.selectedIndex].value;

    console.log(monedaSeleccionada + ' '+criptoSeleccionada);
    if(monedaSeleccionada === '' || criptoSeleccionada === ''){
        ui.mostrarMensaje('Ambos campos son ','alert bg-danger text-center');
    }
    else{
        //Todo bien consultar la a
        cotizador.obtenerValores(monedaSeleccionada,criptoSeleccionada)
        .then(datos=>{
        ui.mostrarResultado(datos.resultado.RAW,monedaSeleccionada,criptoSeleccionada);
           
        })
    }

});