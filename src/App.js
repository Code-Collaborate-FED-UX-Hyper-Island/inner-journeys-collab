import "./App.css";
import Header from "./components/Header/Header.js";
import LandingPageMain from "./pages/LandingPage/LandingPageMain";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPageMain />
      <Footer />
    </div>
  );
}

export default App;
