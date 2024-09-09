import Image from "next/image";
import User from "../../assets/photo.jpg"
import { TimeLine } from "../TimeLine/TimeLine";

export function About() {
    return(
        <>
        <div className="flex justify-center px-8  items-center text-black ">
        
        <div className="flex flex-col gap-4 w-4/5">
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-around ">
            <p>function myName() 
                {'{'}
                    <br/> 
                    const name = 'Gabriel Wojcik';
                    <br/> 
                    const stack = 'Front-end';
                    <br/> 
                    return name + ' ' + stack;
                <br/> 
                {'}'}
            </p>

            <Image 
                alt="photo user" 
                src={User}  
                width={250} 
                height={250}
            />

        </div>
        <div className="" >
            <p>
            {'<article>'}
                Me chamo Gabriel, e ao longo dos meus 4 anos de experiência como Desenvolvedor Front-end,
                possuo especialização em React, Graduação em Análise e Desenvolvimento de Sistemas e pude 
                integrar diversos time, como na empresa Vega I.T. onde participei no desenvolvimento de diversas 
                interfaces Web/Mobiles complexas aplicando a metodologia de clean code e princípios de UX/UI. 
                Ao longo da minha carreira já atuei com diferentes tecnologias, incluindo Next.js, TypeScript,
                React Native e serviços em cloud como AWS S3, RDS e EC2.
            {'</article>'}
            </p>

            <p className="m-5 font-bold text-3xl text-center">
                Linha do Tempo
            </p>

            <TimeLine />
        </div>
        </div>

        </div>
        

        </>
    )
}