import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'animate.css';
import "remixicon/fonts/remixicon.css";

import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import "animate.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <Navbar />
    <div className="container mx-auto px-5 lg:px-10">
      <App />
    </div>
    <Footer />
  </StrictMode>,
)
