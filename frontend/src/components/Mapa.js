import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState } from "react";
import "./../pages/mapa.css";

const Mapa = (props) => {
  const [latitude, setLatitude] = useState(props.latitude);
  const [longetude, setLongetude] = useState(props.longetude);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDI-rqD6NdXwZu2KUuiDWkvlA4PmGIAJvw",
  });
  return (
    <>
      <div className="mapa">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{
              lat: Number(props.latitude),
              lng: Number(props.longetude),
            }}
            zoom={15}
          >
            <Marker
              position={{
                lat: Number(props.latitude),
                lng: Number(props.longetude),
              }}
              options={{
                label: {
                  text: "Local do Capotamento",
                  className: "mapa-marker",
                },
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Mapa;

// Aqui Será exibido o mapa!
//       {/* Geocodificação reversa ele envia essa requisição para api do google maps não sei se é bem isso */}
//       https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
