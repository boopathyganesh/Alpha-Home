import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-8xl mx-auto flex flex-col items-center justify-between p-10">
      <Hero />
    </section>
  );
}
