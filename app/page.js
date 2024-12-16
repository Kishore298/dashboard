"use client";

import { useState } from "react";
import Card from "../components/Card";
import Charts from "../components/Charts";
import Tabs from "../components/Tabs";
import Dropdown from "../components/Dropdown";
import SkeletonLoader from "../components/SkeletonLoader";
import History from "../pages/dashboard/history"; // Add this component
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  mockUserGrowthData,
  mockRevenueData,
  mockEngagementData,
} from "../utils/mockData";

export default function Page() {
  const [selectedTab, setSelectedTab] = useState("Daily");
  const [selectedFilter, setSelectedFilter] = useState("User Growth");
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Mapping data based on the selected filter
  const dataMap = {
    "User Growth": mockUserGrowthData,
    Revenue: mockRevenueData,
    Engagement: mockEngagementData,
  };

  const data = dataMap[selectedFilter]?.[selectedTab.toLowerCase()];

  const handleTabChange = (tab) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedTab(tab);
      setIsLoading(false);
      toast.success("Data refreshed successfully", { autoClose: 3000 });
    }, 1000);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
  <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
    Dashboard Analytics
  </h1>

  {/* Tabs and Dropdown Section */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
    {/* Tabs Component */}
    <Tabs
      tabs={["Daily", "Weekly", "Monthly"]}
      selectedTab={selectedTab}
      onSelectTab={handleTabChange}
    />

    {/* Dropdown Component */}
    <div className="mt-4 sm:mt-0">
      <Dropdown
        options={["User Growth", "Revenue", "Engagement"]}
        selectedOption={selectedFilter}
        onChange={setSelectedFilter}
      />
    </div>
  </div>

  {/* Charts Section */}
  <div className="mt-6">
    {isLoading ? (
      <SkeletonLoader />
    ) : (
      <Charts data={data} title={`${selectedFilter} - ${selectedTab}`} />
    )}
  </div>

  {/* History Section */}
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">History</h2>
    <History filter={selectedFilter} tab={selectedTab} />
  </div>

  {/* Summary Section */}
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">Summary</h2>
    {/* Grid layout for different screen sizes */}
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {data?.map((value, index) => (
        <div key={index} className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">
            {selectedTab} - Data {index + 1}
          </h3>
          <p>
            <strong>User Growth:</strong> {value}
          </p>
          <p>
            <strong className="text-green-600">Revenue:</strong> $
            {mockRevenueData[selectedTab.toLowerCase()][index]}
          </p>
          <p>
            <strong>Engagement:</strong>{" "}
            {mockEngagementData[selectedTab.toLowerCase()][index]}%
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}
