import Image from "next/image";
import Me from "../../assets/icons/Me.svg";
import Gradient from "../../assets/icons/Gradient.svg";
import Arrow from "../../assets/icons/Arrow.svg";
import Elipse from "../../assets/icons/Ellipse.svg";

export function Header() {
    return(
        <div className="w-4/6 pt-16">
            <div className=" flex  justify-end w-[80%]">
                <Image src={Arrow} alt="" />
                <p className="relative top-6 text-[#7127BA]">Gabriel Wojcik</p>
            </div>
            <div className="flex justify-end items-center">
                <div className="relative">
                    <Image src={Me} alt="" />
                <div className="absolute top-16">
                    <Image src={Gradient} alt="" />
                </div>
                </div>

                <div className="flex flex-col relative gap-4 text-white">
                    <p className="text-lg">Um Front-end</p>
                    <p className="font-preahvihear text-5xl">Que julga o livro <br/> pela <strong className="text-[#7127BA]">capa</strong>...</p>
                    <p className="text-xs">Porque se a capa não te impressiona, o que mais pode?</p>
                </div>
                <div className="absolute  pt-16 pr-[71px]">
                    <Image src={Elipse} alt="" />
                </div>
            </div>
            <div className="flex flex-col justify-end items-end pt-10">
                <div className="flex flex-col justify-end items-center text-white">
                    <p className="text-5xl">
                        Desenvolvedor Front-end 
                    </p>
                </div>

                <div className="flex flex-col w-[57%] justify-end items-center text-white mt-6">
                    <p className="text-xl">
                        A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                        I make meaningful and delightful digital products that create an equilibrium
                        between user needs and business goals.
                    </p>
                </div>
            </div>


        </div>

    )
}