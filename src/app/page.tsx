import { Explorer } from "@/components/Explorer/Explorer";
import { NavBar } from "@/components/NavBar/NavBar";
import { Section } from "@/components/Section/Section";

export default function Home() {
  return (
   <>
    <html>
        <title>Gabriel | Portfolio</title>
    </html>
    <NavBar />
    <div className="flex">
        <Explorer />
        <Section />
    </div>
   </>
  );
}
