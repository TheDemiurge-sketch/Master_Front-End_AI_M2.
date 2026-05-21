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
  for (var i = 0; i < destinos.length; i++) {
    var viaje = destinos[i];
    console.log('Destino: ' + viaje.destino);
    console.log('Fecha: ' + viaje.fecha);
    console.log('Transporte: ' + viaje.transporte);
    console.log('Costo: $' + viaje.costo);
    console.log('--------------------------');
  }
}

// app.js

function iniciarApp(params) {
  registrarDestino('Paris', '2024-06-15', 'Avión');
  registrarDestino('Londres', '2024-07-01', 'Tren');

  mostrarItinerario();
}

iniciarApp();
