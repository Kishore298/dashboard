import React from 'react';

const Dropdown = ({ options, onChange, selectedOption }) => (
  <select value={selectedOption} onChange={(e) => onChange(e.target.value)}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Dropdown;