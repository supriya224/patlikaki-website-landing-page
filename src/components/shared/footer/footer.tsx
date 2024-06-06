/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Img from "../../../assets/img.png";

const Footer: React.FC = () => {
  return (
    <div className="flex items-end w-full ">
      <footer className="w-full text-gray-700 body-font">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 xl:grid-cols-4 px-5 py-12 mx-auto md:grid-cols-2 ">
          <div className="px-4  md:text-left">
            <img src={Img} alt="" className="w-28 h-28" loading="lazy" />
            <p className="mt-2 text-sm text-gray-500 hover:text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              modi dolor tenetur eos rerum voluptatum mollitia harum dicta atque
              architecto vel eveniet soluta temporibus, explicabo sed autem.
              Molestias, est veniam.
            </p>
          </div>
          <div className="w-full px-4 ">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-200 uppercase title-font">
              Explore
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-zinc-300">
                  Product
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-zinc-300">
                  Pricing
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                  Customer Stories
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                  Career
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 ">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-200 uppercase title-font">
              Learn
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-zinc-300">
                  About us
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-zinc-300">
                  Blog
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4  ">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-200 uppercase title-font">
              Contact Crest
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-zinc-300">
                  sales@getcrest.ai
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-zinc-300">
                  Registered Office: 1507, Incubex, 11th cross road, 19th Main
                  Road, Bengaluru, India. 560102
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-zinc-300">
                  Corporate Office: 291, All Time Space, 4th Floor, 15th A
                  Cross, Sector - 6, HSR Layout, Bengaluru, India. 560102
                </a>
              </li>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      />
                      <circle cx="4" cy="4" r="2" stroke="none" />
                    </svg>
                  </a>
                </span>
              </div>
            </nav>
          </div>
        </div>
        <div className="bg-[#2f2737]">
          <div className="container px-5 py-2 mx-auto">
            <p className="text-sm text-[#ac94c3] capitalize xl:text-center">
              © 2020 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
