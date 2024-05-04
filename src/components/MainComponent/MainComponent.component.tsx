// Parent Component (e.g., App)
import React, { useState, useEffect } from 'react';
import { fetchJobsData } from '../../services/jobsData.service';
import { TjobDataPayload } from '../../types';
import CardComponent from '../CardComponent/Card.component';
import Filter from './Filter';

const WrapperComponent = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({}); // State to manage filter options

  useEffect(() => {
    fetchData(); // Fetch data initially and whenever filters change
  }, []);

  const fetchData = async () => {
    // Perform API integration to fetch data based on filter options
    // Update the 'data' state with the fetched data
    const payload : TjobDataPayload = {
        "limit": 10,
        "offset": 0
       }
    const response = await fetchJobsData(payload);
    setData(response?.data?.jdList)
  };

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters); // Update filter options when the user selects filters
//   };

  return (
    <div>
      {/* <Filter onChange={handleFilterChange} /> */}
      <CardComponent data={data}/>
    </div>
  );
};

export default WrapperComponent;
