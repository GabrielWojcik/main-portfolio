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
                Programador Front-end com experiência na criação de sites responsivos e aplicativos mobile.
                Utilizo principalmente React, NextJs e Styled-Components, com ênfase nas melhores práticas e Clean Code.
                Atuei como Tech Lead  em uma startup, onde desenvolvi e auxiliei estagiários em suas tarefas como Code Reviews e boas práticas.
            {'</article>'}
            </p>

            <p className="m-5 font-bold text-3xl text-center">
                My TimeLine
            </p>

            <TimeLine />
        </div>
        </div>

        </div>
        

        </>
    )
}