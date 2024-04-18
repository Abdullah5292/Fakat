
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { Login } from './pages/login-page';
import { Signup } from './pages/signup-page';

//import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to='/home' />} />


      </Routes>
    </BrowserRouter>


  );
}



export default App;
