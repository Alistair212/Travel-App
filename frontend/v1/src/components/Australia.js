import australiaflag from '../assets/Ausflag.png';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Australia (props) {
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
                src={australiaflag} alt="australian flag" />
            </div>
         </Link>
     );
 }