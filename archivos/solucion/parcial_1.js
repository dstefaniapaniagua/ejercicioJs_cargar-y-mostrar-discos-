// Variables:
var c = console.log;
(aCodigo = []), (aDiscos = []);

// Funciones:

// Función para resaltar las duraciones mayores a 180
function rojo(dur) {
  if (dur > 180) {
    return '<span style="color: red;">' + dur + "</span>";
  } else {
    return "<span>" + dur + "</span>";
  }
}

// Función para validar código único del disco
function validarCodigo(codigoDisco) {
  if (aCodigo.indexOf(codigoDisco) == -1) {
    aCodigo.push(codigoDisco);
  } else {
    return 0;
  }
}

function Cargar() {
  do {
    var nombre = "",
      banda = "",
      codigoDisco,
      pista,
      duracionPista,
      aPistas = [],
      aDisco = [];

    // Nombre:
    do {
      nombre = prompt("Ingrese nombre del disco");
    } while (!isNaN(nombre));

    // Banda:
    do {
      banda = prompt("Ingrese nombre de la banda");
    } while (!isNaN(banda));

    // Codigo Numerico Disco:
    do {
      codigoDisco = parseInt(prompt("Ingrese el código númerico del disco"));
    } while (!(codigoDisco > 1 && codigoDisco < 9999));

    // pistas del disco
    do {
      // pista:
      do {
        pista = prompt("Ingrese nombre de la pista");
      } while (!isNaN(pista));

      // duracionPistas:
      do {
        duracionPista = parseInt(prompt("Ingrese duracion pista"));
      } while (!(duracionPista >= 0 && duracionPista <= 7200));

      aPistas.push({ Pista: pista, Duracion: duracionPista });
      console.log(aPistas);
    } while (confirm("¿Desea ingresar más pistas?"));

    // Creo la info del disco:

    aDisco["Disco"] = nombre;
    aDisco["Banda"] = banda;
    aDisco["Codigo"] = codigoDisco;
    aDisco["Pistas"] = aPistas;
    aDiscos.push(aDisco);

    aDisco = [];
    aPistas = [];
  } while (confirm("¿Desea ingresar más discos?"));
}

function Mostrar() {
  var r = "",
    contDiscos = 0;

  for (var i = 0; i < aDiscos.length; i++) {
    contDiscos++;

    r += "<ul>";
    r += "<li> Disco: " + aDiscos[i]["Disco"] + "</li>";
    r += "<li> Banda: " + aDiscos[i]["Banda"] + "</li>";
    r += "<li> Codigo Del Disco: " + aDiscos[i]["Codigo"] + "</li>";
    r += "<li> Pistas: ";
    r += "<ul>";
    for (var j = 0; j < aDiscos[i].Pistas.length; j++) {
      r += "<li>Nombre: " + aDiscos[i].Pistas[j].Pista + "</li>";
      r += "<li>Duración: " + rojo(aDiscos[i].Pistas[j].Duracion) + "</li>";
    }

    r += "</ul>";
    r += "</li>";
    r += "</ul>";
    r += "<ul>";
    r +=
      "<li> El Disco: " +
      aDiscos[i]["Disco"] +
      " posee " +
      aDiscos[i].Pistas.length +
      " pistas </li>";
  }

  r +=
    '<span style="color: green;font-weight: bold; font-size: 2.5em;"> Tienes ' +
    contDiscos +
    " discos cargados </span>";
  // Llamo a la función 'Generar':
  Generar(r);
}
