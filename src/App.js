import React from 'react';
import {
  Box
} from '@chakra-ui/react'
import MainContent from './sections/MainContent';
import Simple from './sections/Navbar';

function App() {
  return (
    <Box minH={'100vh'} bg={"#2B2D3C"}>
      <Simple />
      <MainContent />
    </Box>
  );
}

export default App;
