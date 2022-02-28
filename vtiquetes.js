
class Transporte
{
    constructor(n_vuelo, tipo, origen, destino, hora, asientos)
    {
        this.n_plane = n_vuelo;
        this.type = tipo;
        this.origin = origen;
        this.destiny = destino;
        this.hour = hora;
        this.sits = asientos;
    }
}

var transportes = [];
transportes.push(new Transporte(1, "avion", "Ecuadorrrr", "Canada", "7 am", 45));
transportes.push(new Transporte(1, "bus", "quito", "guayaquil", "12 am", 35));
transportes.push(new Transporte(2, "avion", "Ecuadorrr", "Canada", "4 pm", 45));
transportes.push(new Transporte(2, "bus", "Quito", "Manabi", "3 pm", 35));


//elecciones del usuario
var dest_usuario;
var hora_usuario;
var pasajeros_cantidad;

//pregunta actual
var s_destiny = false;
var s_hour = false;
var c_people = false;
var n_d = 0;
var n_h = 0;
var n_p = 0;
var c_destiny = transportes.length - 1;
var destinos = [];
var aceptar;

var b_back = document.getElementById("back");
var b_select = document.getElementById("select");
var b_next = document.getElementById("next");
var display = document.getElementById("pantalla");

b_back.addEventListener("click", go_back);
b_select.addEventListener("click", select_item);
b_next.addEventListener("click", go_next);

clasificar_destinos();
var c_destinos = destinos.length - 1;

//FUNCTIONS//

//funciones de los botones

function go_back()
{
    switch(true)
    {
        case s_destiny:
            if(n_d > 0 && n_d <= c_destinos){
                n_d -= 1;
                display.innerHTML = destinos[n_d];
            }
            else{
                n_d = c_destinos;
                display.innerHTML = destinos[n_d];    
            }
        break;
        case s_hour:
            alert("hora");
        break;
        case c_people:
            alert("pasajeros")
        break;
        default: s_destiny = true;
    }
}
function select_item()
{
    switch(true)
    {
        case s_destiny:
            dest_usuario = transportes[n_d].destiny;
            display.innerHTML = "seleccione hora";
            s_destiny = false;
            s_hour = true;
        break;
        case s_hour:
            alert("hora");
        break;
        case c_people:
            alert("pasajeros")
        break;
    }
}

function go_next()
{
     switch(true)
    {
        case s_destiny:
            if(n_d >= 0 && n_d < c_destinos)
            {
                n_d++;
                display.innerHTML = destinos[n_d];
            }
            else{
                n_d = 0;
                display.innerHTML = destinos[n_d];
            }
        break;
        case s_hour:
            if(n_h >= 0 && n_h < c_destiny){
                n_h++;
                display.innerHTML = transportes[n_d].hour;
            }
            else{
                n_h = 0;
                display.innerHTML = transportes[n_d].hour;
            }
        break;
        case c_people:
            alert("pasajeros")
        break;
        default: s_destiny = true;
    }
}

// funcion de clasificacion
function clasificar_destinos()
{
    for(n in transportes)
{
    if(n == 0)
    {
        destinos.push(transportes[n].destiny);
    }
    if(n > 0 && n <= c_destiny){
        aceptar = true;
        for(d in destinos){
            if(destinos[d] == transportes[n].destiny){
                aceptar = false;
            }
        }
        if(aceptar)
        {
            destinos.push(transportes[n].destiny);
        }
    }

}
}
//funciones del proceso
function peticion_viaje()
{
 dest_usuario = prompt("¿a que lugar desea viajar ?");
 hora_usuario = prompt("hora");
 pasajeros_cantidad = parseInt(prompt("numero de asientos"));
 asignar_asientos();

}
function asignar_asientos()
{
    if( dest_usuario == avion1.destiny)
{
    if(hora_usuario == avion1.hour)
    {
        if(avion1.sits >= pasajeros_cantidad)
        {alert("vuelo asignado"); avion1.sits -= pasajeros_cantidad; peticion_viaje();}
        else{alert("los sentimos ya no hay asientos disponibles");
    peticion_viaje();}
    }
    else
    {
        alert("lo sentimos no disponemos a esa hora ");
        peticion_viaje();
    }
}
else if(dest_usuario == bus1.destiny)
{
    if(hora_usuario == bus1.hour)
    {
        if(pasajeros_cantidad => bus1.sits)
        {alert("vuelo asignado");
        bus1.sits = bus1.sits - pasajeros_cantidad;
        }
    }
    else
    {
        alert("lo sentimos no disponemos a esa hora ")
    }
}
else{
    alert("lo sentimos no disponemos de ese destino");
}
}



