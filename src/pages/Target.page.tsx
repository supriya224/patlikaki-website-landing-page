/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */

// this is tab section
import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const TargetPage: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="container mx-auto px-4">
      <div className="w-full min-h-fit rounded-2xl shadow-inner   shadow-[#2e2538] border-b ">
        <div className="flex flex-wrap p-5 gap-6 justify-center items-center border-b m-12 border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2  focus:outline-none ${
                index === activeTab
                  ? "my-3 bg-purple-300 bg-gradient-to-t from-[#f5bbaa] text-sm flex flex-wrap gap-4  md:text-2xl font-bold rounded-lg transition-all scale-110 ease-in-out duration-300  text-white"
                  : "border-transparent font-semibold text-xl text-gray-200"
              }`}
              onClick={() => setActiveTab(index)}>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4 my-12 xl:text-xl text-center">
          {tabs[activeTab].content}
        </div>
      </div>
    </section>
  );
};

export default TargetPage;
