import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from 'express';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'; 
import PokemonDetails from './PokemonDetails'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   < QueryClientProvider client={queryClient}>
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:pokemonName" element={<PokemonDetails/>} />
    </Routes>
   </BrowserRouter> 
   </QueryClientProvider>
    <App />
  </StrictMode>,
  
)
const queryClient = new QueryClient();
