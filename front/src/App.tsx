import './style/App.css';
import Navbar from './components/Navbar';
import SwitchButton from './components/SwitchButton';
import MyRoutes from './routes';
import { useState } from 'react';


function App() {
  const [isLogin,setIsLogin] = useState(false)
  return (
    <div className="w-dvw min-h-screen font-[Raleway] bg-gray-100 relative z-0 ">
      <Navbar isLogin={isLogin}  />
      <MyRoutes isLogin={isLogin} setLogin={() => setIsLogin(!isLogin)}/>
      <SwitchButton />
    </div>
  );
}

export default App;
