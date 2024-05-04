import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import './Cards.css'

interface Iprops {
    data : any[]
}
const CardComponent : React.FC<Iprops> = ({data}) => {
  return (
    <Box className="card-grid">
    {
        data.map((job, index) => (
            <Card className="card" key={index}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {job?.companyName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job?.jobDetailsFromCompany}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' disableElevation className='apply-button' fullWidth>⚡ Easy Apply</Button>
              </CardActions>
            </Card>
        ))
    }
    </Box>
  );
}

export default CardComponent;