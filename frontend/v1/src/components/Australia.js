import australiaflag from '../assets/Ausflag.png';
import React from 'react'

export default function Australia (props) {
    //state
    const handleclick = () => {
        props.setFromCountry(props.value);
   } 
     return(
         <div>
             <img 
             className="flights" onClick={handleclick}
             src={australiaflag} alt="australian flag" />
         </div>
     );
 }