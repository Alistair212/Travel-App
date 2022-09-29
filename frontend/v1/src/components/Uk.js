import ukflag from '../assets/UKflag.png'
import React, { useEffect } from 'react'

export default function Uk(props) {
    //state
    const handleclick = () => {
        props.setFromCountry(props.value);
   }
   
     return(
         <div>
             <img
             className="flights" onClick={handleclick}
             src={ukflag} alt="uk flag" />
         </div>
     );
 }