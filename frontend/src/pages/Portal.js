import React, { useEffect, useState } from "react";
import MapaService from "../services/MapaService";
import Mapa from "./Mapa";

const Portal = () => {
  const [listaAcidentes, setListaAcidentes] = useState([]);

  function consultaAcidente() {
    MapaService.getAcidente().then((response) => {
      setListaAcidentes(response.data);
    //   console.log(response.data);
    //   console.log(listaAcidentes);
    });
  }
  useEffect(() => {
    consultaAcidente();
    setInterval(() => {
      consultaAcidente();
    }, 1000 * 30);
  }, []);

  return (
    <>
      <div className="container navbar">
        <nav class="navbar fixed-top navbar-dark bg-dark">
          <a className="navbar-brand textoNavbar">NCV Monitor</a>
        </nav>
      </div>

      <div className="bg-dark text-warning mt-5 mb-5">
        <h1>Acidentes:</h1>
        {listaAcidentes.map((acidente) => 
            <>
            {console.log(acidente)}
          <h1>{acidente.id} - {acidente.name} {acidente.lastName}</h1>
            </>
        )}
      </div>

      <div className="divMapa">
        <Mapa
        latitude= "-27.590824"
        longetude= "-48.551262"
        />
      </div>
    </>
  );
};

export default Portal;
