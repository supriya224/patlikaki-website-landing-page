/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
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
    <section className="container mx-auto my-12">
      <div className="w-full min-h-fit p-12  rounded-2xl shadow-inner  shadow-[#2e2538] ">
        <div className="flex justify-center gap-12 items-center border-b border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2  gap-4  focus:outline-none ${
                index === activeTab
                  ? "mb-3 bg-purple-300 bg-gradient-to-t  from-[#f5bbaa]  text-2xl font-bold rounded-lg transition-all scale-110 ease-in-out duration-300  text-white"
                  : "border-transparent font-semibold text-xl text-gray-200"
              }`}
              onClick={() => setActiveTab(index)}>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4 my-12 text-xl text-center">
          {tabs[activeTab].content}
        </div>
      </div>
    </section>
  );
};

export default TargetPage;
