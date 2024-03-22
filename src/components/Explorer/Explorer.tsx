import { FaReact } from "react-icons/fa";

export function Explorer() {
    return(
        <div className="w-1/4 bg-[#5a5e77] hidden sm:hidden md:block">
        <div className="flex justify-between items-center bg-[#282a36] h-14 px-8 text-white">
                <p>
                    E X P L O R E R
                </p>
                <p>
                    ...
                </p>
            </div>
            <div className="flex flex-col px-8  w-1/5 h-screen bg-[#5a5e77] text-white" >
            <div className="bg-blue-500 w-1/5 h-8 flex flex-row items-center gap-3  hover:bg-white hover:text-blue-500">
                    <div>
                        <FaReact color="#5AC6E4"/>
                    </div>

                    <div>
                        <p className="cursor-pointer">
                            Sobre.tsx 
                        </p>
                    </div>

                </div>
                <div className="bg-blue-500 w-1/5 h-8 flex flex-row items-center gap-3  hover:bg-white hover:text-blue-500">
                    <div>
                        <FaReact color="#5AC6E4"/>
                    </div>

                    <div>
                        <p className="cursor-pointer">
                            Projetos.tsx 
                        </p>
                    </div>

                </div>

                <div className="bg-blue-500 w-1/5 h-8 flex flex-row items-center gap-3  hover:bg-white hover:text-blue-500">
                    <div>
                        <FaReact color="#5AC6E4"/>
                    </div>

                    <div>
                        <p className="cursor-pointer">
                        Contatos.tsx 
                        </p>
                    </div>

                </div>

            </div> 
        </div>
    )
}