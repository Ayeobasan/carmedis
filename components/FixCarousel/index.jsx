import React from "react";
import {
  FaCar,
  FaAirFreshener,
  FaCarSide,
  FaTruckMonster,
  FaLightbulb,
} from "react-icons/fa";

const FixCarousel = () => {
  const services = [
    {
      Icon: FaCar,
      title: "All major and minor repair",
      link: "#",
    },
    {
      Icon: FaAirFreshener,
      title: "Air Conditioning Service",
      link: "#",
    },
    {
      Icon: FaCarSide,
      title: "Full body painting",
      link: "#",
    },
    {
      Icon: FaTruckMonster,
      title: "Engine Diagnostics and Repair",
      link: "#",
    },
    {
      Icon: FaLightbulb,
      title: "Electrical System Repair",
      link: "#",
    },
  ];
  return (
    <section id="categories" className="py-8 text-blue-700 bg-gray-100">
      <div className="md:px-8 xl:px-0 px-4 py-5 max-w-[1200px] m-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            Experience Peace of Mind on the Road: Download Carmedis App Today!
          </h2>
          <p className="mt-2 text-gray-700">
            Don’t let car troubles derail your plans or cause unnecessary
            stress. Experience peace of mind on the road with Carmedis – your
            go-to solution for all car and mechanic issues.
          </p>
        </div>
        <div className="text-center mb-6">
          <h6 className="text-xl font-semibold">Our Services</h6>
        </div>
        <div className="flex flex-wrap  text-blue-700 gap-4 justify-center">
        {services.map(({ Icon, title, link }) => (
          <div key={title} className="flex flex-col items-center bg-white p-6 border-2 h-[30vh] border-t-blue-700 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Icon className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            {/* <a href={link} className="text-blue-600 hover:underline">
              Learn more
            </a> */}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default FixCarousel;
