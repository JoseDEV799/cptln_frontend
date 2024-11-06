import axios from "./axios";

// Radio
export const obtenerDatosDeRadio = () => axios.get(`admin/radio`)
export const actualizarDatosDeRadio = (data) => axios.post(`admin/radio`, data)

// Secciones
export const obtenerSecciones = () => axios.get(`/admin/radio/secciones` )
export const agregarSeccion = (data) => axios.post(`/admin/radio/secciones`, data )
export const obtenerSeccion = (id) => axios.get(`/admin/radio/secciones/${id}` )
export const modificarSeccion = (id, data) => axios.post(`/admin/radio/secciones/${id}`, data)

// Contenido
export const obtenerSeccionContenidos = (idseccion) => axios.get(`/admin/radio/secciones/${idseccion}/contenido` )
export const agregarSeccionContenido = (idseccion,data) => axios.post(`/admin/radio/secciones/${idseccion}/contenido`, data )
export const obtenerSeccionCotenido = (idseccion, idcontenido) => axios.get(`/admin/radio/secciones/${idseccion}/contenido/${idcontenido}` )
export const modificarSeccionContenido = (idseccion, idcontenido, data) => axios.post(`/admin/radio/secciones/${idseccion}/contenido/${idcontenido}`, data)

export const obtenerRadioDataCliente = () => axios.get(`client/radio`)
export const obtenerRadioDataSeccion = (id) => axios.get(`client/radio/seccion/${id}`)