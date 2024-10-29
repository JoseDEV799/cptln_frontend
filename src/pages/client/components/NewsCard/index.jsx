import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ title, date, description, link, imageSrc }) => {

  function convertirFechaPersonalizada(fecha) {
    const fechaObj = new Date(fecha);

    const dia = fechaObj.getDate()-1;
    const mes = fechaObj.toLocaleString('es-ES', { month: 'long' });
    const año = fechaObj.getFullYear();

    return `${mes.charAt(0).toUpperCase() + mes.slice(1)} ${dia}, ${año}`;
  }     

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md min-w-[240px] max-w-[300px] flex flex-col ">
      <img src={imageSrc} alt={title} className="object-cover w-full h-48 hover:scale-105 transition-all duration-500" />
      <div className="p-6">
        <h3 className="mb-2 text-lg font-bold truncate">{title}</h3>
        <p className="text-sm text-gray-600">{convertirFechaPersonalizada(date)}</p>
        <p className="mt-2 text-sm text-gray-800 line-clamp-3 h-16" dangerouslySetInnerHTML={{ __html: description}}></p>
        <a href={"/noticia/" + link} className="block font-bold w-full text-end mt-4 hover:underline text-l_color_v">
          Seguir Leyendo →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
