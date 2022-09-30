import React from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import Grid from '@mui/material/Grid';
import '../App.css';

const Header = (props) => {
  return (
    <Grid container
    className="grid" spacing={4} sx={{
      bgcolor: '#D3D3D3',
      color: '#C0C0C0'
  }}
    >
      <Grid item xs={3}><FlightIcon sx={{
        
        transform: "rotate(45deg)",
        fontSize: '10em',
      }}
      /></Grid>
      <Grid item xs={9}>
        <h2 className='test'>{props.name}</h2>
      </Grid>
    </Grid>
  )
}

export default Header