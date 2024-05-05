import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import './Cards.css'
import { useState } from 'react';

interface Iprops {
    data : any[]
}
const CardComponent : React.FC<Iprops> = ({data}) => {
  const [expandedMap, setExpandedMap] = useState({});

  const toggleExpanded = (index) => {
    setExpandedMap(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  return (
    <Box className="card-grid">
    {
        data.map((job, index) => (
            <Card className="card" key={index}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='header-box'>
                  <Box>
                  <img src={job?.logoUrl} alt='logo' className='logo'/>
                  </Box>
                  <Box>
                    <p className='company-name'>{job?.companyName}</p>
                    <p className='job-role'>{job?.jobRole}</p>
                    <p className='location'>{job?.location}</p>
                  </Box>
                </Typography>
                <Typography className='card-salary'>Estimated Salary: {job?.salaryCurrencyCode} {job?.minJdSalary ? `${job?.minJdSalary} - ` : ''} {job?.maxJdSalary ? job?.maxJdSalary: ''} ✅</Typography>
                <Typography className='about-company'>
                  About Company:
                </Typography>
                <Typography variant="body2" color="text.secondary" className='job-desc'>
                  {expandedMap[index] ? job.jobDetailsFromCompany : `${job.jobDetailsFromCompany.slice(0, 500)}...`}
                </Typography>
                <span className="read-more" onClick={() => toggleExpanded(index)}>
                  {expandedMap[index] ? "Read Less" : "Read More"}
                </span>
                <Typography className='experience'>Experience required</Typography>
                <Typography>{job?.minExp ? `${job?.minExp} -` : ''} {job?.maxExp ? job?.maxExp : 'null'} </Typography>
              </CardContent>
              <CardActions>
                <Button disableElevation className='apply-button' fullWidth>⚡ Easy Apply</Button>
              </CardActions>
            </Card>
        ))
    }
    </Box>
  );
}

export default CardComponent;