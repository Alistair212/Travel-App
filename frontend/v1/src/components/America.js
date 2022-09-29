import americaflag from '../assets/USAflag.png';
import '../App.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function America(props) {
   //eventhandler
   const handleclick = () => {
        props.setFromCountry(props.value);
   }
    return(
        <Link to="/to">
        <div className="flights" onClick={handleclick}>
            <img src={americaflag} alt="american flag" />
        </div>
        </Link>
    );
}