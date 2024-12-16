import React from "react";

const History = ({ filter, tab }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p>Showing history for {filter} - {tab}.</p>
      {/* Add historical data or mock it */}
    </div>
  );
};

export default History;
