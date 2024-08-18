import React from "react";
import { BaseLayout } from "../_layouts/BaseLayout";
import aboutcarm from "@/public/Newimages/aboutmarm.png";
import Image from "next/image";

const About = () => {
  return (
    <BaseLayout>
      <div className="bg-white">
        {/* First Section */}
        <section
          className="relative bg-cover bg-center h-[70vh] py-12"
          style={{
            backgroundImage:
              "url('https://www.autoscapvr.com.br/mobile/imgs/tema/banner-carousel-pag-05.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Optional overlay */}
          <div className="relative  mx-auto px-4 bottom-0">
            {" "}
            {/* Add pt-16 to push content down */}
            <div className="flex flex-wrap">
              {/* Column 1 */}
              <div className="w-full md:w-1/2 mx-auto">
                <div>
                  <h1 className="text-4xl font-bold animate-fadeInUp text-white mb-4">
                    Revolutionizing Automobile Care and Maintenance
                  </h1>
                  <p className="text-lg animate-fadeInUp text-white">
                    Experience the future of automobile care with Carmedis.
                    Drive smarter, drive safer, with Carmedis.
                  </p>
                </div>
              </div>
              {/* Column 2 */}
              <div className="w-full md:w-1/2 hidden md:flex">
                {/* Additional content for larger screens */}
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="bg-white py-12">
          <div className="   md:px-8 xl:px-0 px-4 max-w-[1200px] mx-auto ">
            <div className="flex align-middle items-center flex-wrap">
              <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <a
                  href="#"
                  className="inline-block bg-[rgb(14,75,163)] text-white py-2 px-4 rounded-sm text-sm font-semibold"
                >
                  Automobile Care and Maintenance Technology Company.
                </a>
                <h1 className="text-4xl font-bold mt-6">
                  Empowering Car Owners with Innovative Autotech Solutions
                </h1>
                <p className="text-lg text-gray-700 mt-4">
                  At Carmedis, we’re not just another automobile care and
                  maintenance technology company — we’re your ultimate
                  automotive care companion, seamlessly connecting car owners
                  with the nearest auto shop and empowering them with
                  cutting-edge tools to maintain their vehicles with ease. With
                  our state-of-the-art app, we’re revolutionizing the way you
                  care for your car, making it simpler, more efficient, and more
                  convenient than ever before.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <Image
                  src={aboutcarm}
                  alt="Carmedis"
                  // width={100}
                  // height={100}
                  className="w-full "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section
          id="captioning"
          className="bg-[rgb(55,75,142)]  text-white py-12"
        >
          <div className="  md:px-8 xl:px-0  max-w-[1200px] mx-auto px-4 text-center">
            <h5 className="text-xl font-semibold mb-4 animate-fadeInUp">
              Discover the Future of Automotive Care
            </h5>
            <div className="my-6">{/* Spacer */}</div>
            <h2 className="text-3xl font-bold mb-4 animate-fadeInUp">
              Our Model: Company-Owned and Affiliate Workshop
            </h2>
            <p className="text-lg text-gray-300 mb-8 animate-fadeInUp">
              We’re committed to expanding access to high-quality vehicle repair
              across Africa through our innovative company-owned and affiliate
              workshop model.
            </p>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};

export default About;
