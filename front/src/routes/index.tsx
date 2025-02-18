import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>}/>
    </Routes>
  );
}
