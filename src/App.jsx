import "./styles/reset.css";
import "./styles/style.scss";

import { Filter } from "./components/filter";

import bgHeaderMobile from "./images/bg-header-mobile.svg";

function App() {
	return (
		<>
			<img src={bgHeaderMobile} alt="header background image" className="bg-header-img" />

			<div className="container">
				<Filter />
			</div>
		</>
	);
}

export default App;
