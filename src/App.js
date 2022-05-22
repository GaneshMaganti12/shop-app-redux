import './App.css';
import LaptopCard from './components/Shop/LaptopCard';
import MobileCard from './components/Shop/MobileCard';
import HookLaptopCard from './components/ShopHooks/HookLaptopCard';
import HookMobileCard from './components/ShopHooks/HookMobileCard';

function App() {
  return (
    <div className="App">
      <div className='card1'>
        <LaptopCard/>
        <MobileCard/>
      </div>
      <div className='card2'>
        <HookLaptopCard/>
        <HookMobileCard/>
      </div>
    </div>
  );
}

export default App;
