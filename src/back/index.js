/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: GPLV3+
 * Project: DAW - CEIoT - Project Structure
 * Brief: Main backend file
=============================================================================*/

//=======[ Settings, Imports & Data ]==========================================

var PORT = 3000;

var express = require('express');
var app = express();
var mysql = require('./mysql-connector');
var datos = require('./datos.json');

// to parse application/json
app.use(express.json());
// to serve static files
app.use(express.static('/home/node/app/static/'));

//=======[ Main module code ]==================================================

app.get('/dispositivos', function (req, res, next) {
    // console.log(datos);
    // response = "{ 'key1':'value1' }"
    // res.send(JSON.stringify(response)).status(200);
    res.json(datos);
});

app.get('/dispositivos/:id', function (req, res, next) {
    let datosFiltrados = datos.filter(item => item.id == req.params.id);
    res.json(datosFiltrados);
});

// Espera recibir algo del estilo {id:1,state:1}
// Devuelvo el dato modificado
app.post('/dispositivos', function (req, res) {
    let datoFiltrado = datos.filter(item => item.id == req.body.id);
    if (datoFiltrado.length > 0) {
        datoFiltrado[0].state = req.body.state;
    }
    res.json(datoFiltrado);
});

app.listen(PORT, function (req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
