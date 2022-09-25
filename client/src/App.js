import './App.css';
import NavBarContext from './context/NavBarContext';
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Main from './components/Main';
import RegisterWindow from './components/RegistrationView';
import FormType1 from './components/FormType1';
import ScrollToTop from './components/ScrollToTop';
import LogInWindow from './components/LogIn';
import FormType2 from './components/FormType2';
import { useState } from 'react';
import axios from 'axios';
import LogInWindow2 from './components/LogIn2';
import LoginView from './components/LoginView';
import ProfilePage1 from './components/ProfilePage1';
import Swal from 'sweetalert2';
import ProfilePage2 from './components/ProfilePage2';
import AddComponent from './components/AddComponent';
import AddComponentScreen from './components/AddComponentScreen';


function App() {

  const [user, setUser] = useState ({})
  
  return (
    <NavBarContext.Provider value={{user, setUser}} >
      <NavBar/>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/register" element={<RegisterWindow/>}></Route>
          <Route path="/registerUserType1" element={<FormType1/>}></Route>
          <Route path="/registerUserType2" element={<FormType2 />}></Route>
          <Route path='/LogIn' element={<LoginView/>}></Route>
          <Route path='/LogInUserType1' element={<LogInWindow/>}></Route>
          <Route path='/LogInUserType2' element={<LogInWindow2/>}></Route>
          <Route path='/Profile' element={<ProfilePage1 />}></Route>
          <Route path='/Profile2' element={<ProfilePage2 />}></Route>

          <Route path='/add' element={<AddComponentScreen />}></Route>


        </Routes>

    </NavBarContext.Provider>

  );
}

export default App;
