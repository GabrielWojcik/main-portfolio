import Image from "next/image";
import LandPage from "../../assets/icons/landpage.png";
import landPage2 from "../../assets/icons/landPage2.png";
import landPage3 from "../../assets/icons/landPage3.png";

export function Customers() {
  const clientsData = [
    {
      id: 1,
      name: "ALLAN & GABRIELA",
      description:
        "Convite de casamento digital e interativo, com confirmação de presença e informações detalhadas sobre o evento.",
      imageUrl: LandPage,
      altText: "Imagem do projeto para Allan & Gabriela",
      url: "https://www.casamento-allan-gabriela.com.br",
    },
    {
      id: 2,
      name: "Meu Jardim",
      description:
        "Criação de um sistema de e-commerce para floricultura, com gerenciamento de categorias e otimização de processos. (Em andamento)",
      imageUrl: landPage3,
      altText: "Imagem do projeto para Meu Jardim",
      url: "https://e-commerce-plants-theta.vercel.app",
    },
    {
      id: 3,
      name: "Beauty",
      description:
        "Desenvolvimento de um e-commerce para uma perfumaria, focada em conversão e design responsivo. (Em andamento)",
      imageUrl: landPage2,
      altText: "Imagem do projeto para Beauty",
      url: "https://ecommerce-card-mocha.vercel.app",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="bg-indigo-900/40 p-6 rounded-lg border border-indigo-700/50 shadow-lg hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={client.imageUrl}
                  alt={client.altText}
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{client.name}</h3>
              <p className="text-indigo-200/80 text-sm mb-4 h-20">
                {client.description}
              </p>
              <a href={client.url} target="_blank">
                <button className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                  Ver Projeto
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
