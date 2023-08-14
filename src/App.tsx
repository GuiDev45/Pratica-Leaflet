import "./App.css";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// https://geojson.io Link para gerar um geojson já com polígono onde precisar
/*
Existe uma biblioteca que gerencia essa funcionalidade, conhecida como JSON Server.
Ela faz uma api baseada no seu json.
https://www.npmjs.com/package/json-server
*/

function App() {
  // Define um array de coordenadas geográficas para criar um polígono.
  const coordinates = [
    [-22.725384792149157, -47.648881738317726],
    [-22.72577596168361, -47.64800147648944],
    [-22.724967324266984, -47.64761302086541],
    [-22.724602449721928, -47.64846477218899],
    [-22.725384792149157, -47.648881738317726],
  ];

  // Criando um array de coordenadas para o polígono
  // Converte as coordenadas em objetos 'LatLng' do Leaflet.
  const polygonCoordinates = coordinates.map((coord) =>
    L.latLng(coord[0], coord[1])
  );

  return (
    <div>
      {/* Cria um componente de mapa usando o 'MapContainer' do react-leaflet, definindo o centro e o zoom inicial. */}
      <MapContainer center={[-22.7253, -47.6498]} zoom={13}>
        {/* Adiciona uma camada de (tiles) do OpenStreetMap como base do mapa. */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Renderiza um polígono no mapa, usando as coordenadas definidas anteriormente. */}
        <Polygon
          positions={polygonCoordinates}
          color="blue"
          fillColor="blue"
          fillOpacity={0.3}
        />
      </MapContainer>
    </div>
  );
}

// Exporta o componente 'App' como o componente principal da aplicação.
export default App;
