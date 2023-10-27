import './App.css';
import Navigation from "./customer/components/navigation/Navigation";
import MainCarousel from "./customer/components/HomeCarousel/MainCarousel";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainCarousel/>
      <div>
        home
      </div>
    </div>
  );
}

export default App;
