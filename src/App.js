import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './Components/Calculator';
import HomeSection from './pages/home';
import Quote from './pages/quote';
import './App.css';

export default function App() {
  return (

    <>
      <nav className="nav">
        <h1 className="navtitle">Math Magicians</h1>
        <ul className="navlist">
          <li className="listItem"><Link className="listItem" to="/">Home</Link></li>
          <li className="listItem"><Link to="/Calculator">Calculator</Link></li>
          <li className="listItem"><Link to="/Quote">Quote</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />

      </Routes>
    </>
  );
}
