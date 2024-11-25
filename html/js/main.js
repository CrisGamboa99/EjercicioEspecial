function llamarApi(){
    fetch('https://fakestoreapi.com/products') 
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error('Error'); 
        } 
        return respuesta.json(); 
    }) 
    .then(datos => {
        console.log(datos);
    })
    .catch(error => { 
        console.error('Hubo un problema con la solicitud Fetch:', error); 
    });
}

function mostrarProductos(producto){
    const contenidoProducto = document.getElementById('titulo');
    
}