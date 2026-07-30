const graph = {
  CDMX: ['Puebla', 'Morelos', 'Querétaro', 'Toluca', 'Hidalgo'],
  Puebla: ['CDMX', 'Orizaba', 'Morelos'],
  Orizaba: ['Puebla'],
  Morelos: ['Tuxtla', 'CDMX'],
  Queretaro: ['CDMX', 'Morelos', 'Guadalajara'],
  Guadalajara: ['Querétaro', 'Tuxtla'],
  Toluca: ['CDMX', 'Hidalgo', 'Orizaba'],
  Hidalgo: ['Tuxtla', 'Toluca'],
  Tuxtla: ['Morelos', 'Querétaro', 'Puebla'],
};

console.log(graph.CDMX);

graph.Aguascalientes = [];

graph.Aguascalientes.push('Querétaro', 'Guadalajara');

graph.CDMX = graph.CDMX.filter((city) => city !== 'Hidalgo');

console.log(graph);

// Graph Class
class Graphs {
  constructor(parameters) {
    this.vertices = {};
  }
  addNodes(name) {
    this.nodes[name] = [];
  }
  addConnection(origin, destiny) {
    this.nodes[origin].push(destiny);
    this.nodes[destiny].push(origin);
  }
}

const México = new Graphe();
México.addNodes('CDMX');
México.addNodes('Puebla');
console.log(México.nodes);
