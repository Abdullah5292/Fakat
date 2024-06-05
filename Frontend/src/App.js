/* eslint-disable react/jsx-pascal-case */

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
import { AdminDashboard } from './pages/admin-dashboard-page';
import { BuildingSelection } from './pages/building-selection-page';
import './App.css';
import { Adamjee } from './pages/adamjee-page';
import { Tabba } from './pages/tabba-page';
import { Student_Center } from './pages/student-center-page';
import { Aman } from './pages/aman-page';
import { Booking } from './pages/booking-page';
import { ForgotPassword } from './pages/forgot-password-page';
import { ResetPassword } from './pages/reset-passcode';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { Dashboard } from './pages/dashboard';
import store from './slices/store';
import AboutUs from './pages/aboutus-page';
import { User } from './pages/admin-user-page';
import { useEffect } from 'react';




function App() {
  // const { loggedIn, role } = useSelector((state) => state.auth);
  const { loggedIn, role } = useSelector((state) => state.Auth);

  return (

    <Provider store={store}>
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
            <Route path="/booking" element={<Booking />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/*" element={<Navigate to='/landing' />} />



            {loggedIn && role === 'admin' && (
              <><Route path="/admin" element={<AdminDashboard />} />
                <Route path="/users" element={<User />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </>
            )
            }
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>

  );
}



export default App;
