var app          = require('./config/server')

// var rotaNoticias = require('./app/routes/noticias')(app);
// var rotaHome     = require('./app/routes/home')(app);
// var rotaAdd      = require('./app/routes/formulario_add_noticia')(app);

app.listen(3000, function(){
    console.log("Express rodando e escutando na porta 3000");
});

