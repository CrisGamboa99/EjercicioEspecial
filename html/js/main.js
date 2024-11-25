function llamarApi(){
    fetch('https://fakestoreapi.com/products', { 
    method: 'GET'
}).then((response)=>{
     return response.json();
}).then((data)=>{
        console.log(data);
    })
    .catch(error => { 
        console.error('Hubo un problema con la solicitud Fetch:', error); 
    });
}

function mostrarProductos(producto){
    const contenidoProducto = document.getElementById('titulo');
    
}