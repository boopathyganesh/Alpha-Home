import Image from "next/image";
export default function Testimonial() {
  return (
    <section className="max-w-7xl my-20 flex flex-col items-center bg-black/5">
      <h1 className="text-4xl leading-tight text-center text-indigo-400 mb-10 w-[900px]">
        What did customers say about us?
      </h1>
      <div className="flex items-center justify-center max-w-5xl gap-4 flex-wrap border border-white bg-white p-4">
        <div className="flex-col items-center justify-center w-80">
            <h1>rating</h1>
            <p className="">It has survived not only five centuries, but also the leap into electronic typesetting, remaining sensually unchanged.It has survived.</p>    
            <div className=" bg-white flex rounded-lg p-5 w-72">
              <div className="mr-4">
                <div className=" overflow-hidden rounded-full bg-blue-200 w-10 h-auto flex justify-center items-center">
                  <Image src={"/images/dummy2.jpg"} alt={""} width={500} height={500} />
                </div>
              </div>
              <div>
                <h2 className="font-semibold">Wade Wilson</h2>
                <h2 className=" text-gray-800">Designer</h2>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
