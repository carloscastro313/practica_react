export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);

  return fechaNueva.toLocaleString("es-ES", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};
