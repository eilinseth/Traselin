import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import {Login} from '../pages/Login';
import Register from '../pages/Register';
import React,{FC} from 'react';

interface myProps  {
  isLogin:boolean,
  setLogin : React.Dispatch<React.SetStateAction<boolean>>
}

const MyRoutes: FC<myProps> = ({isLogin,setLogin}) => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path='/login' element={<Login isLogin={isLogin}  setLogin={setLogin} />} />
      <Route path='/register' element={<Register/>}/>
      
    </Routes>
  );
}

export default MyRoutes