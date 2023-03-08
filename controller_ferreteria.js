let Item = require("./ferreteriamongo");

exports.Guardar = (req,res)=>{ //Exporta la siguiente funcion 
    //Crea y guarda una funcion
    Item.create({
        //Crea el Schema
    nombre: req.body.nombre,
    herramienta: req.body.herramienta,
    precio: req.body.precio,
    imagen: req.body.imagen,
    },function(err,item){ //Creamos un metodo
        if(err){
            res.send(err) //Deteccion de errores
        }
        else{
            Item.find(function(err,item){ //Metodo find encuentra todo Schema creado 
                if(err){
                    res.send(err) //Deteccion de errores
                }else{
                    res.json(item); //Crea los JSON
                }
            })
        }
    })
}


exports.Eliminar = (req,res)=>{

    //Eliminina un objeto entero
    Item.remove({_id:req.body._id},
        function(err,item){ //Creamos un metodo
            if(err){
                res.send(err) //Deteccion de errores
            }
            else{
                Item.find(function(err,item){ //Metodo find encuentra todo Schema creado 
                    if(err){
                        res.send(err) //Deteccion de errores
                    }else{
                        res.json(item); //Crea los JSON
                    }
                })
            }
        })
}


exports.modificar = function(req,res){

    Item.update({_id:req.body._id},{$set:{
        nombre:req.body.nombre,
        herramienta:req.body.herramienta,
        precio:req.body.precio,
        imagen:req.body.imagen
    }},function(err,item){ //Creamos un metodo
        if(err){
            res.send(err) //Deteccion de errores
        }
        else{
            Item.find(function(err,item){ //Metodo find encuentra todo Schema creado 
                if(err){
                    res.send(err) //Deteccion de errores
                }else{
                    res.json(item); //Crea los JSON
                }
            })
        }
    })
    
}





exports.todas = function(req,res){
    
    Item.find(function(err, item){
        if (err){
            res.send(err);
        }
        res.json(item);
    });

}