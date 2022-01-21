class Transporte
{
    constructor(tipo, origen, destino, hora, asientos)
    {
        this.type = tipo;
        this.origin = origen;
        this.destiny = destino;
        this.hour = hora;
        this.sits = asientos;
    }
}

var avion1 = new Transporte("avion", "Ecuadorrrr", "Canada", "7 am", 45);
var bus1 = new Transporte("bus", "quito", "guayaquil", "12 am", 35);

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
var dest_usuario;
var hora_usuario;
var pasajeros_cantidad;

//peticion_viaje();
//asignar_asientos();


