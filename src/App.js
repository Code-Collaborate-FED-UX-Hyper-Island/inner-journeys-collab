
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import './App.css';
import Carousel from './components/Carousel/Carousel';
import ConcertsContainer from './components/ConcertsContainer/ConcertsContainer';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Carousel />
      <ConcertsContainer />
    </div>
  );
}

export default App;
