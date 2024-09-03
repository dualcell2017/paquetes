

 
 async function buscar() {
    const inputField = document.getElementById('inputField');
    const searchButton = document.getElementById('searchButton');
    const loading = document.getElementById('loading');

    // Obtener el valor ingresado por el usuario
    const str_input = inputField.value;

    // Mostrar la animación de carga
    searchButton.classList.add('hidden');
    loading.style.display = 'block';

    // Realizar la consulta a Parse
    const query = new Parse.Query('envio');
    query.equalTo('paquete', str_input);

    try {
        const object = await query.first(); // Obtener el primer resultado de la consulta
        if (object) {
            
            
            try {
              
                // Mostrar los valores actualizados en la consola
                console.log(object.get('grupo'));
                console.log(object.get('nota'));
                console.log(object.get('paquete'));
                console.log(object.get('etapa'));
				
				 let str_respuesta;

				if (object.get('etapa') === '1') {
					str_respuesta = "Se está preparando el paquete para ser enviado";
				} else if (object.get('etapa') === '2'){
					str_respuesta = "El paquete se encuentra en el aeropuerto de Miami"; 
					}
					else if (object.get('etapa') === '3'){
					str_respuesta = "El paquete se encuentra en la aduana de Cuba"; 
					}
					else if (object.get('etapa') === '4'){
					str_respuesta = "El transportista en Cuba lleva el paquete hacia el destino final"; 
					}
					else if (object.get('etapa') === '5'){
					str_respuesta = "El paquete ha sido entregado";
					}
					else {
					str_respuesta = "El paquete no esta en el sistema"; 
					}
					
				
				
            

                // Mostrar resultado en la página
                const resultContainer = document.getElementById('resultContainer');
                const backButton = document.getElementById('backButton');

                // Ocultar input y loading
                inputField.style.display = 'none';
                loading.style.display = 'none';

                // Mostrar resultado
                resultContainer.innerText = str_respuesta;
                resultContainer.style.display = 'block';
                backButton.classList.remove('hidden');
            } catch (error) {
                console.error('Error while updating envio', error);
                mostrarError('Error al actualizar el envío.');
            }
        } else {
            mostrarError('No se encontró ningún objeto con ese valor en el campo paquete.');
        }
    } catch (error) {
        console.error('Error while retrieving object envio', error);
        mostrarError('Error al realizar la búsqueda.');
    }
}

function mostrarError(mensaje) {
    const resultContainer = document.getElementById('resultContainer');
    const backButton = document.getElementById('backButton');

    // Ocultar input y loading
    document.getElementById('inputField').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

    // Mostrar mensaje de error
    resultContainer.innerText = mensaje;
    resultContainer.style.display = 'block';
    backButton.classList.remove('hidden');
}
function mostrarQuienesSomos() {
    const inputField = document.getElementById('inputField');
    const searchButton = document.getElementById('searchButton');
    const resultContainer = document.getElementById('resultContainer');
    const backButton = document.getElementById('backButton');

    // Ocultar input y boton
    inputField.style.display = 'none';
    searchButton.classList.add('hidden');

    // Mostrar el texto de "Quiénes Somos"
    resultContainer.innerText = ' Encuentranos en..\n6601 sw 8st suit 4 \n Miami Florida';
    resultContainer.style.display = 'block';
    backButton.classList.remove('hidden');
}

function mostrarContactenos() {
    const inputField = document.getElementById('inputField');
    const searchButton = document.getElementById('searchButton');
    const resultContainer = document.getElementById('resultContainer');
    const backButton = document.getElementById('backButton');

    // Ocultar input y boton
    inputField.style.display = 'none';
    searchButton.classList.add('hidden');

    // Mostrar el texto de "Contáctenos"
    resultContainer.innerText = 'Telefono: +1 (786)395 2896 \n Email: dualcell2017@gmail.com';
    resultContainer.style.display = 'block';
    backButton.classList.remove('hidden');
}
function volver() {
    const inputField = document.getElementById('inputField');
    const searchButton = document.getElementById('searchButton');
    const loading = document.getElementById('loading');
    const resultContainer = document.getElementById('resultContainer');
    const backButton = document.getElementById('backButton');

    // Resetear la página
    inputField.value = '';
    inputField.style.display = 'block';
    searchButton.classList.remove('hidden');
    loading.style.display = 'none';
    resultContainer.style.display = 'none';
    backButton.classList.add('hidden');
}
