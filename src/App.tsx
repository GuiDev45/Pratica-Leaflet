import './App.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// importa o arquivo de estilo CSS do pacote Leaflet, que é a biblioteca subjacente usada pelo react-leaflet para renderizar mapas. É importante importar esse arquivo de estilo para que o mapa seja exibido corretamente.
import "leaflet/dist/leaflet.css";

// Aqui começa a definição do componente App. É uma função React que retorna a estrutura do componente.
function App() {
  return (
    <div>
      {/* Inicia um componente MapContainer que representa um contêiner para o mapa interativo. Ele possui duas propriedades: center, que define a coordenada do centro do mapa [latitude e longitude], e zoom, que define o nível de zoom inicial do mapa.*/}
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        {/* Este componente TileLayer representa uma camada de mosaico do mapa. Ele recebe uma URL para os mosaicos do mapa a serem exibidos, bem como atribuições de direitos autorais.*/}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Marker representa um marcador que será exibido no mapa. Ele recebe a propriedade position, que define a coordenada onde o marcador será colocado.*/}
        <Marker position={[51.505, -0.09]}>
          {/* componente Popup é usado para criar uma caixa de diálogo pop-up associada a um marcador. Ele contém texto que será exibido no pop-up, neste caso, "Esse é um popup" e "Descrição do popup."*/}
          <Popup>
            Esse é um popup <br /> Descrição do popup.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

// Exporta o componente App como o componente padrão deste módulo, o que permite que ele seja usado em outros lugares do código.
export default App
