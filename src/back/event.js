
// Importamos el modulo de eventos
var eventos = require("events");

var eventEmitter = new eventos.EventEmitter();

var conexionHandler = function () {
    console.log("Conexion Exitosa");
    // Buscaria datos
    // Lanzar el evento de datos recibidos
    eventEmitter.emit('datos_recibidos');

};

// Bideamos el evento concexion con el handler
eventEmitter.on('conexion', conexionHandler);

// Bindeamos el evento con una funcion anonima.
eventEmitter.on('datos_recibidos', function () {
    console.log("Llegaron los datos");
    // Los cambiaria poara el front y los devuelvo

});


eventEmitter.emit('conexion');


var fucion1 = function () {
    console.log("Hola");
};


module.exports = { nombre: "Brian", apellido: "Ducca" };
module.exports = fucion1();