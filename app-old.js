import * as http from 'http';



http.createServer((request, response)=>{

    response.write('hola mundo');
    response.end();

}).listen(8080);

console.log('Escuchando el puerto ',8080);