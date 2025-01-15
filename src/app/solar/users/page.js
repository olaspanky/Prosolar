// app/components/Tabs.js
"use client";

import { useState } from "react";
import Leads from "@/app/components/Leads"; // Correct import path
import Users from "@/app/components/Users"; // Correct import path
import Nav from "@/app/components/Nav"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("leads"); // Default to "leads"

  // Define the tabs
  const tabs = [
    {
      id: "leads",
      label: "Leads",
      content: <Leads />,
    },
    {
      id: "users",
      label: "Users",
      content: <Users />,
    },
  ];

  return (
    <div>
                <Nav/>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;