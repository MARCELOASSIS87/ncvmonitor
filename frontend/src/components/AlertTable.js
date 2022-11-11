import React from "react";
import { AiOutlineAlert, AiOutlineCheck } from "react-icons/ai";
import Swal from "sweetalert2";
import MapaService from "../services/MapaService";

const AlertTable = (props) => {
  const Swal = require("sweetalert2");
  function update(acidente) {
    Swal.fire({
      title: "Acidente do usuario: " + acidente.name + " " + acidente.lastName,
      input: "text",
      inputLabel: "Adicionar observação: ",
      showCancelButton: true,
      confirmButtonText: "Confirmar envio de socorro",
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        MapaService.update(acidente.id, result.value).then((response) => {
          props.consultaAcidente();
        });
      }
    });
  }

  function verDetalhes(acidente){
    Swal.fire({
        icon: 'info',
        title: 'Acidente de '+ acidente.name + " " + acidente.lastName,
        text: acidente.obs,
      })
  }
  return (
    <>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col" style={{alignItems:"right"}}></th>
          </tr>
        </thead>
        <tbody>
          {props.acidentes.map((acidente) => (
            <>
              <tr>
                <td
                  className={acidente.status === 0 ? "bg-danger" : "bg-dark"}
                  style={{ fontSize: "1.5rem" }}
                >
                  {acidente.status === 0 ? (
                    <AiOutlineAlert />
                  ) : (
                    <AiOutlineCheck />
                  )}
                </td>
                <td className={acidente.status === 0 ? "bg-danger" : "bg-dark"}>
                  {acidente.name}
                </td>
                <td className={acidente.status === 0 ? "bg-danger" : "bg-dark"}>
                  {acidente.lastName}
                </td>
                <td style={{textAlign:"center"}} className={acidente.status === 0 ? "bg-danger" : "bg-dark"}>
                {acidente.status === 0 ? 
                  <button
                    class="btn btn-light"
                    onClick={() => {
                      update(acidente);
                    }}
                  >
                    Adicionar socorro
                  </button>
:
                  <button

                    class="btn btn-light"
                    onClick={() => {
                      verDetalhes(acidente);
                    }}
                  >
                    Ver detalhes
                  </button>}
                  <button
                                    style={{marginLeft:"1rem"}}
                    class="btn btn-light"
                    onClick={() => {
                      props.mostrarLocalizacao(
                        acidente.latitude,
                        acidente.longetude
                      );
                    }}
                  >
                    Mostrar localizacao
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AlertTable;
