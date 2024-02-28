import Link from "next/link";

export function Project() {
    return(
        <>
        <div className="flex justify-center px-8  items-center text-black ">
        
        <div className="flex flex-col gap-4 w-4/5">
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-around ">
            <p className="m-4 font-bold text-3xl">
                Projetos
            </p>

        </div>
        <div className=" p-2 border rounded-sm" >
            <strong> 📱 So-Pets</strong>
            <p>
                App built with JavaScript and React Native focused on recording pet 
                exams/vaccinations and scheduling medical appointments.
            </p>
            <Link href="https://github.com/GabrielWojcik/So-Pets"  target="_blank">
                <p className="underline underline-offset-2">
                    Git hub
                </p>
            </Link>


        </div>

        <div className=" p-2 border rounded-sm" >
            <strong> 💻 Nlw-expert-notes </strong>
            <p>
                A web application created to save notes, either text or voice,
                developed with React and TypeScript.
            </p>
            <Link href="https://github.com/GabrielWojcik/nlw-expert-notes"  target="_blank">
                <p className="underline underline-offset-2">
                    Git hub
                </p>
            </Link>


        </div>
        <div className=" p-2 border rounded-sm" >
            <strong> 🛍️ Ecommerce-card</strong>
            <p>
                Projeto dedicado à construção de um e-commerce com o 
                objetivo de testar novas tecnologias e métodos de código.
            </p>
            <Link href="https://github.com/GabrielWojcik/ecommerce-card"  target="_blank">
                <p className="underline underline-offset-2">
                    Git hub
                </p>
            </Link>


        </div>

        </div>

        </div>
        

        </>
    )
}