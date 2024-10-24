import { lazy } from "react";
import LugarFe from "../../../../assets/Lugar_fe.jpg";
import JOELPhoto from "../../../../assets/Joel_1.jpg";
import EquipandoImg from "../../../../assets/Equipando_santos.jpg";

const Header = lazy(() => import("@/pages/client/components/Header"));
const ProgramCard = lazy(() => import("@/pages/client/pages/Programs/components/ProgramCard.jsx"));


export const Programs = () => {
    return(
        <div className="flex flex-col gap-12 lg:gap-16 xl:gap-24 pb-12 xl:pb-24">
            <Header color="bg-l_color_y-600" title="Programas"/>
            <div className="flex flex-col gap-12 lg:gap-16 xl:gap-24">
                <ProgramCard color="bg-l_color_o-600" title="Niños y Adolescentes" img={JOELPhoto} description="Trabajamos con 3 proyectos relacionados a los niños, nuestro objetivo es poder enseñar valor y principios con fundamento bíblico sin descuidar temas actuales que tienen relevancia como lo es el abuso sexual infantil" posicion="derecha" link="/programas/niños-adolescentes"/>
                <ProgramCard color="bg-l_color_y-700" title="Familia" img={LugarFe} description="En relación a la familia, CPTLN promueve dos programas que nos hablan de temas importantes a tratar en familia, podemos encontrar material de soporte para saber como actuar en diferentes situaciones, así como un acompañamiento virtual" posicion="izquierda" link="/programas/familia"/>
                <ProgramCard color="bg-l_color_v" title="Equipando los Santos" img={EquipandoImg} description="Como miembros del cuerpo de Cristo es importante poder equiparnos con el arma principal, que es la Palabra de Dios, es por ello que en este programa nos enfocamos en el discipulado de nuestros hermanos en la fe, brindándoles algunas herramientas para poder seguir cumpliendo nuestro rol como soldados de Dios " link="/noticias-y-eventos"/>
            </div>
        </div>
    );
}

export default Programs