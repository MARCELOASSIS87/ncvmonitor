import React, { useEffect, useState } from "react";
import MapaService from "../services/MapaService";
import Mapa from "../components/Mapa";
import AlertTable from "../components/AlertTable";

const Portal = () => {
  const [listaAcidentes, setListaAcidentes] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longetude, setLongetude] = useState("");

  function consultaAcidente() {
    MapaService.getAcidente().then((response) => {
      setListaAcidentes(response.data);
    });
  }

  function mostrarLocalizacao(latitude, longetude){
    setLatitude(latitude);
    setLongetude(longetude);
  }
  useEffect(() => {
    consultaAcidente();
    setInterval(() => {
      consultaAcidente();
    }, 1000 * 10);
  }, []);

  return (
    <>
      <div className="container navbar">
        <nav class="navbar fixed-top navbar-dark bg-dark">
          <span className="navbar-brand textoNavbar">NCV Monitor</span>
        </nav>
      </div>

      <div className="bg-dark text-warning mt-5 mb-5">
        <h1>Acidentes:</h1>
        <AlertTable 
        mostrarLocalizacao = {mostrarLocalizacao}
        acidentes={listaAcidentes}
        consultaAcidente={consultaAcidente} />
      </div>

      <div className="divMapa">
        <Mapa 
        latitude={latitude} longetude={longetude}
        // latitude={"-27.590824"} longetude="-48.551262"
        
        />
      </div>
    </>
  );
};

export default Portal;
