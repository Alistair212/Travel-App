import React, { useState } from 'react';
import Header from '../components/Header';
import America from '../components/America';
import Australia from '../components/Australia';
import Uk from '../components/Uk';
import Selectedfrom from '../components/Selectedfrom';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from 'react-router-dom';

const Topage = (props) => {
    const navigate = useNavigate();

    const dict = {
        'usa': <America toCountry={props.toCountry} setCountry={props.setToCountry} value="usa" 
                selected={props.fromCountry} f="fal"/>,
        'aus': <Australia toCountry={props.toCountry} setCountry={props.setToCountry} value="aus"
                selected={props.fromCountry} f="fal"/>,
        'uk':  <Uk toCountry={props.toCountry} setCountry={props.setToCountry} value="uk"
                selected={props.fromCountry} f="fal"/>};
    
    const val = dict[props.fromCountry];
    console.log(val);
    if (props.fromCountry in dict) {
        delete dict[props.fromCountry];
    }
    
    const printDict = Object.values(dict);
    printDict.map(key => {
        console.log(key);
    })

  return (
    <>
    <Header name="Where to?"/>
    <Selectedfrom countryval={props.fromCountry} />
    {printDict}
    <UndoIcon onClick={() => navigate(-1)}/>
    </>
    
  )
}

export default Topage