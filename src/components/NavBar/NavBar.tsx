import Image from "next/image";
import Logo from "../../assets/icons/Logo.png";

export function NavBar() {
    const scrollToHeader = () => {
        const headerElement = document.getElementById("header");
        if (headerElement) {
            headerElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="flex px-4 md:px-16 items-center bg-[#1A0B2E] w-[100%] h-28 fixed top-0 left-0 z-10">
            <div className="flex items-center justify-center w-6/12">
                <Image src={Logo} alt="" width={20} height={20} className="cursor-pointer" />
            </div>

            <div className="w-6/12">
                <ul className="flex justify-around text-white">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer" onClick={scrollToHeader}>Sobre</li>
                    <li className="cursor-pointer">Contato</li>
                </ul>
            </div>
        </div>
    );
}
