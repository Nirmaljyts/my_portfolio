import React from "react";
import ImgEc from "../../../public/images/projects/ecommerce.png";
import ImgStatic from "../../../public/images/projects/static.png";
import StaticImg from "../../../public/images/projects/StaticPage.png";
import Image from "next/image";

const MyComponent = () => {
  return (
    <div className="max-w-lg px-4 mx-auto text-left md:max-w-none md:text-center max-xl:mt-20 max-lg:mt-4">
      <div className="mt-7 xl:mt-20 max-lg:ml-2">
        <p className="text-4xl font-bold text-white mb-4 max-lg:mt-6">
          Recently launched personal projects
        </p>
        <div className="flex flex-row max-lg:flex-col gap-2">
          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sm:border-0 rounded-xl sm:rounded-0 border">
            <div className="flex flex-col items-center justify-between w-full gap-3">
              <Image
                className="hidden sm:block"
                alt="E-commerce Application"
                width="730"
                height="230"
                src={StaticImg}
              />
              <div className="lg:mb-0 lg:max-w-lg lg:pr-5 text-white">
                <div className="max-w-xl mb-6">
                  <h2 className="text-left text-xl sm:mt-0 mt-6 font-semibold tracking-tight sm:text-2xl sm:leading-none max-w-lg mb-6">
                    Static Application
                  </h2>
                  <div className="text-left text-base md:text-lg">
                    <p>
                      This is a static site built using Next.js, Tailwind CSS,
                      and Framer Motion. It features modern scroll transitions
                      and smooth animations, showcasing a clean and responsive
                      design. The project leverages the latest web technologies
                      to deliver an engaging user experience.
                    </p>
                    <div className="text-sky-600 mt-4">
                      <a
                        href="https://staticcraft.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full relative px-4 py-2 ">
                          Click here to visit
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sm:border-0 rounded-xl sm:rounded-0 border">
            <div className="flex flex-col items-center justify-between w-full gap-3">
              <Image
                className="hidden sm:block"
                alt="E-commerce Application"
                width="730"
                height="230"
                src={ImgEc}
              />
              <div className="lg:mb-0 lg:max-w-lg lg:pr-5 text-white">
                <div className="max-w-xl mb-6">
                  <h2 className="text-left text-xl sm:mt-0 mt-6 font-semibold tracking-tight sm:text-2xl sm:leading-none max-w-lg mb-6">
                    E-commerce Application
                  </h2>
                  <div className="text-left text-base md:text-lg">
                    <p>
                      This application offers a curated selection of men&apos;s
                      and ladies&apos; wear and shoes, providing a seamless
                      browsing experience and easy purchasing options for
                      discerning shoppers. Explore our diverse range of
                      men&apos;s clothing and footwear to find the perfect style
                      and fit for any occasion.
                    </p>
                    <div className="text-sky-600 mt-4">
                      <a
                        href="https://shopnexus.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full relative px-4 py-2 ">
                          Click here to visit
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sm:border-0 rounded-xl sm:rounded-0 border">
            <div className="flex flex-col items-center justify-between w-full gap-3">
              <Image
                className="hidden sm:block"
                alt="Static Application"
                width="730"
                height="230"
                src={ImgStatic}
              />
              <div className="lg:mb-0 lg:max-w-lg lg:pr-5 text-white">
                <div className="max-w-xl mb-6">
                  <h2 className="text-left text-xl sm:mt-0 mt-6 font-semibold tracking-tight sm:text-2xl sm:leading-none max-w-lg mb-6">
                    Static Application
                  </h2>
                  <div className="text-left text-base md:text-lg">
                    <p>
                      This static web application showcases modern web
                      development techniques with a responsive design, efficient
                      styling using Tailwind CSS, and engaging animations with
                      Framer Motion.
                    </p>
                    <div className="text-sky-600 mt-4">
                      <a
                        href="https://staticwave.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full relative px-4 py-2">
                          Click here to visit
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
