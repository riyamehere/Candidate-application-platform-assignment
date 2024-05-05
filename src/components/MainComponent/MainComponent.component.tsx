// Parent Component (e.g., App)
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { fetchJobsData } from '../../services/jobsData.service';
import { TjobDataPayload } from '../../types';
import CardComponent from '../CardComponent/Card.component';
import './MainComponent.css'

const WrapperComponent = () => {
  const [offset, setOffset] = useState(0);
    const limit = 10;
    const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data initially and whenever filters change
  }, []);

  useEffect(() => {
    //check if the condition for infinite scroll
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchData();
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
const fetchData = async () => {
    const payload: TjobDataPayload = {
      "limit": limit,
      "offset": offset
    };
    const response = await fetchJobsData(payload);
    // Append new data to existing data
    setFilteredData(prevData => [...prevData, ...response?.data?.jdList]);
    // Increment offset for the next fetch
    setOffset(prevOffset => prevOffset + limit);
  };
  


  return (
    <Box className='parentDiv'>
      <CardComponent data={filteredData}/>
    </Box>
  );
};

export default WrapperComponent;
