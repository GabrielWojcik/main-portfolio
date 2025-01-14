import { Explorer } from "@/components/Explorer/Explorer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar/NavBar";
import { Section } from "@/components/Section/Section";
import { WorkExpirience } from "@/components/Work";

export default function Home() {
  return (
   <>
    <html>
        <title>Gabriel | Portfolio</title>
    </html>
    <NavBar />
    <div className="flex flex-col gap-16 bg-[#11071F] ">
      <Header />
      <WorkExpirience />
        {/* <Explorer /> */}
        {/* <Section /> */}
    </div>
   </>
  );
}
