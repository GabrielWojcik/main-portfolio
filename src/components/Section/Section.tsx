"use client"
import { useState } from "react";
import { About } from "../About/About";
import { Project } from "../Project/Project";
import { Contact } from "../Contact/Contact";

export function Section() {
    const [about, setAbout] = useState<boolean>(true);
    const [project, setProject] = useState<boolean>(false);
    const [contact, setContact] = useState<boolean>(false);

    return(
        <div className="w-full">
            <div className="h-14 flex items-center gap-8 px-8 bg-[#383838] ">
                <p 
                    onClick={() => {setProject(false), setAbout(true),setContact(false)}}
                    className="cursor-pointer"
                >
                    Sobre
                </p>
                <p 
                    onClick={() => {setProject(true), setAbout(false),setContact(false)}}
                    className="cursor-pointer"
                >
                    Projetos
                </p>
                <p 
                    onClick={() => {setContact(true),setAbout(false), setProject(false)}}
                    className="cursor-pointer"
                >
                    Contatos
                </p>

            </div>
            {
             about ? 
                <About />
            :
            null
            }
            {
             project ? 
                <Project />
            :
            null
            }
            {
             contact ? 
                <Contact />
            :
            null
            }

        
        </div>
    )
}