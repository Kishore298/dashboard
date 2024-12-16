import React, { useState } from 'react';
import { mockUserGrowthData, mockRevenueData, mockEngagementData } from '../../utils/mockData';
import Charts from '../../components/Charts';
import Tabs from '../../components/Tabs';
import Dropdown from '../../components/Dropdown';
import Toast from '../../components/Toast';
import SkeletonLoader from '../../components/SkeletonLoader';

const Summary = () => {
  const [selectedTab, setSelectedTab] = useState('Daily');
  const [selectedFilter, setSelectedFilter] = useState('User Growth');
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleTabChange = (tab) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedTab(tab);
      setIsLoading(false);
      setToastMessage('Data refreshed successfully');
    }, 1000);
  };

  const dataMap = {
    'User Growth': mockUserGrowthData,
    Revenue: mockRevenueData,
    Engagement: mockEngagementData,
  };

  const data = dataMap[selectedFilter][selectedTab.toLowerCase()];

  return (
    <div>
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage('')} />}
      <Tabs tabs={['Daily', 'Weekly', 'Monthly']} selectedTab={selectedTab} onSelectTab={handleTabChange} />
      <Dropdown
        options={['User Growth', 'Revenue', 'Engagement']}
        selectedOption={selectedFilter}
        onChange={setSelectedFilter}
      />
      {isLoading ? <SkeletonLoader /> : <Charts data={data} title={`${selectedFilter} - ${selectedTab}`} />}
    </div>
  );
};

export default Summary;