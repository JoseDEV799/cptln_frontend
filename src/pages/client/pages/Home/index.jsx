import { lazy, useEffect, useState } from "react";
import BackgroundHeaderImage from "../../../../assets/img_F_header.png";
import JoelImg from "../../../../assets/Joel_3.jpg";
import PasiImg from "../../../../assets/PASI_3.jpg";
import Slider from "react-slick";
// ../../../Api/Noticias.js
import { obtenerNoticia } from "@/Api/noticias";
import { obtenerEventos } from "@/Api/eventos";
import { obtenerProgramas } from "@/Api/programas";

import video from "../../../../assets/file.mp4"

import data from "../../data.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componentes lazy-loaded
const Header = lazy(() => import("@/pages/client/components/Header"));
const HomeProgramsCard = lazy(() =>
  import("./components/HomeProgramsCard.jsx")
);
const NewsCard = lazy(() => import("@/pages/client/components/NewsCard"));
const EventCard = lazy(() => import("@/pages/client/components/EventCard"));
const NewsLoader = lazy(() =>
  import("@/pages/client/components/Loaders/NewsLoader.jsx")
);
const HomeProgramsLoader = lazy(() =>
  import("@/pages/client/components/Loaders/HomeProgramsLoader.jsx")
);
const EventsLoader = lazy(() =>
  import("@/pages/client/components/Loaders/EventsLoader.jsx")
);

// Datos de los programas para el carrusel
const programs = [
  { imgSrc: JoelImg, name: "JOEL", tipo: "Niños y Adolescentes", linktipo: "", color: "bg-l_color_v", link: "/niños-adolescentes/joel" },
  { imgSrc: PasiImg, name: "PASI", tipo: "Niños y Adolescentes", color: "bg-l_color_r-600", link: "/programas/niños-adolescentes/pasi"},
  { imgSrc: JoelImg, name: "Creciendo en Familia", tipo: "Familia", color: "bg-l_color_y-600", link: "/programas/creciendo-en-familia"},
];

