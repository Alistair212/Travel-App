import React from 'react';
import Header from '../components/Header';
import America from '../components/America';
import Australia from '../components/Australia';
import Uk from '../components/Uk';

const Topage = (props) => {
  return (
    <>
    <Header name="Where to?"/>
    <America fromCountry={props.fromCountry} setFromCountry={props.setFromCountry} value="usa" />
        <Australia fromCountry={props.fromCountry} setFromCountry={props.setFromCountry} value="aus"/>
        <Uk fromCountry={props.fromCountry} setFromCountry={props.setFromCountry} value="uk"/>
    </>
    
  )
}

export default Topage