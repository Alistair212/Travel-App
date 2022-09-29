
import './App.css';
import {Box, Stack} from '@mui/material';
import Header from './components/Header';
import { useState } from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import { From } from "./pages/From";
import Topage from './pages/Topage';


function App() {
  const [fromCountry, setFromCountry] = useState('bob');
  const [toCountry, setToCountry] = useState('yippie');

  return (
    <>
    {/* <Header /> */}
    <Box >
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }} 
        justifyContent="space-evenly"
        alignItems="center">
        <Routes>
          <Route path="/" element={<From fromCountry={fromCountry} setFromCountry={setFromCountry}/>}/>
          <Route path="/to" element={<Topage toCountry={toCountry} setToCountry={setToCountry} />} />
        </Routes>
      </Stack>
    </Box>
    </>
  );
}

export default App;
