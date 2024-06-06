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
    <div className="w-full max-w-md mx-auto">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 -mb-px focus:outline-none ${
              index === activeTab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TargetPage;
