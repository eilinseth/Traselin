import './style/App.css';
import Navbar from './components/Navbar';
import SwitchButton from './components/SwitchButton';
import Content from './components/Content';
function App() {
 

  return (
    <div className="w-dvw min-h-screen font-[Raleway] bg-gray-100 relative z-0">
      <Navbar/>
      <Content/>
      <SwitchButton/>
    </div>
  );
}

export default App;
