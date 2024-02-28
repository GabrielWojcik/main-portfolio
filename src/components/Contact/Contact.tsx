import Link from "next/link";

export function Contact() {
    return(
        <>
        <div className="flex justify-center px-8  items-center text-black ">
        
        <div className="flex flex-col gap-4 w-4/5">
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-around ">
            <p className="m-4 font-bold text-3xl">
                Contatos
            </p>

        </div>
        <div className=" p-2 border rounded-sm bg-blue-300" >
            <strong> 📱 Linkedin</strong>
            <p>
                Obtenha mais informações sobre meu curriculo, ou entre em contato comigo.
            </p>
            <Link href="https://www.linkedin.com/in/gabriel-wojcik/" target="_blank">
                <p className="underline underline-offset-2">
                    Linkedin
                </p>
            </Link>

        </div>

        <div className=" p-2 border rounded-sm bg-red-300" >
            <strong> 💻 E-mail </strong>
            <p>
            Caso prefira, você pode enviar um e-mail para 
            <a href="mailto:gabrielwojcikv@gmail.com">gabrielwojcikv@gmail.com</a>

            </p>
            <Link href="mailto:gabrielwojcikv@gmail.com">
                <p className="underline underline-offset-2">
                    E-mail
                </p>
            </Link>

        </div>
        <div className=" p-2 border rounded-sm bg-lime-400" >
            <strong> 🛍️ WhatsApp</strong>
            <p>
                Se preferir entre em contato atravez do meu WhatsApp +55 41 99976-5482.
            </p>
            <Link href="https://api.whatsapp.com/send?phone=5541999765482">
                <p className="underline underline-offset-2">
                    WhatsApp
                </p>
            </Link>


        </div>
        <div className=" p-2 border rounded-sm bg-indigo-300" >
            <strong> 🛍️ GitHub</strong>
            <p>
                Para ver meus projetos, contribuições ou conquistas acesse meu GitHub.
            </p>
            <Link href="https://github.com/GabrielWojcik" target="_blank">
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