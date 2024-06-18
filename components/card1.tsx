import Image, { StaticImageData } from "next/image";
import { CardProps } from "@/context/data";
interface TestiProps extends CardProps {
    rating: number;
    role: string;
}
export default function Card({ image, title, description,rating, role}: TestiProps) {
  return (
    <div className=" bg-white h-48 w-80 flex flex-col justify-evenly items-center text-center border rounded-xl border-blue-200 p-4 hover:bg-blue-100 smooth">
      <div className=" w-16 h-auto ">
        <Image src={image} alt="globe1" height={500} width={500} />
      </div>
      <h2 className=" font-semibold text-indigo-400 ">{title}</h2>
      <p className=" font-medium ">
        {description}
      </p>
      <h1>{rating}</h1>
      <h2>{role}</h2>
    </div>
  );
}