
const http = require('http');

//Crear el servidor en el puerto 8080
http.createServer( (req, res) => {

    

    /* res.writeHead(200, { 'Content-Type': 'application/json' }); */
    res.setHeader('content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write('Hola mundo');
    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);