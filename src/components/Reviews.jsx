import React from "react";
//Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Let's Hear What they Say{" "}
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officiis
          possimus quisquam quibusdam doloribus, a totam voluptatem error
          dolorum veniam eos eaque. Odio nostrum possimus, doloremque quam
          repellendus nobis corporis obcaecati fugit provident veritatis dicta
          tempora, exercitationem molestiae, magni porro unde!
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex  items-center justify-center gap-8 md:gap-12">
          <img
            src="https://img.freepik.com/fotos-premium/joven-barba-sobre-aislado-manteniendo-brazos-cruzados-posicion-frontal_1368-65212.jpg"
            alt="woman image"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full  "
          />
          <img
            src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
            alt="woman image"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full  "
          />
          <img
            src="https://img.freepik.com/fotos-premium/joven-barba-sobre-aislado-manteniendo-brazos-cruzados-posicion-frontal_1368-65212.jpg"
            alt="woman image"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
          <img
            src="https://img.freepik.com/foto-gratis/mujer-tranquila-cabello-tenido-pie-manos-cruzadas-sonrisa-sincera-encantadora-demostrando-sus-dientes-perfectos-posando_273609-7675.jpg"
            alt="woman image"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full "
          />
          <img
            src="https://img.freepik.com/psd-premium/retrato-mujer-madura-pulgares-arriba_1187-23281.jpg"
            alt="woman image"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full "
          />
        </div>
        <div className="">
            <h3 className="text-center text-[24px] font-bold">Jose Saravia</h3>
            <h5 className="text-center text-[20px] text-gray-500">Founder of Varibo</h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
