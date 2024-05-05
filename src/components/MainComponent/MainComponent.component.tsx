import { Box} from '@mui/material';
import { useState, useEffect } from 'react';
import { fetchJobsData } from '../../services/jobsData.service';
import { TjobDataPayload } from '../../types';
import CardComponent from '../CardComponent/Card.component';
import FilterComponent from '../FilterComponent/Filter.component';
import './MainComponent.css';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import { TfilterProp } from '../../types/filterProps.type';

/**
 * @author      : Riya Mehere
 * @date        : 2024-05-05
 * @description : This is the parent component for filter and card component
 * @params      : -
 * @return      : Renders the filter and card component, api calls and sets the jobs data and 
 *                passes down this as prop in child component
 */

const WrapperComponent = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const limit = 10;
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState<TfilterProp>({
    minExp: '',
    companyName: '',
    location: '',
    role: '',
  });

  useEffect(() => {
    fetchData(); // Fetch data initially and whenever filters change
    fetchAllData();
    attachScrollListener(); // Attach scroll event listener
    return () => {
      detachScrollListener(); // Detach scroll event listener on component unmount
    };
  }, []); // Empty dependency array to run this effect only once on component mount

  useEffect(() => {
    applyFilters(); // Apply filters whenever filters change
  }, [filters]); // Include filters in the dependency array

  const attachScrollListener = () => {
    window.addEventListener('scroll', handleScroll);
  };

  const detachScrollListener = () => {
    window.removeEventListener('scroll', handleScroll);
  };

const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      const payload: TjobDataPayload = {
        limit: limit,
        offset: offset
      };
      const response = await fetchJobsData(payload);
      // Append new data to existing data
      setFilteredData(prevData => [...prevData, ...response?.data?.jdList]);
      // Increment offset for the next fetch
      setOffset(prevOffset => prevOffset + limit);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchAllData = async () => {
    try {
      const payload = {
        limit: 947, // Fetch all data at once
        offset: 0 // Start from the beginning
      };
      const response = await fetchJobsData(payload);
      const allData = response?.data?.jdList || [];
      setData(allData); // Set full dataset in the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to apply filters based on applied filters
  const applyFilters = () => {
    let filteredResult = []; // Initialize an empty array to store filtered results

    // Iterate through the data array and apply filters
    filteredResult = data.filter(job => {
      // Check if companyName filter is applied and match the job's companyName
      if (filters.companyName && !job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) {
        return false; // Skip this job if companyName filter doesn't match
      }

      // Check if location filter is applied and match the job's location
      if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false; // Skip this job if location filter doesn't match
      }

      // Check if minExp filter is applied and match the job's minExp
      if (filters.minExp && job.minExp !== parseInt(filters.minExp)) {
        return false; // Skip this job if minExp filter doesn't match
      }

      // Check if role filter is applied and match the job's role
      if (filters.role && job.jobRole !== filters.role) {
        return false; // Skip this job if role filter doesn't match
      }

      // Check if basePay filter is applied and match the job's basePay
      if (filters.basePay && job.minJdSalary !== parseInt(filters.basePay)) {
        return false; // Skip this job if basePay filter doesn't match
      }

      // If all filters match, include this job in the filtered result
      return true;
    });

    // Update the filteredData state with the filtered result
    setFilteredData(filteredResult);
  };

  // Function to handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Extract unique values for minExp, role, and basePay from data (full dataset)
  const uniqueMinExp = Array.from(new Set(data.map(job => job.minExp))) as [];
  const uniqueRoles = Array.from(new Set(data.map(job => job.jobRole))) as [];

  return (
    <Box className='parentDiv'>
      <FilterComponent
        filters={filters}
        handleFilterChange={handleFilterChange}
        uniqueMinExp={uniqueMinExp}
        uniqueRoles={uniqueRoles}
      />
      {filteredData.length > 0 ? (
            <CardComponent data={filteredData} />
        ) : (
            <Box className='no-data'>
                <SentimentVeryDissatisfiedOutlinedIcon className='error-icon'/>
                <p>No jobs available for this category at this moment</p>
            </Box>
        )}
    </Box>
  );
};

export default WrapperComponent;
