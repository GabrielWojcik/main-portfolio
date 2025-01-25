import Image from "next/image";
import Icon1 from "../../assets/icons/Rectangle.svg";
import Icon2 from "../../assets/icons/Rectangle2.svg";
import Icon3 from "../../assets/icons/Rectangle3.svg";
import Icon4 from "../../assets/icons/Rectangle4.svg";
import Gradient from "../../assets/icons/Big-Gradient.svg";


export function WorkExpirience() {
    return(
        <div className="flex flex-col justify-center items-center pt-10 text-white">
            <p className="text-4xl m-5 justify-start max-[600px]:justify-center max-[600px]:text-[20px]">
                Experiência Profissional
            </p>
            <div className="flex flex-wrap items-center justify-center w-1/2 ">
                <div className="flex flex-wrap justify-center  gap-4">
                    <div className="flex border-t-4 border-[#693B93] w-80 bg-[#4F228D] rounded-lg p-2 max-[600px]:w-72">
                        <Image src={Icon1} alt="" />
                        <div>
                            <p className="text-white text-[26px]">SO PETS</p>
                            <p className="text-[8px]">App desenvolvido em JavaScript e React Native com foco no registro de exames/vacinações de animais de estimação e agendamento de consultas médicas</p>
                            <a href="https://github.com/GabrielWojcik/So-Pets" target="_blank" >
                            <button 
                            className="bg-[#2C1250] border-2 border-[#693B93] rounded-lg p-2 text-[10px] mt-2">
                                Saiba Mais
                            </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex border-t-4 border-[#693B93] w-80 bg-[#4F228D] rounded-lg p-2 max-[600px]:w-72">
                        <Image src={Icon2} alt="" />
                        <div>
                            <p className="text-white text-[26px]">Ecommerce-card</p>
                            <p className="text-[8px]">Projeto dedicado à construção de um e-commerce com o objetivo de testar novas tecnologias e métodos de código.</p>
                            <a href="https://github.com/GabrielWojcik/ecommerce-card" target="_blank" >
                            <button 
                            className="bg-[#2C1250] border-2 border-[#693B93] rounded-lg p-2 text-[10px] mt-2">
                                Saiba Mais
                            </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex border-t-4 border-[#693B93] w-80 bg-[#4F228D] rounded-lg p-2 max-[600px]:w-72">
                        <Image src={Icon3} alt="" />
                        <div>
                            <p className="text-white text-[26px]">Car hub</p>
                            <p className="text-[8px]">Este projeto tem como objetivo oferecer uma plataforma online onde os usuários podem reservar carros de forma prática e segura. Foi desenvolvido com tecnologias modernas para garantir uma experiênc…</p>
                            <a href="https://github.com/GabrielWojcik/car-hub" target="_blank" >
                           <button 
                            className="bg-[#2C1250] border-2 border-[#693B93] rounded-lg p-2 text-[10px] mt-2">
                                Saiba Mais
                            </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex border-t-4 border-[#693B93] w-80 bg-[#4F228D] rounded-lg p-2 max-[600px]:w-72">
                        <Image src={Icon4} alt="" />
                        <div>
                            <p className="text-white text-[26px]">Covid-API</p>
                            <p className="text-[8px]">Script para exibir a média diária da Covid-19.</p>
                            <a href="https://github.com/GabrielWojcik/Covid-API" target="_blank" >
                            <button 
                            className="bg-[#2C1250] border-2 border-[#693B93] rounded-lg p-2 text-[10px] mt-2">
                                Saiba Mais
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}