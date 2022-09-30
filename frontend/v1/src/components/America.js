import americaflag from '../assets/USAflag.png';
import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { borderColor } from '@mui/system';

export default function America(props) {

    let linker = '/to';
   //eventhandler
   const handleclick = () => {
        props.setCountry(props.value);
   }

   if (props.f == 'fal') {
    linker = "/status"
   }


    return(
        <Link to={linker}>
        <div className="flights" onClick={handleclick}>
            <img src={americaflag} alt="american flag" />
        </div>
        </Link>
    );
}