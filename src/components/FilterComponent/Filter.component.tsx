import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './Filter.css'

const FilterComponent = ({ filters, handleFilterChange, uniqueMinExp, uniqueRoles }) => {
  return (
    <div className="filters">
      <TextField
        type="text"
        name="companyName"
        label="Company Name"
        placeholder="Company Name"
        value={filters.companyName}
        onChange={handleFilterChange}
        className='fields-style'
      />
      <TextField
        type="text"
        name="location"
        label="Location"
        placeholder="Location"
        value={filters.location}
        onChange={handleFilterChange}
        className='fields-style'
      />
      <TextField
        select
        name="minExp"
        placeholder='Min Experience'
        label="Select Min Experience"
        value={filters.minExp}
        onChange={handleFilterChange}
        className='fields-style'
      >
        <MenuItem value="" disabled>Select Min Experience</MenuItem>
        {uniqueMinExp.map((exp, index) => (
          <MenuItem key={index} value={exp}>{exp}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        name="role"
        placeholder='Role'
        label="Select Role"
        value={filters.role}
        onChange={handleFilterChange}
        className='fields-style'
      >
        <MenuItem value="" disabled>Select Role</MenuItem>
        {uniqueRoles.map((role, index) => (
          <MenuItem key={index} value={role}>{role}</MenuItem>
        ))}
      </TextField>
      {/* Add other filter inputs/selects as needed */}
    </div>
  );
};

export default FilterComponent;
