import './App.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// Lembrando que sem o CSS do leaflet, o mapa vai bugar
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            Esse é um popup <br /> Descrição do popup.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default App
