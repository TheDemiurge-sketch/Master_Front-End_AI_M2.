// viajes.js

var destinos = [Paris, Londres, NewYork];

function registrarDestino(destino, fecha, transporte) {
  var nuevoViaje = {
    destino: destino,
    fecha: fecha,
    transporte: transporte,
    costo: calcularCosto(destino, transporte),
  };
  destinos.push(nuevoViaje);
}

function calcularCosto(destino, transporte) {
  var costoBase = 0;
  if (destino === 'Paris') {
    costoBase = 500;
  } else if (destino === 'Londres') {
    costoBase = 400;
  } else if (destino === 'NewYork') {
    costoBase = 600;
  }

  if (transporte === 'Avión') {
    costoBase += 200;
  } else if (transporte === 'Tren') {
    costoBase += 100;
  }

  return costoBase;
}

function mostrarItinerario(params) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
}
