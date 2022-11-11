import React from "react";
import axios from "axios";

class MapaService {
  static async getAcidente() {
    return axios.get("http://localhost:8080/alert");
  }

  static async update(id, mensagem) {
    return axios.put("http://localhost:8080/alert", {
      id: id,
      obs: mensagem,
    });
  }
}

export default MapaService;
