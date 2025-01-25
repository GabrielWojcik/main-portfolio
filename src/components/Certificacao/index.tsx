import Image from "next/image";
import Icon1 from "../../assets/icons/Rectangle.svg";
import Icon2 from "../../assets/icons/Rectangle2.svg";
import Aws from "../../assets/icons/image.png";
import Meta from "../../assets/icons/Screenshot_5.png";
import Gradient from "../../assets/icons/Big-Gradient.svg";


export function Expirience() {
    return(
        <div className="flex flex-col justify-center items-center pt-10 text-white">
            <p className="text-4xl m-5 justify-start max-[600px]:text-[20px]">
                Certificação
            </p>
            <div className="flex fle-col flex-wrap items-center justify-center w-1/2 sm:w-[100%] max-[600px]:items-start max-[600px]:justify-start max-[600px]:w-[100%] max-[600px]:p-4 ">
                <div className="flex flex-col flex-wrap justify-center  gap-4 max-[600px]:w-[100%] max-[600px]:items-center">
                    <div className="flex border-t-4 border-[#693B93] bg-[#4F228D] rounded-lg p-2 max-[600px]:p-0 max-[600px]:flex-col">
                        <Image src={Aws} alt="" width={300} height={300} />
                        <div id="aws" className="flex flex-col p-4 justify-center max-[600px]:p-2">
                            <p className="text-white text-[26px]  max-[600px]:text-[12px]">AWS Certified Cloud Practitioner</p>
                            {/* <p className="text-[8px]">App desenvolvido em JavaScript e React Native com foco no registro de exames/vacinações de animais de estimação e agendamento de consultas médicas</p> */}
                            <a href="https://www.credly.com/badges/3e19e4c0-24be-40ab-aca2-1c054766830d/linked_in_profile" target="_blank" >
                            <button 
                            className="bg-[#2C1250] border-2 border-[#693B93] rounded-lg p-2 text-[10px] mt-2">
                                Certificado
                            </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex border-t-4 border-[#693B93] bg-[#4F228D] rounded-lg p-2  max-[600px]:flex-col max-[600px]:w-[100%] max-[600px]:p-4 ">
                        <Image src={Meta} alt="" width={300} height={300} />
                        <div className="flex flex-col p-4 justify-center max-[600px]:p-2">
                            <p className="text-white text-[26px]  max-[600px]:text-[12px]">Meta Advanced React</p>
                            <a href="https://www.coursera.org/account/accomplishments/verify/AF2CLAKDAA27" target="_blank" >
                            <button 
                            className="bg-[#2C1250] border-2 border-[#693B93] rounded-lg p-2 text-[10px] mt-2">
                                Certificado
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}