
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { Login } from './pages/login-page';
import { Signup } from './pages/signup-page';
import { LandingPage } from './pages/landing-page';
import { Lockers } from './pages/lockers-page';
import { Reviews } from './pages/reviews-page';
import { Pricing } from './pages/pricing-page';
import { Contact } from './pages/contact-page';
import { Faqs } from './pages/faqs-page';

import { BuildingSelection } from './pages/building-selection-page';
import './App.css';
import { Adamjee } from './pages/adamjee-page';
import { Tabba } from './pages/tabba-page';
import { Student_Center } from './pages/student-center-page';
import { Aman } from './pages/aman-page';



function App() {
  return (

    <div className="min-h-screen bg-bg">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/lockers" element={<Lockers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/building" element={<BuildingSelection />} />
          <Route path="/adamjee" element={<Adamjee />} />
          <Route path="/tabba" element={<Tabba />} />
          <Route path="/studentcenter" element={<Student_Center />} />
          <Route path="/aman" element={<Aman />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/" element={<Navigate to='/landing' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
