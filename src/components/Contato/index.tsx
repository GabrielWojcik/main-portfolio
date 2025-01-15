import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export function Contact() {
    return(
        <div className="flex flex-col justify-center items-center pt-10 text-white">
            <p className="text-4xl m-5 justify-start max-[600px]:text-[20px]">
                Contato
            </p>

            <div className="flex flex-wrap items-center gap-8 w-1/2 max-[600px]:w-[100%] max-[600px]:p-2">
                <p>
                    Atualmente, estou em busca de uma oportunidade como desenvolvedor Front-end 
                    para integrar uma equipe multifuncional que valorize a melhoria da experiência 
                    das pessoas por meio de um design acessível. Se você tem um projeto interessante 
                    ou acredita que meu perfil possa agregar ao seu time, vamos nos conectar e explorar 
                    como posso contribuir para a criação de soluções inovadoras e centradas no usuário.
                </p>
                <a href="https://wa.link/ysetfq" target="_blank">
                    <FaWhatsapp size={50} color="#4CC659" />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-wojcik/" target="_blank">
                    <CiLinkedin size={50} color="#0073B2" />
                </a>
                <a href="https://www.instagram.com/gabriel.wojcik?igsh=MXB1a3czajZqdXBsNQ%3D%3D&utm_source=qr" target="_blank">
                    <FaInstagram size={50} color="#9111E5" />
                </a>
                
            </div>

        </div>
    )
}