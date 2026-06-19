function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function actualizarHora(){

    const ahora = new Date();

    document.getElementById("hora").innerHTML =
        ahora.toLocaleString();
}

function actualizarCPU(){

    document.getElementById("cpu").innerHTML =
        numeroAleatorio(15,95) + "%";
}

function actualizarRAM(){

    document.getElementById("ram").innerHTML =
        numeroAleatorio(20,90) + "%";
}

function actualizarTrafico(){

    document.getElementById("trafico").innerHTML =
        numeroAleatorio(50,900) + " Mbps";
}

function actualizarTodo(){

    actualizarHora();
    actualizarCPU();
    actualizarRAM();
    actualizarTrafico();

    document.getElementById("disco").innerHTML =
    numeroAleatorio(10,95) + "%";

    document.getElementById("sesiones").innerHTML =
    numeroAleatorio(150,5000);
document.getElementById("conexiones").innerHTML =
numeroAleatorio(5000,50000);
}

actualizarTodo();
setInterval(actualizarTodo,1000);const eventos = [
    "Connection Accepted",
    "API Request Received",
    "Database Query Executed",
    "Session Created",
    "Traffic Spike Detected",
    "Cache Refreshed",
    "Node Synchronized",
    "Authentication Successful",
    "Packet Received",
    "Connection Closed"
];

function generarEvento(){

    const logs =
    document.getElementById("logs");

    const linea =
    document.createElement("div");

    const hora =
    new Date().toLocaleTimeString();

    const evento =
    eventos[numeroAleatorio(0,eventos.length-1)];

    linea.innerHTML =
    "[" + hora + "] " + evento;

    logs.prepend(linea);

    while(logs.children.length > 100){
        logs.removeChild(logs.lastChild);
    }
}

setInterval(generarEvento,1000);function generarIP(){

    return (
        numeroAleatorio(1,255) + "." +
        numeroAleatorio(1,255) + "." +
        numeroAleatorio(1,255) + "." +
        numeroAleatorio(1,255)
    );

}

function agregarIP(){

    const body =
    document.getElementById("ipsBody");

    const fila =
    document.createElement("tr");

    fila.innerHTML = `
        <td>${generarIP()}</td>
        <td>${numeroAleatorio(1000,65000)}</td>
        <td>ONLINE</td>
    `;

    body.prepend(fila);

    while(body.children.length > 25){
        body.removeChild(body.lastChild);
    }

}

setInterval(agregarIP,1500);const estados = [
    "ONLINE",
    "ONLINE",
    "ONLINE",
    "ONLINE",
    "WARNING",
    "MAINTENANCE"
];

function actualizarEstados(){

    document.getElementById("estadoServidor").innerHTML =
    estados[numeroAleatorio(0, estados.length-1)];

    document.getElementById("estadoDB").innerHTML =
    estados[numeroAleatorio(0, estados.length-1)];

    document.getElementById("estadoAPI").innerHTML =
    estados[numeroAleatorio(0, estados.length-1)];

    document.getElementById("estadoNET").innerHTML =
    estados[numeroAleatorio(0, estados.length-1)];

}

setInterval(actualizarEstados,4000);

actualizarEstados();const ctx =
document.getElementById('graficaTrafico').getContext('2d');

const datos = [];

for(let i=0;i<20;i++){
    datos.push(numeroAleatorio(100,800));
}

const grafica = new Chart(ctx, {

    type:'line',

    data:{
        labels:new Array(20).fill(""),
        datasets:[{
            label:'Mbps',
            data:datos
        }]
    },

    options:{
        responsive:true,
        animation:false
    }

});

function actualizarGrafica(){

    datos.push(
        numeroAleatorio(100,900)
    );

    datos.shift();

    grafica.update();

}

setInterval(actualizarGrafica,1000);const mapa = L.map('mapa').setView([20, 0], 2);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:'© OpenStreetMap'
}
).addTo(mapa);const ciudades = [

{
nombre:"Santo Domingo",
lat:18.4861,
lng:-69.9312
},

{
nombre:"Santiago",
lat:19.4517,
lng:-70.6970
},

{
nombre:"New York",
lat:40.7128,
lng:-74.0060
},

{
nombre:"Madrid",
lat:40.4168,
lng:-3.7038
},

{
nombre:"Londres",
lat:51.5072,
lng:-0.1276
},

{
nombre:"París",
lat:48.8566,
lng:2.3522
},

{
nombre:"Toronto",
lat:43.6532,
lng:-79.3832
},

{
nombre:"Ciudad de México",
lat:19.4326,
lng:-99.1332
},

{
nombre:"São Paulo",
lat:-23.5505,
lng:-46.6333
},

{
nombre:"Tokio",
lat:35.6762,
lng:139.6503
}

];function crearMarcador(){

    const ciudad =
    ciudades[
        numeroAleatorio(
            0,
            ciudades.length - 1
        )
    ];

    const marcador =
    L.marker([
        ciudad.lat,
        ciudad.lng
    ]).addTo(mapa);

    marcador.bindPopup(
        "Actividad detectada<br>" +
        ciudad.nombre
    );

    setTimeout(() => {

        mapa.removeLayer(
            marcador
        );

    }, 15000);

}

setInterval(
    crearMarcador,
    3000
);function crearConexion(){

    const origen =
    ciudades[
        numeroAleatorio(
            0,
            ciudades.length - 1
        )
    ];

    const destino =
    ciudades[
        numeroAleatorio(
            0,
            ciudades.length - 1
        )
    ];

    const linea =
    L.polyline(
    [
        [origen.lat, origen.lng],
        [destino.lat, destino.lng]
    ]).addTo(mapa);

    setTimeout(() => {

        mapa.removeLayer(
            linea
        );

    }, 12000);

}setInterval(
    crearConexion,
    4000
);function actualizarActividadGlobal(){

    document.getElementById("usa").innerHTML =
    numeroAleatorio(1000,5000);

    document.getElementById("espana").innerHTML =
    numeroAleatorio(500,3000);

    document.getElementById("brasil").innerHTML =
    numeroAleatorio(1000,7000);

    document.getElementById("rd").innerHTML =
    numeroAleatorio(100,1500);

    document.getElementById("canada").innerHTML =
    numeroAleatorio(500,2500);

}

setInterval(
    actualizarActividadGlobal,
    2000
);

actualizarActividadGlobal();const tiposAlerta = [
    "INFO",
    "WARNING",
    "CRITICAL"
];

const mensajes = [
    "Node synchronized",
    "High traffic detected",
    "New global session",
    "Database response delay",
    "Network latency detected",
    "API request spike",
    "System check completed",
    "Cache refresh executed"
];

function generarAlerta(){

    const contenedor =
    document.getElementById("alertas");

    const tipo =
    tiposAlerta[
        numeroAleatorio(
            0,
            tiposAlerta.length - 1
        )
    ];

    const mensaje =
    mensajes[
        numeroAleatorio(
            0,
            mensajes.length - 1
        )
    ];

    const div =
    document.createElement("div");

    if(tipo === "INFO"){
        div.className = "alertaInfo";
    }

    if(tipo === "WARNING"){
        div.className = "alertaWarning";
    }

    if(tipo === "CRITICAL"){
        div.className = "alertaCritical";
    }

    div.innerHTML =
    "[" +
    new Date().toLocaleTimeString() +
    "] [" +
    tipo +
    "] " +
    mensaje;

    contenedor.prepend(div);

    while(contenedor.children.length > 60){

        contenedor.removeChild(
            contenedor.lastChild
        );

    }

}

setInterval(
    generarAlerta,
    2000
);

generarAlerta();