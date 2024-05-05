import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './Filter.css'
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { TfilterProp } from '../../types/filterProps.type';

/**
 * @author      : Riya Mehere
 * @date        : 2024-05-05
 * @description : This is the filter component
 * @params      : -
 * @return      : Renders the input and the select fields for filter functionality
 */
interface Ifilter{
    filters: TfilterProp, 
    handleFilterChange: (e) =>void, 
    uniqueMinExp: [], 
    uniqueRoles: []
}
const FilterComponent : React.FC<Ifilter>= ({ filters, handleFilterChange, uniqueMinExp, uniqueRoles }) => {
  const labelStyle = {
        color: 'rgb(128, 128, 128)',
      };
  const handleClear = (name) => {
    handleFilterChange({ target: { name, value: '' } });
    }; 

  return (
    <div className="filters">
      <TextField
        type="text"
        name="companyName"
        label="Company Name"
        placeholder="Company Name"
        value={filters?.companyName}
        onChange={handleFilterChange}
        className='fields-style'
        InputLabelProps={{
            style: labelStyle,
          }}
      />
      <TextField
        type="text"
        name="location"
        label="Location"
        placeholder="Location"
        value={filters?.location}
        onChange={handleFilterChange}
        className='fields-style'
        InputLabelProps={{
            style: labelStyle,
          }}
      />
      <TextField
        select
        name="minExp"
        placeholder='Min Experience'
        label="Select Min Experience"
        value={filters?.minExp}
        onChange={handleFilterChange}
        className='fields-style'
        InputLabelProps={{
            style: labelStyle,
          }}
        InputProps={{
            endAdornment: (
              filters?.minExp && (
                <IconButton onClick={() => handleClear('minExp')} size="small" sx={{marginRight: '15px'}}>
                  <ClearIcon />
                </IconButton>
              )
            ),
          }}
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
        value={filters?.role}
        onChange={handleFilterChange}
        className='fields-style'
        InputLabelProps={{
            style: labelStyle,
          }}
        InputProps={{
            endAdornment: (
              filters?.role && (
                <IconButton onClick={() => handleClear('role')} size="small" sx={{marginRight: '15px'}}>
                  <ClearIcon />
                </IconButton>
              )
            ),
          }}
      >
        <MenuItem value="" disabled>Select Role</MenuItem>
        {uniqueRoles.map((role, index) => (
          <MenuItem key={index} value={role}>{role}</MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default FilterComponent;
