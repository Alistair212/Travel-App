import ukflag from '../assets/UKflag.png';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Uk(props) {
    //state
    let linker = '/to';
    const handleclick = () => {
        props.setCountry(props.value);
   }
   if (props.f == 'fal') {
    linker = "/status"
   }
   
     return(
        <Link to={linker}>
         <div>
             <img
             className="flights" onClick={handleclick}
             src={ukflag} alt="uk flag" />
         </div>
         </Link>
     );
 }