function llamarApi(){
    fetch('https://fakestoreapi.com/products') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); 
        } 
        return response.json(); 
    }) 
    .then(data => {
        console.log(datos);
    })
    .catch(error => { 
        console.error('Hubo un problema con la solicitud Fetch:', error); 
    });
}

function mostrarProductos(producto){
    const contenidoProducto = document.getElementById('titulo');
    
}