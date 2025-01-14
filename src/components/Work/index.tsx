import Image from "next/image";
import Gradient from "../../assets/icons/Big-Gradient.svg";


export function WorkExpirience() {
    return(
        <div className="flex flex-col justify-center items-center text-white">
            <p className="text-4xl m-5">
                Experiência Profissional
            </p>

            <div className="relative">
                <div>
                    <div>
                        <p className="text-white">cardss</p>

                    </div>
                </div>

                <div>
                    <Image src={Gradient} alt="" />
                </div>

            </div>

        </div>
    )
}