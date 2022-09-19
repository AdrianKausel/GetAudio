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


function App() {
  const [datas, setDatas] = useState([])
  const [user, setUser] = useState ({})
  const navigate= useNavigate()

  const createUser = (obj)=>{
    return axios.post('http://localhost:8000/api/usercomposer/new', obj)
    .then(resp => {
      if(!resp.data.error){
        setDatas([...datas, resp.data.userComp])
        Swal.fire("Register", "Success!", "success")
        return true
      }
      else {return false}
    })
  }

  const login2 = (obj)=>{
    return axios.post('http://localhost:8000/api/userstandard/login', obj)
    .then(resp => {
      if(!resp.error){
        Swal.fire("Login", "Success!", "success")
        navigate('/Profile')
        return true
      }
      else {return false}
    })
  }
  return (
    <NavBarContext.Provider value={{user, setUser}} >
      <NavBar/>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/register" element={<RegisterWindow/>}></Route>
          <Route path="/registerUserType1" element={<FormType1 createData={createUser}  />}></Route>
          <Route path="/registerUserType2" element={<FormType2 />}></Route>
          <Route path='/LogIn' element={<LoginView/>}></Route>
          <Route path='/LogInUserType1' element={<LogInWindow/>}></Route>
          <Route path='/LogInUserType2' element={<LogInWindow2 createData3={login2}/>}></Route>
          <Route path='/Profile' element={<ProfilePage1 />}></Route>

        </Routes>

    </NavBarContext.Provider>

  );
}

export default App;
