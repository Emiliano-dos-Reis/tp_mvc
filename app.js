const express = require('express');
const app= express();
const path = require ('path')
const port = 3000;

/* recursos estáticos */
app.use(express.static(path.join(__dirname,'public')));


/* motor de vistas */
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

/* rutas */

const mainRouter = require ('./routes/main')

app.use('/', mainRouter)
/*app.get('/', (req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')))
app.get('/about', (req,res) => res.sendFile(path.resolve(__dirname,'views','about.html')))*/


app.listen(port,() =>{

    console.log ('Server runnig in http://localhost:${port}');


})