import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search.jsx';
import Hero from './components/Hero.jsx'
import TrendingList from './components/TrendingList.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Search/>
      <Hero/>
      <TrendingList/>
    </BrowserRouter>
  </StrictMode>,
)
