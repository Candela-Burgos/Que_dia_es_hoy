const texto = document.querySelector('#parrafo');

let retornarDiaSemana = (dia) => {

    switch(dia){
        case 0:
            return 'Domingo';
            break;
        case 1:
            return 'Lunes';
            break;
        case 2:
            return 'Martes';
            break;
        case 3:
            return 'Miercoles';
            break;
        case 4:
            return 'Jueves';
            break;
        case 5:
            return 'Viernes';
            break;
        case 6:
            return 'Sabado';
            break;
        default:
            return 'No existe el dia';
    }

}

let retornarMes = (mes) => {

    switch(mes){
        case 0:
            return 'Enero';
            break;
        case 1:
            return 'Febrero';
            break;
        case 2:
            return 'Marzo';
            break;
        case 3:
            return 'Abril';
            break;
        case 4:
            return 'Mayo';
            break;
        case 5:
            return 'Junio';
            break;
        case 6:
            return 'Julio';
            break;
        case 7:
            return 'Agosto';
            break;
        case 8:
            return 'Septiembre';
            break;
        case 9:
            return 'Octubre';
            break;
        case 10:
            return 'Noviembre';
            break;
        case 11:
            return 'Diciembre';
            break;
        default:
            return 'No existe el mes';
    }

}

let obtenerFecha = () => {

    let fecha = new Date();

    let cadena = `"Hoy es ${retornarDiaSemana(fecha.getDay())} ${fecha.getDate()} de ${retornarMes(fecha.getMonth())} de ${fecha.getFullYear()}"`;

    return cadena;

}

let contenido = document.createTextNode(obtenerFecha());

texto.appendChild(contenido);