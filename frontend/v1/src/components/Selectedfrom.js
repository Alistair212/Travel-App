import React from 'react';
import ausflag from '../assets/Ausflag.png';
import usaflag from '../assets/USAflag.png';
import ukflag from '../assets/UKflag.png';


const Selectedfrom = (props) => {
    let retVal = "";
    console.log(props.countryval);
    const yoyo = () => {
        switch(props.countryval) {
            case "aus":
                retVal = '../assets/Ausflag.png';
                break;
            case "uk": 
                retVal = '../assets/UKflag.png';
                break;
            case "usa": 
                retVal = '../assets/USAflag.png';
                break;
            default:
                retVal = 'image no good';
        }
        return retVal;
    }
    const im = {
        'aus': ausflag,
        'uk': ukflag,
        'usa': usaflag
    }
    let hi = im[props.countryval];
    
  return (
    <img className='lgimg' src={hi} alt="no image avilable"/>
  )
}

export default Selectedfrom