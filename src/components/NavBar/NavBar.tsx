import Image from "next/image"
import VsCodeIcon from "../../assets/vscode-icon.png"

export function NavBar() {
    return(
        <div className="flex px-8 gap-8 items-center h-10 bg-[#5a5e77] ">
            <Image 
                src={VsCodeIcon} 
                alt="icon Vs Code" 
                width={30} 
                height={30} 
                className="hidden sm:hidden md:block"
                />
            <div className="hover:text-white">
                <a href="https://github.com/GabrielWojcik" target="_blank">
                    <p>
                        Git Hub
                    </p>
                </a>
            </div>

            <div className="hover:text-white">
                <a href="https://www.linkedin.com/in/gabriel-wojcik/" target="_blank">
                    <p>
                        Linkedin
                    </p>
                </a>
            </div>

            <div className="hover:text-white">
                <a href="mailto:gabrielwojcikv@gmail.com">            
                    <p>
                        E-mail
                    </p>
                </a>
            </div>
        </div>
    )
}