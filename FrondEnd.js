class Herramienta{
    constructor(nombre,
        herramienta,
        precio,
        imagen)

{
    this.nombre = nombre;
    this.herramienta = herramienta;
    this.precio = precio;
    this.imagen = imagen;
}

Guardar(){
    let objectSend = this;

    return new Promise((resolve, reject) => {
       
       try {
           let xhr = new XMLHttpRequest();
           xhr.open('PUT','/api/nuevaoperacion')
           xhr.setRequestHeader('Content-Type','application/json');
               xhr.onload = function() {
                   if (xhr.status == 200) {
                       resolve(JSON.parse(xhr.responseText));
                   }else{
                       reject(xhr);
                   }         
               }
               xhr.send(JSON.stringify(objectSend));
       } catch (error) {
           reject(error.message);
       }
   });
}


modificar(){


    let objectSend = this;
 
    return new Promise((resolve, reject) => {
       
       try {
           let xhr = new XMLHttpRequest();
           xhr.open('POST','/api/modificar')
           xhr.setRequestHeader('Content-Type','application/json');
               xhr.onload = function() {
                   if (xhr.status == 200) {
                       resolve(JSON.parse(xhr.responseText));
                   }else{
                       reject(xhr);
                   }         
               }
               xhr.send(JSON.stringify(objectSend));
       } catch (error) {
           reject(error.message);
       }
   });
}

Eliminar(){
    let objectSend = this;
 
    return new Promise((resolve, reject) => {
       
       try {
           let xhr = new XMLHttpRequest();
           xhr.open('DELETE','/api/delete')
           xhr.setRequestHeader('Content-Type','application/json');
               xhr.onload = function() {
                   if (xhr.status == 200) {
                       resolve(JSON.parse(xhr.responseText));
                   }else{
                       reject(xhr);
                   }         
               }
               xhr.send(JSON.stringify(objectSend));
       } catch (error) {
           reject(error.message);
       }
   });
 }
 



todas(){
    let objetoenviar = this;
    return new Promise((resolve, reject) => {
       
       try {
           let xhr = new XMLHttpRequest();
           xhr.open('POST','/api/todas')
           xhr.setRequestHeader('Content-Type','application/json');
               xhr.onload = function() {
                   if (xhr.status == 200) {
                       resolve(JSON.parse(xhr.responseText));
                   }else{
                       reject(xhr);
                   }         
               };
               xhr.send(JSON.stringify(objetoenviar))
       } catch (error) {
           reject(error.message);
       }
   });
}
}