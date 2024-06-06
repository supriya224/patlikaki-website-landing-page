import React from "react";

function Cta() {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="w-full ">
          <div className=" rounded-xl m-16 shadow-inner shadow-[#2e2538]">
            <div className="flex flex-col p-10  px-16 space-y-6 items-center text-center">
              <h1 className="font-light md:text-6xl text-5xl text-white tracking-wide ">
                Special Offer on{" "}
                <span
                  id="spin"
                  className="text-transparent font-normal bg-clip-text bg-gradient-to-r from-[#bc8ef1] via-[#f5bbaa] to-[#1d1129] "
                />{" "}
                <br />
                PatilKaki
              </h1>
              <p className="text-gray-400 md:text-2xl text-xl px-18">
                {" "}
                Get the best deals on our exclusive collection of
                snake-patterned shoes. Limited time only!
              </p>
              <button
                type="button"
                className="rounded-full bg-purple-300 bg-gradient-to-t  from-[#f5bbaa]   shadow-lg shadow-[#4f395f] text-white text-lg py-4 px-6">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
