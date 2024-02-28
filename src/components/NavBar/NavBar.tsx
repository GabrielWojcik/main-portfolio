import Image from "next/image"
import VsCodeIcon from "../../assets/vscode-icon.png"

export function NavBar() {
    return(
        <div className="flex px-8 gap-8 items-center h-10 bg-[#424242]">
            <Image 
                src={VsCodeIcon} 
                alt="icon Vs Code" 
                width={30} 
                height={30} 
                className="hidden sm:hidden md:block"
                />
            <p>
                Git Hub
            </p>
            <p>
                Linkedin
            </p>
            <p>
                Contatos
            </p>
        </div>
    )
}