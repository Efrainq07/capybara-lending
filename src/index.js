import React from 'react';
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './App';
import reportWebVitals from './reportWebVitals';
import Docs from './pages/Docs';
import Delegate from './pages/Delegate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            {/* Home page page */}
            <Route exact path="/" element={<Home />} />
            {/* Docs page page */}
            <Route path="/docs" element={<Docs />} />
            {/* Delegate page */}
            <Route path="/delegate" element={<Delegate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
