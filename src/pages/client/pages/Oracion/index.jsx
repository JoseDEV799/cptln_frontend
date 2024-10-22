import { lazy, useState, useEffect } from "react";
import OriginalLogo from "../../../../assets/OriginalLogo.png";
import Logo_Wpp from "../../../../assets/Logo_Wpp.png";
import Fondo_C from "../../../../assets/Petición de oración.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = lazy(() => import("@/pages/client/components/Header"));

export const OracionPeticion = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col gap-20">
            {/* Header */}
            <Header color="bg-l_color_y-600" title="PETICIÓN DE ORACIÓN" />
            {/* Main Content */}
            <div className="flex flex-col -mt-10 mb-10 [@media(min-width:1280px)]:flex-row justify-center mx-auto h-90 [@media(min-width:1280px)]:w-[75%] [@media(min-width:1920px)]:w-[65%] gap-0">
                {/* Contenedor principal */}
                <div className="flex flex-col [@media(min-width:1280px)]:flex-row w-full">
                    {/* Sección del formulario */}
                    {isMobile ? (
                        <div className="p-8 bg-l_color_y-700 rounded-none">
                            <div className="flex justify-center mb-6">
                                <img src={OriginalLogo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                            </div>
                            <form>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <input type="text" placeholder="Nombre" className="p-3 bg-gray-100 rounded-md" />
                                    <input type="text" placeholder="Apellido" className="p-3 bg-gray-100 rounded-md" />
                                </div>
                                <input type="email" placeholder="Correo Electrónico" className="w-full p-3 mb-4 bg-gray-100 rounded-md" />
                                <textarea placeholder="Mensaje" className="w-full h-40 p-3 bg-gray-100 rounded-md"></textarea>
                                <button type="submit" className="w-full p-3 mt-4 text-white rounded-md bg-l_color_y-600">Enviar</button>
                            </form>
                        </div>
                    ) : (
                        <div className="w-full [@media(min-width:1280px)]:w-1/2 bg-l_color_y-700 p-8 rounded-none">
                            <div className="p-8 bg-[#EAE9E5] rounded-none">
                                {/* Logo */}
                                <div className="flex justify-center mb-6">
                                    <img src={OriginalLogo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                                </div>
                                {/* Formulario */}
                                <form>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <input type="text" placeholder="Nombre" className="p-3 bg-gray-100 rounded-md" />
                                        <input type="text" placeholder="Apellido" className="p-3 bg-gray-100 rounded-md" />
                                    </div>
                                    <input type="email" placeholder="Correo Electrónico" className="w-full p-3 mb-4 bg-gray-100 rounded-md" />
                                    <textarea placeholder="Mensaje" className="w-full h-40 p-3 bg-gray-100 rounded-md"></textarea>
                                    <button type="submit" className="w-full p-3 mt-4 text-white rounded-md bg-l_color_y-600">Enviar</button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Sección de contacto */}
                    <div className="relative w-full [@media(min-width:1280px)]:w-1/2 [@media(max-width:1279px)]:mt-8">
                        {/* Imagen de fondo */}
                        <div className="absolute inset-0 bg-center bg-cover">
                            <img src={Fondo_C} alt="Imagen de fondo" className="object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                        </div>

                        {/* Información de contacto */}
                        <div className="relative z-10 flex flex-col justify-center h-full p-8 text-white">
                            <h2 className="h3-subtitles mb-4 font-semibold">Únete a nuestro grupo de WhatsApp</h2>
                            <p className="standard-paragraph mb-2">Cada dia enviaremos un devocional</p>
                            {/* Icono de WhatsApp */}
                            <a href="https://chat.whatsapp.com/tu-enlace-al-grupo" target="_blank" rel="noopener noreferrer" className="block mt-2 sm:mt-4">
                                <img src={Logo_Wpp} alt="WhatsApp" className="w-8 h-8 sm:w-10 sm:h-10" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OracionPeticion;