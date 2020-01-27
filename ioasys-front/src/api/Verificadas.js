import api from "./api";

export const getAll = async params =>
    api.post("api/verificadas/retornarVerificadas", params);
  
export const update = async params =>
    api.put("api/verificadas/editarVerificada ", params);

export const remove = async params =>
    api.post("/api/verificadas/removerVerificada", params);
