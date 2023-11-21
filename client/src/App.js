import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<LandingPage />} />
          <Route path="/services" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
