import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Notfound from './pages/Notfound';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Chat from './pages/Chat';
import PrivateRoutes from './utils/PrivateRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route element={<PrivateRoutes />} >
          <Route path='/chat' element={<Chat/>} ></Route>
        </Route>
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App