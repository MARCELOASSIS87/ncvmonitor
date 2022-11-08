import React from "react";
import axios from "axios";

class MapaService {
  static async getAcidente() {
    return axios.get("http://localhost:8080/alert");
  }
}

export default MapaService;
