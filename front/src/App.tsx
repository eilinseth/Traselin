import './style/App.css';
import Navbar from './components/Navbar';
import SwitchButton from './components/SwitchButton';
import MyRoutes from './routes';


function App() {
  return (
    <div className="w-dvw min-h-screen font-[Raleway] bg-gray-100 relative z-0 ">
      <Navbar />
      <MyRoutes />
      <SwitchButton />
    </div>
  );
}

export default App;
