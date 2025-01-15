"use client"
import React, { useState } from 'react';
import { Menu, X, Home, Users, Settings, BarChart2, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import Leads from "@/app/components/Leads"; // Correct import path
import User from "@/app/components/Users"; // Correct import path
import Nav from "@/app/components/Nav"
import Dashboard from '@/app/components/Dash';
import PasswordProtect from "@/app/components/Passprotect";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('Dash');

  const menuItems = [
    { name: 'Dash', icon: Home },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'Users', icon: Users },
    { name: 'Messages', icon: Mail },
    { name: 'Settings', icon: Settings },
  ];

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
      content: <User/>,
    },
    {
      id: "Dashboard",
      label: "Dashboard",
      content: <Dashboard/>,
    },
  ];

  return (
    <PasswordProtect>

    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800">Prosolar Admin</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Mail size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        </div>
      </nav>

      {/* Sidebar
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        } z-50`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 hidden lg:block"
            >
              {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
          <nav className="flex-1 px-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActivePage(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-3 mb-1 rounded-lg transition-colors ${
                  activePage === item.name
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <item.icon size={20} />
                {sidebarOpen && <span>{item.name}</span>}
              </button>
            ))}
          </nav>
        </div>
      </aside> */}

      {/* Main Content */}
      <main
        className={`pt-16 transition-all duration-300 ${
          sidebarOpen ? '' : ''
        }`}
      >
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Cards */}
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

          {/* Sample Chart Section */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
            <div className=" bg-gray-50 rounded-lg flex items-center justify-center">
            

      {/* Tab Content */}
      <div className="mt-4 w-full">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>            </div>
          </div>
        </div>
      </main>
    </div>
    </PasswordProtect>

  );
};

export default DashboardLayout;