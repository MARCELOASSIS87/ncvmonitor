import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import './mapa.css'



const Mapa = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDI-rqD6NdXwZu2KUuiDWkvlA4PmGIAJvw"
  })
  
  return (
    <div className='mapa'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{
            lat:
              -27.590824,
            lng:
              -48.551262,
          }}
          zoom={20}
        >
          <Marker
            position={{
              lat:
                -27.590824,
              lng:
                -48.551262,
            }}
            options={{
              label: {
                text: "Local do Capotamento",
                className: "mapa-marker"
              }
            }} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Mapa

// Aqui Será exibido o mapa!    
//       {/* Geocodificação reversa ele envia essa requisição para api do google maps não sei se é bem isso */}
//       https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY