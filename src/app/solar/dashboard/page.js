"use client";

import { useState, useEffect } from "react";
import Nav from "@/app/components/Nav"
const Dashboard = () => {
  const [view, setView] = useState("home"); // 'home' for Solar Home Systems, 'commercial' for Commercial Systems
  const [homePackages, setHomePackages] = useState([]);
  const [commercialPackages, setCommercialPackages] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); // State for Add New Package Modal
  const [editingPackage, setEditingPackage] = useState(null);
  const [updatedPrices, setUpdatedPrices] = useState({
    OutrightPayment: "",
    monthlyRepaymentTotal: "",
    monthlyRepaymentFirstDown: "",
    monthlyRepayment: "",
  });
 
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
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  
  // Fetch data on load
  useEffect(() => {
    fetch("/api/solarpackages/home")
      .then((res) => res.json())
      .then(setHomePackages)
      .catch((err) => console.error("Error fetching home packages:", err));

    fetch("/api/solarpackages/commercial")
      .then((res) => res.json())
      .then(setCommercialPackages)
      .catch((err) => console.error("Error fetching commercial packages:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("appliance")) {
      // For appliances, handle each appliance separately
      const applianceNum = name.replace("appliance", "");
      setNewPackage((prev) => ({
        ...prev,
        appliances: {
          ...prev.appliances,
          [`appliance${applianceNum}`]: value,
        },
      }));
    } else {
      setNewPackage((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = async () => {
    const endpoint =
      view === "home" ? "/api/solarpackages/home" : "/api/solarpackages/commercial";
    const method = editing ? "PUT" : "POST";
    const body = editing ? { id: editing, ...newPackage } : newPackage;

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const updatedPackages = await fetch(endpoint).then((r) => r.json());
        if (view === "home") {
          setHomePackages(updatedPackages);
        } else {
          setCommercialPackages(updatedPackages);
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
      }
    } catch (err) {
      console.error("Error saving package:", err);
    }
  };

  const handleSavePrices = async () => {
    const endpoint =
      view === "home" ? "/api/solarpackages/home" : "/api/solarpackages/commercial";
    const updatedPackage = {
      ...editingPackage,
      ...updatedPrices, // Only updating prices
    };

    try {
      const res = await fetch(endpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPackage),
      });
      if (res.ok) {
        // Refresh the list after saving
        const updatedPackages = await fetch(endpoint).then((r) => r.json());
        if (view === "home") {
          setHomePackages(updatedPackages);
        } else {
          setCommercialPackages(updatedPackages);
        }
        setShowEditModal(false);
        setEditingPackage(null);
        setUpdatedPrices({
          OutrightPayment: "",
          monthlyRepaymentTotal: "",
          monthlyRepaymentFirstDown: "",
          monthlyRepayment: "",
        });
      }
    } catch (err) {
      console.error("Error saving package:", err);
    }
  };

  const handleDelete = async (id) => {
    const endpoint =
      view === "home" ? "/api/solarpackages/home" : "/api/solarpackages/commercial";

    try {
      await fetch(endpoint, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (view === "home") {
        setHomePackages(homePackages.filter((pkg) => pkg.id !== id));
      } else {
        setCommercialPackages(commercialPackages.filter((pkg) => pkg.id !== id));
      }
    } catch (err) {
      console.error("Error deleting package:", err);
    }
  };

  const startEditing = (pkg) => {
    setEditingPackage(pkg);
    setUpdatedPrices({
      OutrightPayment: pkg.OutrightPayment || "",
      monthlyRepaymentTotal: pkg.monthlyRepaymentTotal || "",
      monthlyRepaymentFirstDown: pkg.monthlyRepaymentFirstDown || "",
      monthlyRepayment: pkg.monthlyRepayment || "",
    });
    setShowEditModal(true);
  };

  const currentPackages = view === "home" ? homePackages : commercialPackages;

  return (
    <div className="">
        <Nav/>
<div className="p-4 min-h-[100vh]">


      <h1 className="text-2xl font-bold mb-4">Solar Packages Dashboard</h1>

      {/* Toggle between views */}
      <div className="mb-4">
        <button
          className={`px-4 py-2 rounded ${view === "home" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setView("home")}
        >
          Solar Home Systems
        </button>
        <button
          className={`px-4 py-2 rounded ml-2 ${view === "commercial" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setView("commercial")}
        >
          Commercial Systems
        </button>
      </div>

      {/* Button to toggle form visibility */}
      <div className="mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add New Package"}
        </button>
      </div>

      {/* Form for adding or editing */}
      {showForm && (
        <div className="mb-6">
          <h2 className="font-bold mb-2">{editing ? "Edit Package" : "Add New Package"}</h2>

          {/* Form Inputs */}
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Component Name"
            name="component"
            value={newPackage.component || ""}
            onChange={handleChange}
          />
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Suitable For"
            name="suitableFor"
            value={newPackage.suitableFor || ""}
            onChange={handleChange}
          />
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Components"
            name="components"
            value={newPackage.components || ""}
            onChange={handleChange}
          />
          {[1, 2, 3, 4].map((num) => (
            <input
              key={num}
              className="border p-2 mb-2 w-full"
              placeholder={`Appliance ${num}`}
              name={`appliance${num}`}
              value={newPackage.appliances[`appliance${num}`] || ""}
              onChange={handleChange}
            />
          ))}
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Outright Payment"
            name="OutrightPayment"
            value={newPackage.OutrightPayment || ""}
            onChange={handleChange}
          />
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Monthly Repayment Total"
            name="monthlyRepaymentTotal"
            value={newPackage.monthlyRepaymentTotal || ""}
            onChange={handleChange}
          />
          <input
            className="border p-2 mb-2 w-full"
            placeholder="First Down Payment"
            name="monthlyRepaymentFirstDown"
            value={newPackage.monthlyRepaymentFirstDown || ""}
            onChange={handleChange}
          />
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Monthly Repayment"
            name="monthlyRepayment"
            value={newPackage.monthlyRepayment || ""}
            onChange={handleChange}
          />
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Payback Period (Years)"
            name="payBackPeriod"
            value={newPackage.payBackPeriod || ""}
            onChange={handleChange}
          />
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Annual Fuel Savings"
            name="annualFuelSavings"
            value={newPackage.annualFuelSavings || ""}
            onChange={handleChange}
          />
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Litres Saved"
            name="litresSaved"
            value={newPackage.litresSaved || ""}
            onChange={handleChange}
          />
          <textarea
            className="border p-2 mb-2 w-full"
            placeholder="Post Maintenance Details"
            name="postMaintanace"
            value={newPackage.postMaintanace || ""}
            onChange={handleChange}
          ></textarea>

          {/* Save Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            {editing ? "Update" : "Add"}
          </button>
        </div>
      )}

      {/* Packages Table */}
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border p-2">Component</th>
            <th className="border p-2">Suitable For</th>
            <th className="border p-2">Outright Payment</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPackages.map((pkg) => (
            <tr key={pkg.id}>
              <td className="border p-2">{pkg.component}</td>
              <td className="border p-2">{pkg.suitableFor}</td>
              <td className="border p-2">{pkg.OutrightPayment}</td>
              <td className="border p-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={() => startEditing(pkg)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                  onClick={() => handleDelete(pkg.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

       {/* Modal for Editing Package */}
       {showEditModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-">
          <h2 className="text-2xl font-bold mb-4">Editing: {editingPackage.component}</h2>

            <div className="mb-4">
              <label className="block mb-1">Outright Payment</label>
              <input
                type="text"
                name="OutrightPayment"
                value={updatedPrices.OutrightPayment}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Monthly Repayment (Total)</label>
              <input
                type="text"
                name="monthlyRepaymentTotal"
                value={updatedPrices.monthlyRepaymentTotal}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Monthly Repayment (First Down)</label>
              <input
                type="text"
                name="monthlyRepaymentFirstDown"
                value={updatedPrices.monthlyRepaymentFirstDown}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Monthly Repayment</label>
              <input
                type="text"
                name="monthlyRepayment"
                value={updatedPrices.monthlyRepayment}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePrices}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
             
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Dashboard;
