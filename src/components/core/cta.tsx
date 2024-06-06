function Cta() {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="w-full">
          <div className=" rounded-xl m-5 sm:m-16 shadow-inner shadow-[#2e2538] border-b">
            <div className="flex flex-col p-10 py-24  px-5 sm:px-16 space-y-6  items-center text-center">
              <h1 className="font-light md:text-6xl text-3xl text-white tracking-wide ">
                Streamline your
                <span
                  id="spin"
                  className="text-transparent font-normal bg-clip-text pl-2 bg-gradient-to-r from-[#bc8ef1] via-[#f5bbaa] to-[#1d1129] "
                />
                <br />
              </h1>
              <p className="text-gray-400 md:text-2xl text-xl px-18">
                Improve accuracy, save time, and reduce costs. Sign up now and
                transform the way you manage your stock!
              </p>
              <button
                type="button"
                className="rounded-lg px-3  w-fit bg-purple-300 py-2 bg-gradient-to-t  from-[#f5bbaa]   shadow-lg shadow-[#4f395f] text-white sm:rounded-full  md:text-lg sm::py-4 sm:px-6">
                Start Your Free Trial Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
