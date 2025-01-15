import { Expirience } from "@/components/Certificacao";
import { Contact } from "@/components/Contato";
import { Explorer } from "@/components/Explorer/Explorer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar/NavBar";
import { Section } from "@/components/Section/Section";
import { Skills } from "@/components/Skiils";
import { WorkExpirience } from "@/components/Work";

export default function Home() {
  return (
   <>
    <html>
        <title>Gabriel | Portfolio</title>
    </html>
    <NavBar />
    <div className="flex flex-col gap-16 bg-[#11071F] w-full">
      <Header />
      <WorkExpirience />
      <Expirience />
      <Skills />
      <Contact />
    </div>
   </>
  );
}
