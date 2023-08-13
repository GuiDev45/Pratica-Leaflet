import './App.css';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// https://geojson.io Link para gerar um geojson já com polígono onde precisar

function App() {
  const coordinates = [
    [-22.725384792149157, -47.648881738317726],
    [-22.72577596168361, -47.64800147648944],
    [-22.724967324266984, -47.64761302086541],
    [-22.724602449721928, -47.64846477218899],
    [-22.725384792149157, -47.648881738317726]
  ];

  // Criando um array de coordenadas para o polígono
  const polygonCoordinates = coordinates.map(coord => L.latLng(coord[0], coord[1]));

  return (
    <div>
      <MapContainer center={[-22.7253, -47.6498]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Renderizando o polígono */}
        <Polygon positions={polygonCoordinates} color="blue" fillColor="blue" fillOpacity={0.3} />
      </MapContainer>
    </div>
  );
}

export default App;
