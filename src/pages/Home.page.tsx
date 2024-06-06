/* eslint-disable import/no-named-as-default */
import React from "react";
import Cta from "../components/core/cta";
import Img from "../assets/hero.png";
import TargetPage from "./Target.page";
// import { Target } from "react-feather";
// import FeaturesPage from "./Features.page";

function HomePage() {
  const tabs = [
    { label: 'Tab 1', content: <div>Content of Tab 1</div> },
    { label: 'Tab 2', content: <div>Content of Tab 2</div> },
    { label: 'Tab 3', content: <div>Content of Tab 3</div> },
  ];

  // bg-red-900 sm:bg-yellow-400 md:bg-blue-400 lg:bg-teal-400 xl:bg-lime-400
  return (
    <div className="text-white">
      <section className="w-full container mx-auto my-12 ">
        <div className="px-12 h-fit w-full flex flex-col items-center sm:flex-row gap-7 ">
          <div className="w-full ">
            <h3 className="text-7xl pb-5">
              Every order fulfilled,{" "}
              <span className="text-transparent font-normal bg-clip-text bg-gradient-to-r from-[#bc8ef1] via-[#442463] to-[#cc9cfc]">
                on time .
              </span>{" "}
              {/* <div className=" w-[250px] h-[250px] bg-gradient-to-b from-[#bc8ef1] via-[#442463] to-[#cc9cfc] rounded-full absolute z-0 top-[160%] sm:top-[10%] sm:left-[5%] translate-x-[3%] translate-y-[1%] scale-95 ease-in duration-300 md:top-[-10%] md:left-[1%] xl:top-[10%] xl:eft-[90%] xl:translate-x-[50%] xl:translate-y-[50%] blur-[60px]" /> */}
              {/* <div className=" w-[250px] h-[250px] bg-gradient-to-b from-[#bc8ef1] via-[#442463] to-[#cc9cfc] rounded-full absolute z-0 top-[160%] sm:top-[10%] sm:left-[5%] translate-x-[3%] translate-y-[1%] scale-95 ease-in duration-300 md:top-[-10%] md:left-[1%] xl:top-[10%] xl:eft-[90%] xl:translate-x-[50%] xl:translate-y-[50%] blur-[60px]" /> */}
            </h3>
            <p className="text-md">
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>
            <button className="bg-purple-400 p-4 my-3 rounded-xl" type="button">
              View More
            </button>
          </div>
          <div className="w-full flex  justify-center  ">
            <div className=" w-[250px] h-[250px] bg-gradient-to-b from-[#bc8ef1] via-[#442463] to-[#cc9cfc] absolute rounded-full top-[10%] eft-[10%] translate-x-[50%] translate-y-[50%] blur-[60px] hover:transform hover:scale-100 hover:bg-yellow-300" />
            <img src={Img} alt="" className="w-fit relative z-10" />
          </div>
        </div>
      </section>
      {/* <FeaturesPage /> */}
      <TargetPage tabs={tabs} />
      <Cta />
    </div>
  );
}

export default HomePage;
