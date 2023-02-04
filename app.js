import express from 'express'
import * as url from 'url';
import hbs from 'hbs';
import * as dotenv from 'dotenv';

dotenv.config();


const app = express();
const port=process.env.PORT;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Servir contenido statico

app.use(express.static('public'));
app.set('view engine','hbs');
hbs.registerPartials(__dirname +'/views/partials/');


app.get('/', function (req,res){

    res.render('home',
    {
        nombre:'Nicolas Espinoza',
        titulo:'Curso de Node'
    });
});

app.get('/generic', function (req,res){

    res.render('generic',
    {
        nombre:'Nicolas Espinoza',
        titulo:'Curso de Node'
    });
});

app.get('/elements', function (req,res){

    res.render('elements',
    {
        nombre:'Nicolas Espinoza',
        titulo:'Curso de Node'
    });
});

app.get('*', function (req,res){

    res.sendFile(__dirname+'/public/404.html');
});


app.listen(port,()=>{

    console.log(`Example app listening at http://localhost:${port}`);
});

