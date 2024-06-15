import Hero from "@/components/hero";
import Image from "next/image";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <section className="max-w-8xl mx-auto flex flex-col items-center justify-between p-10">
      <Hero />
      <Expertise/>  

    </section>
  );
}
