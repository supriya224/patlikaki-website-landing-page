/* eslint-disable react/function-component-definition */
import React from "react";
import { MainLayout } from "../layouts";

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <section>
        <div className="relative overflow-hidden bg-white">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
              <img
                src="https://visioniot.com/images/shelf-first.png"
                alt=""
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-[#442463] bg-opacity-75" />
            <div className="absolute inset-0  bg-gradient-to-t  from-[#f8d6cb]   " />
          </div>

          <section
            aria-labelledby="sale-heading"
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="sale-heading"
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Key Issues Targeted by GetCrest.ai
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-xl text-gray-200">
                Most of our products are limited releases that won't come back.
                Get your favorite items while they're in stock.
              </p>
              <a
                href="/ "
                className="mt-6 inline-block w-full rounded-md border border-transparent bg-black  px-8 py-3 font-medium text-white hover:bg-[#442463] sm:w-auto">
                Get access to our one-time sale
              </a>
            </div>
          </section>

          <section
            aria-labelledby="testimonial-heading"
            className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="testimonial-heading"
                className="text-2xl font-bold tracking-tight text-gray-900">
                What are people saying?
              </h2>

              <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                <blockquote className="sm:flex lg:block">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    aria-hidden="true"
                    className="flex-shrink-0 text-gray-300">
                    <path
                      d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                      fill="currentColor"
                    />
                  </svg>
                  Inventory Inaccuracy
                  <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                    <p className="text-lg text-gray-600">
                      Real-time tracking and automated updates ensure your
                      inventory records are always precise.
                    </p>
                    <cite className="mt-4 block font-semibold not-italic text-gray-900">
                      View more
                    </cite>
                  </div>
                </blockquote>
                <blockquote className="sm:flex lg:block">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    aria-hidden="true"
                    className="flex-shrink-0 text-gray-300">
                    <path
                      d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Stockouts and Overstock</span>
                  <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                    <p className="text-lg text-gray-600">
                      Advanced analytics predict demand, helping you maintain
                      optimal stock levels and avoid costly stockouts or excess
                      inventory.
                    </p>
                    <cite className="mt-4 block font-semibold not-italic text-gray-900">
                      View more
                    </cite>
                  </div>
                </blockquote>
                <blockquote className="sm:flex lg:block">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    aria-hidden="true"
                    className="flex-shrink-0 text-gray-300">
                    <path
                      d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Lack of Visibility</span>
                  <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                    <p className="text-lg text-gray-600">
                      Comprehensive dashboards and reporting provide full
                      visibility into your inventory, empowering better
                      decision-making.
                    </p>
                    <cite className="mt-4 block font-semibold not-italic text-gray-900">
                      View more
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </section>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
