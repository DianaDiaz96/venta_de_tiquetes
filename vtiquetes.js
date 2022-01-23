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
transportes.push(new Transporte(1, "avion", "Ecuadorrrr", "Canada", "7 am", 45))
transportes.push(new Transporte(1, "bus", "quito", "guayaquil", "12 am", 35))


//elecciones del usuario
var dest_usuario;
var hora_usuario;
var pasajeros_cantidad;

//pregunta actual
var s_destiny = true;
var s_hour = false;
var c_people = false;

var b_back = document.getElementById("back");
var b_select = document.getElementById("select");
var b_next = document.getElementById("next");

b_back.addEventListener("click", go_back);
b_select.addEventListener("click", select_item);
b_next.addEventListener("click", go_next);



//FUNCTIONS//

//funciones de los botones

function go_back()
{
    switch(true)
    {
        case s_destiny:
            alert("destino");
        break;
        case s_hour:
            alert("hora");
        break;
        case c_people:
            alert("pasajeros")
        break;
    }
}
function select_item()
{
    switch(true)
    {
        case s_destiny:
            alert("destino");
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
            alert("destino");
        break;
        case s_hour:
            alert("hora");
        break;
        case c_people:
            alert("pasajeros")
        break;
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



