import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCss3 } from "react-icons/si";

// import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { FaAws } from "react-icons/fa";



export function Skills() {
    return(
        <div className="flex flex-col justify-center items-center pt-10 text-white">
            <p className="text-4xl m-5 justify-start max-[600px]:text-[20px]">
                Habilidades
            </p>

            <div className="flex flex-wrap items-center justify-around gap-8">
                <FaReact  size={50} color="#58D5EF"/>
                <SiTypescript size={50} color="#2B75C5" />
                <IoLogoJavascript size={50} color="#E8D44D" />
                <FaHtml5 size={50} color="#DD4C22" />
                <SiCss3 size={50} color="#254BDF" />
                <SiStyledcomponents size={50} color="#ED74D5" />
                <SiJest size={50} color="#15C213"/>
                <SiCypress size={50} color="#007780"/>
                <FaAws size={50} color="#F79400"/>
            </div>

        </div>
    )
}