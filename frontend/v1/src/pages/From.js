import React from 'react'
import America from '../components/America';
import Australia from '../components/Australia';
import Uk from '../components/Uk';
import Header from '../components/Header';

export const From = (props) => {

  return (
    <>
    <Header name="Where from?"/>
    <div className='emptyy'>
    <America fromCountry={props.fromCountry} setCountry={props.setFromCountry} value="usa" />
        <Australia fromCountry={props.fromCountry} setCountry={props.setFromCountry} value="aus"/>
        <Uk fromCountry={props.fromCountry} setCountry={props.setFromCountry} value="uk"/>
    </div>
    </>
  )
}
