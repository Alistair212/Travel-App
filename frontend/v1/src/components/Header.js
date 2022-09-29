import React from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import Grid from '@mui/material/Grid';
import '../App.css';
// import Input from '@mui/material/Input';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';

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
        <input className='test' placeholder={props.name} />
      </Grid>
    </Grid>
  )
}

export default Header