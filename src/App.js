import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import ConcertsContainer from "./Components/ConcertsContainer/ConcertsContainer";
import Events1 from "./Components/Events1/Events1";
import Events2 from "./Components/Events2/Events2";

function App() {
	return (
		<div className="App">
			<LandingPage />
			<Carousel />
			<ConcertsContainer />
			<Events1 />
			<Events2 />
		</div>
	);
}

export default App;
