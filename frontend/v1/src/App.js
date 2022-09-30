
import './App.css';
import {Box, Hidden, Stack} from '@mui/material';
import Header from './components/Header';
import { useState } from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import { From } from "./pages/From";
import Topage from './pages/Topage';
import Status from './pages/Status';
import GlobalStyles from './Globalstyles';

function App() {
  const [fromCountry, setFromCountry] = useState('bob');
  const [toCountry, setToCountry] = useState('yippie');

  return (
    <>
    <GlobalStyles />
    
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }} 
        justifyContent="space-evenly"
        alignItems="center">
        <Routes>
          <Route path="/" element={<From fromCountry={fromCountry} setFromCountry={setFromCountry}/>}/>
          <Route path="/to" element={<Topage fromCountry={fromCountry} toCountry={toCountry} setToCountry={setToCountry} />} />
          <Route path="/status" element={<Status fromCountry={fromCountry} toCountry={toCountry} />} />
        </Routes>
      </Stack>

    </>
  );
}

export default App;
