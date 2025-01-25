import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";
import { SiStyledcomponents } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

export function Skills() {
    return(
        <div className="flex flex-col justify-center items-center pt-10 text-white">
            <p className="text-4xl m-5 justify-start max-[600px]:text-[20px]">
                Habilidades
            </p>
            <div className="flex flex-wrap items-center justify-around gap-8 w-2/3">
                <div className="flex items-center gap-2">
                    <FaHtml5 size={50} color="#E34F26" /> <span>HTML5</span>
                </div>
                <div className="flex items-center gap-2">
                    <SiCss3 size={50} color="#1572B6" /> <span>CSS3</span>
                </div>
                <div className="flex items-center gap-2">
                    <SiStyledcomponents size={50} color="#DB7093" /> <span>Styled Components</span>
                </div>
                <div className="flex items-center gap-2">
                    <BiLogoTailwindCss size={50} color="#06B6D4" /> <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2">
                    <IoLogoJavascript size={50} color="#F7DF1E" /> <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                    <SiTypescript size={50} color="#3178C6" /> <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaReact size={50} color="#61DAFB" /> <span>React.js</span>
                </div>
                <div className="flex items-center gap-2">
                    <SiNextdotjs size={50} color="#FFF" /> <span>Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                    <SiRedux size={50} color="#764ABC" /> <span>Redux</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaNodeJs size={50} color="#83CD29" /> <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2">
                    <SiJest size={50} color="#C21325" /> <span>Jest</span>
                </div>
                <div className="flex items-center gap-2">
                    <SiCypress size={50} color="#17202C" /> <span>Cypress</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaAws size={50} color="#FF9900" /> <span>AWS</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaFigma size={50} color="#F24E1E" /> <span>Figma</span>
                </div>
            </div>
        </div>
    )
}