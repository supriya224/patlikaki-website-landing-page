/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

// this is a section which showcases the key issues targeted by Crest.
function ProblemPage() {
  return (
    <div>
      <section className="py-12  text-black ">
        <div className="container mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-[#151218] rounded-md overflow-hidden mb-10 transition-all  hover:scale-110 ease-in-out duration-300  ">
                <img
                  src="https://www.growthforce.com/hubfs/Inventory%20Management%20best%20practices.png"
                  alt="image"
                  width={100}
                  height={40}
                  className="w-full flex items-center justify-center "
                  loading="lazy"
                />
                <div className="p-8 bg-purple-300 bg-gradient-to-t  from-[#f5bbaa]  sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="#"
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                      Efficiency Boost
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Automate inventory tracking to save time and reduce human
                    errors.
                  </p>
                  <a
                    href="#"
                    className="
                     inline-block
                     py-2
                     px-7
                       border border-white
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     ">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4  transition-all  hover:scale-110 ease-in-out duration-300 ">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src="https://www.growthforce.com/hubfs/Inventory%20Management%20best%20practices.png"
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 bg-purple-300 bg-gradient-to-t  from-[#f5bbaa] sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="#"
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                      Real-Time Insights
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Access up-to-date data for smarter decision-making and
                    improved stock control.
                  </p>
                  <a
                    href="#"
                    className="
                     inline-block
                     py-2
                     px-7
                    border border-white
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     ">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4  transition-all  hover:scale-110 ease-in-out duration-300 ">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src="https://www.growthforce.com/hubfs/Inventory%20Management%20best%20practices.png"
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 bg-purple-300 bg-gradient-to-t  from-[#f5bbaa]   sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="#"
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                      Cost Savings
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Minimize overstock and stockouts to maximize profitability.
                  </p>
                  <a
                    href="#"
                    className="
                     inline-block
                     py-2
                     px-7
                     border border-white
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     ">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProblemPage;
