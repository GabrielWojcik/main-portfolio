export function Explorer() {
    return(
        <div className="w-1/4 bg-[#424242] hidden sm:hidden md:block">
        <div className="flex justify-between items-center bg-[#383838]  h-14 px-8">
                <p>
                    E X P L O R E R
                </p>
                <p>
                    ...
                </p>
            </div>
            <div className="flex flex-col px-8  w-1/5 h-screen bg-[#424242]" >
                <p className="cursor-pointer">
                    Sobre.tsx
                </p>
                <p className="cursor-pointer">
                    Projetos.tsx
                </p>
                <p className="cursor-pointer">
                    Contatos.tsx
                </p>
            </div> 
        </div>
    )
}