export const Home = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [fetchNoticias, setFetchNoticias] = useState([]);
  const [fetchEventos, setFetchEventos] = useState([]);
  const [fetchProgramas, setFetchProgramas] = useState([]);
  const [isLoadingNews, setIsLoadingNews] = useState(true); // Nuevo estado de carga
  const [isLoadingEvents, setIsLoadingEventes] = useState(true); // Nuevo estado de carga
  const [isLoadingPrograms, setIsLoadingPrograms] = useState(true); // Nuevo estado de carga

  useEffect(() => {
    const fetchProgram = async () => {
      const response = await obtenerProgramas();
      // console.log(response)
      setFetchProgramas(response.data);
      setIsLoadingPrograms(false);
    };
    fetchProgram();
    const fetch = async () => {
      const response = await obtenerNoticia();
      // console.log(response)
      setFetchNoticias(response.data);
      setIsLoadingNews(false);
    };
    fetch();
    const fetchEvent = async () => {
      const response = await obtenerEventos();
      // console.log(response)
      setFetchEventos(response.data);
      setIsLoadingEventes(false);
    };
    fetchEvent();
  }, []);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
  };

  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Sección del Header */}
      <div className="relative h-[45vh] min-h-[300px]">
        {/* Imagen de fondo */}
        <img
          src={BackgroundHeaderImage}
          alt="Header background"
          className="absolute inset-0 object-cover w-full h-full"
          style={{ objectFit: "cover" }}
        />
        {/* Filtro oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Contenido del Header */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
          <Header
            color="bg-transparent"
            title="CRISTO PARA TODAS LAS NACIONES - PERÚ"
            text="Llevando a Cristo a las Naciones y las Naciones a la Iglesia"
          />
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:gap-16 xl:gap-28 pb-12 lg:pb-16 xl:pb-28 mx-5">
        {/* Sección de Programas */}
        <div className="container min-[768px]:px-10 min-[1024px]:px-12 min-[1280px]:px-16 min-[1440px]:px-6 mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="h3-subtitles">Programas</h2>
            <a href="/programas">
              <button className="px-4 py-1 border rounded border-[#46797A] hover:bg-[#46797A] hover:text-white transition-colors duration-300">
                Ver todo
              </button>
            </a>
          </div>

          {/* Carrusel de Programas */}
          <div className="min-[768px]:px-5 min-[1024px]:px-6 min-[1280px]:px-8 min-[1440px]:px-10 min-[1920px]:px-12 mx-auto">
            <Slider {...carouselSettings}>
              {/* {fetchProgramas.map((program, index) => {
                //console.log(program); // Para ver si los datos son correctos
                // console.log(fetchProgramas)
                return (
                  
                  <div key={index} className="relative px-2">
                    <HomeProgramsCard program={program} />
                  </div>
                );
              })} */}
              {isLoadingPrograms // Mientras está cargando, muestra los skeletons
                ? Array(6) // Crear 6 skeletons como placeholders
                    .fill()
                    .map((_, index) => (
                      <HomeProgramsLoader key={index} /> // loading={true} activa los skeletons
                    ))
                : fetchProgramas.map((program, index) => {
                  //console.log(program); // Para ver si los datos son correctos
                  // console.log(fetchProgramas)
                  return (
                    
                    <div key={index} className="relative px-2">
                      <HomeProgramsCard program={program} />
                    </div>
                  );
                })
              }
            </Slider>
          </div>
        </div>

        <div className="flex w-full mx-5 sm:mx-10 sm:max-w-[645px] md:mx-auto md:max-w-[672px] lg:max-w-[980px] lg:mx-auto min-[1110px]:mx-auto min-[1110px]:max-w-[1025px] max-2xl:flex-col gap-10 2xl:gap-12 2xl:max-w-[1480px] 2xl:mx-12 min-[1650px]:mx-auto min-[1650px]:max-w-[1520px]  ">
          <div className="flex flex-col justify-between">
            <div className="">
              <h3 className="h3-subtitles">Creciendo en Familia</h3>
              <p className="standard-paragraph">knfalskfnsfklsnfklsnfalksfnasklfn asfnklsnflksdfn asnfdksdnfklsdf aksdnfksanf kasnfksdanf</p>
            </div>
            <a href="">
              <button className="px-4 py-1 border rounded border-[#46797A] hover:bg-[#46797A] hover:text-white transition-colors duration-300">Ir a Creciendo en Familia</button>
            </a>
          </div>
          <video src={video} controls className="min-w-[240px] w-auto h-auto rounded-t-xl lg:roundedt-none lg:rounded-md" />
        </div>

        {/* flex sm:mx-10 md:mx-auto lg:mx-10 min-[1110px]:mx-auto max-2xl:flex-col gap-10 2xl:gap-20 2xl:max-w-[1880px] 2xl:mx-16 min-[1650px]:mx-auto */}
        <div className="flex mx-5 sm:mx-10 md:mx-auto lg:mx-10 min-[1110px]:mx-auto min-[1110px]:max-w-[1025px] max-2xl:flex-col gap-10 2xl:gap-12 2xl:max-w-[1880px] 2xl:mx-16 min-[1650px]:mx-auto min-[1650px]:max-w-[1520px]  ">
          <div className="min-[310px]:mx-auto">
            <h3 className="h3-subtitles mb-5">Noticias</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {isLoadingNews // Mientras está cargando, muestra los skeletons
                ? Array(6) // Crear 6 skeletons como placeholders
                    .fill()
                    .map((_, index) => (
                      <NewsLoader key={index} /> // loading={true} activa los skeletons
                    ))
                : fetchNoticias.map((not, index) => (
                    <NewsCard
                      key={not._id}
                      title={not.titulo}
                      date={not.fecha}
                      description={not.cuerpo}
                      link={not._id}
                      imageSrc={not.portada}
                      loading={false} // loading={false} oculta los skeletons
                    />
                  ))}
            </div>
          </div>

          <div className=" min-[360px]:mx-auto">
            <h3 className="h3-subtitles mb-5">Eventos</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 gap-4 xl:gap-8 2xl:gap-6 place-items-center 2xl:max-w-[530px]">
              {isLoadingEvents // Mientras está cargando, muestra los skeletons
                ? Array(3) // Crear 6 skeletons como placeholders
                    .fill()
                    .map((_, index) => (
                      <EventsLoader key={index} /> // loading={true} activa los skeletons
                    ))
                : fetchEventos.map((event, index) => (
                    <EventCard
                      key={event._id}
                      date={event.fecha}
                      hora={event.hora}
                      title={event.titulo}
                      description={event.cuerpo}
                      location={event.ubicacion}
                    />
                  ))}
              {/* <EventCard
              date="ABR 30 2024"
              title="Evento 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              location="Av. Independencia N° 100"
            />
            <EventCard
              date="ABR 30 2024"
              title="Evento 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              location="Av. Independencia N° 100"
            />
            <EventCard
              date="ABR 30 2024"
              title="Evento 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              location="Av. Independencia N° 100"
            /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
