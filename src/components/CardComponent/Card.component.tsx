import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

interface Iprops {
    data : any[]
}
const CardComponent : React.FC<Iprops> = ({data}) => {
  return (
    <Box sx={{ display: 'flex', marginRight: '20px'}}>
    {
        data.map((job) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {job?.companyName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job?.jobDetailsFromCompany}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Apply</Button>
              </CardActions>
            </Card>
        ))
    }
    </Box>
  );
}

export default CardComponent;