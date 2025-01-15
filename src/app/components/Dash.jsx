"use client";

import { useState, useEffect } from "react";
import Nav from "@/app/components/Nav";
import PasswordProtect from "@/app/components/Passprotect";

const Dashboard = () => {
  const [view, setView] = useState("home"); // 'home' for Solar Home Systems, 'commercial' for Commercial Systems
  const [homePackages, setHomePackages] = useState([]);
  const [commercialPackages, setCommercialPackages] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [updatedPackage, setUpdatedPackage] = useState({});
  const [newPackage, setNewPackage] = useState({
    component: "",
    suitableFor: "",
    components: "",
    appliances: {
      appliance1: "",
      appliance2: "",
      appliance3: "",
      appliance4: "",
    },
    OutrightPayment: "",
    monthlyRepaymentTotal: "",
    monthlyRepaymentFirstDown: "",
    monthlyRepayment: "",
    payBackPeriod: "",
    annualFuelSavings: "",
    litresSaved: "",
    postMaintanace: "",
  });
  const [editing, setEditing] = useState(null);

  // Fetch data on load
  useEffect(() => {
    fetch("/api/solarpackages/home")
      .then((res) => res.json())
      .then(setHomePackages)
      .catch((err) => console.error("Error fetching home packages:", err));

    fetch("/api/solarpackages/commercial")
      .then((res) => res.json())
      .then(setCommercialPackages)
      .catch((err) =>
        console.error("Error fetching commercial packages:", err)
      );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (showEditModal) {
      setUpdatedPackage((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      if (name.startsWith("appliance")) {
        const applianceNum = name.replace("appliance", "");
        setNewPackage((prev) => ({
          ...prev,
          appliances: {
            ...prev.appliances,
            [`appliance${applianceNum}`]: value,
          },
        }));
      } else {
        setNewPackage((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    }
  };

  const handleSave = async () => {
    const endpoint =
      view === "home"
        ? "/api/solarpackages/home"
        : "/api/solarpackages/commercial";
    const method = editing ? "PUT" : "POST";
    const body = editing ? { id: editing, ...newPackage } : newPackage;

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const newPkg = await res.json();
        if (view === "home") {
          setHomePackages((prevPackages) => [...prevPackages, newPkg]);
        } else {
          setCommercialPackages((prevPackages) => [...prevPackages, newPkg]);
        }
        setNewPackage({
          component: "",
          suitableFor: "",
          components: "",
          appliances: {
            appliance1: "",
            appliance2: "",
            appliance3: "",
            appliance4: "",
          },
          OutrightPayment: "",
          monthlyRepaymentTotal: "",
          monthlyRepaymentFirstDown: "",
          monthlyRepayment: "",
          payBackPeriod: "",
          annualFuelSavings: "",
          litresSaved: "",
          postMaintanace: "",
        });
        setEditing(null);
        setShowAddModal(false);
      }
    } catch (err) {
      console.error("Error saving package:", err);
    }
  };

  const handleSavePrices = async () => {
    const endpoint =
      view === "home"
        ? "/api/solarpackages/home"
        : "/api/solarpackages/commercial";

    try {
      const res = await fetch(endpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPackage),
      });

      if (res.ok) {
        const updatedPackages = await fetch(endpoint).then((r) => r.json());
        if (view === "home") {
          setHomePackages(updatedPackages);
        } else {
          setCommercialPackages(updatedPackages);
        }
        setShowEditModal(false);
        setEditingPackage(null);
        setUpdatedPackage({});
      } else {
        console.error("Error saving package:", res);
      }
    } catch (err) {
      console.error("Error saving package:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      const endpoint =
        view === "home"
          ? "/api/solarpackages/home"
          : "/api/solarpackages/commercial";

      try {
        const res = await fetch(endpoint, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });

        if (res.ok) {
          if (view === "home") {
            setHomePackages((prevPackages) =>
              prevPackages.filter((pkg) => pkg.id !== id)
            );
          } else {
            setCommercialPackages((prevPackages) =>
              prevPackages.filter((pkg) => pkg.id !== id)
            );
          }
        }
      } catch (err) {
        console.error("Error deleting package:", err);
      }
    }
  };

  const startEditing = (pkg) => {
    setEditingPackage(pkg);
    setUpdatedPackage(pkg);
    setShowEditModal(true);
  };

  const currentPackages = view === "home" ? homePackages : commercialPackages;

  return (
    <PasswordProtect>
      <div className="bg-gray-100 w-full">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Solar Packages Dashboard
          </h1>

          {/* Toggle between views */}
          <div className="mb-6">
            <button
              className={`px-6 py-2 rounded-lg ${
                view === "home"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setView("home")}
            >
              Solar Home Systems
            </button>
            <button
              className={`px-6 py-2 rounded-lg ml-4 ${
                view === "commercial"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setView("commercial")}
            >
              Commercial Systems
            </button>
          </div>

          {/* Button to toggle form visibility */}
          <div className="mb-6">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
              onClick={() => setShowAddModal(true)}
            >
              Add New Package
            </button>
          </div>

          {/* Packages Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Component
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Suitable For
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Outright Payment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentPackages.map((pkg) => (
                  <tr
                    key={pkg.id}
                    className="hover:bg-gray-50 transition duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {pkg.component}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {pkg.suitableFor}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {pkg.OutrightPayment}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                        onClick={() => startEditing(pkg)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-red-600 transition duration-200"
                        onClick={() => handleDelete(pkg.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal for Editing Package */}
          {showEditModal && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Editing: {editingPackage.component}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.keys(updatedPackage).map((key) => (
                    <div key={key} className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {key}
                      </label>
                      <input
                        type="text"
                        name={key}
                        value={updatedPackage[key] || ""}
                        onChange={handleChange}
                        className="border p-2 w-full rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200 mr-4"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSavePrices}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal for Adding New Package */}
          {showAddModal && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Add New Package
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.keys(newPackage).map((key) => (
                    <div key={key} className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {key}
                      </label>
                      {typeof newPackage[key] === "object" ? (
                        Object.keys(newPackage[key]).map((subKey) => (
                          <input
                            key={subKey}
                            type="text"
                            name={`appliance${subKey}`}
                            value={newPackage[key][subKey] || ""}
                            onChange={handleChange}
                            className="border p-2 w-full rounded-lg"
                            placeholder={`Appliance ${subKey}`}
                          />
                        ))
                      ) : (
                        <input
                          type="text"
                          name={key}
                          value={newPackage[key] || ""}
                          onChange={handleChange}
                          className="border p-2 w-full rounded-lg"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200 mr-4"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PasswordProtect>
  );
};

export default Dashboard;
