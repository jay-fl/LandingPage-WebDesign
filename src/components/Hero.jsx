import React from "react";
//Icons
import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/** Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Web Design Impactful Digital{" "}
            <span className="text-primary py-2 px-6 border-8 border-primary  relative inline-block">
              Products
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Help find solutions with intitutive and in accordance with client
            business goals. We provide a high-quality services.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 font-medium rounded-xl text-xl">
              Contact Us
            </button>
            <button className="w-full xl:w-auto flex justify-start text-left gap-4 py-2 px-8  rounded-xl text-xl">
              <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />
              Watch our <br /> introduction video
            </button>
          </div>
        </div>
      </div>
      {/**Image */}
      <div className="md:col-span-3 flex items-center justify-center relative p-8">
        {/** Content image */}
        <div>
          <img
            src="hero.png"
            alt="hero image"
            className="w-[250px] h-[250px] md:w-[470px] md:h-[470px] object-cover xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
            <div className="flex items-center">
              <img
                src="https://img.freepik.com/foto-gratis/mujer-tranquila-cabello-tenido-pie-manos-cruzadas-sonrisa-sincera-encantadora-demostrando-sus-dientes-perfectos-posando_273609-7675.jpg"
                alt="woman image"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 "
              />
              <img
                src="https://img.freepik.com/fotos-premium/joven-barba-sobre-aislado-manteniendo-brazos-cruzados-posicion-frontal_1368-65212.jpg"
                alt="man image"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-3 "
              />
              <img
                src="https://img.freepik.com/psd-premium/retrato-mujer-madura-pulgares-arriba_1187-23281.jpg"
                alt="woman image"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-3 "
              />
              <img
                src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
                alt="man image"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-3 "
              />
              <img
                src="https://img.freepik.com/fotos-premium/retrato-joven-empresario_112793-7696.jpg"
                alt="man image"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-3 "
              />
            </div>
            <h2 className="font-bold text-xl tracking-[1px] text-gray-800">
              120+ Employees
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> 5.0 (3.1k Reviews)
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className="text-primary text-8xl" />
                <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        {/** Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>

        {/** Logos */}
        <img
          src="figma.png"
          alt="figma image"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[5%] right-[25%] xl:right-[10%]"
        />
        <img
          src="adobe.png"
          alt="figma image"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
        />
        <img
          src="sketch.png"
          alt="figma image"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full  absolute bottom-[5%] left-[15%] xl:left-[3%] bg-white -rotate-12"
        />
      </div>
    </section>
  );
};

export default Hero;
