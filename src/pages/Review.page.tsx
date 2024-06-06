/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function ReviewPage() {
  return (
    <div>
      <section>
        <div className="bg-[#151214] text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 p-8">
              <p className="ml-6 text-purple-800 text-lg uppercase tracking-loose">
                REVIEW
              </p>
              <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
                Leave us a feedback!
              </p>
              <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Please provide your valuable feedback and something something
                ...
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-2/3 justify-center">
              <div className="container w-full px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl mb-4 text-black font-semibold">
                          Have a suggestion?
                        </h4>
                        <form id="feedbackForm" action="" method="">
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="email">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-200 placeholder-black text-gray-800 outline-none focus:bg-gray-300"
                              placeholder=" "
                              required
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="message">
                              Message
                            </label>
                            <textarea
                            maxLength={300}
                            rows={4}
                              // maxLength="300"
                              name="feedback"
                              id="feedback"
                              // rows="4"
                              className="border-0 px-3 py-3 bg-gray-200 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                              placeholder=""
                              required
                            />
                          </div>
                          <div className="text-center mt-6">
                            <button
                              id="feedbackBtn"
                              className="bg-[#7a678c] text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewPage;
