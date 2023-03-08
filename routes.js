let controller_ferreteria = require('./controller_ferreteria');

module.exports = (app)=>{
    app.get('/', (req, res)=>{
        res.sendfile('./paginaFerr/index.html');
    })
    app.get('/publicaciones',(req,res)=>{
        res.sendfile('./paginaFerr/publicaciones.html');
    })
    app.get('/style',(req,res)=>{
        res.sendfile('./paginaFerr/style.css');
    })
    app.get('/js',(req,res)=>{
        res.sendfile('./paginaFerr/js.js')
    })
    app.get('/FrondEnd',(req,res)=>{
        res.sendfile('./FrondEnd.js')
    })
    app.put('/api/nuevaoperacion', controller_ferreteria.Guardar);
    app.delete('/api/delete', controller_ferreteria.Eliminar);
    app.post('/api/modificar', controller_ferreteria.modificar)
    app.post('/api/todas', controller_ferreteria.todas);    

}