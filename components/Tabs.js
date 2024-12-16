import React from 'react';

const Tabs = ({ tabs, selectedTab, onSelectTab }) => (
  <div className="tabs">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`tab ${selectedTab === tab ? 'active' : ''}`}
        onClick={() => onSelectTab(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Tabs;