const mapa = () => {
  return (
    <div>
        Aqui Será exibido o mapa!
        {/* Geocodificação reversa ele envia essa requisição para api do google maps não sei se é bem isso */}
        https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
    </div>
  )
}

export default mapa