import "./styles/reset.css";
import "./styles/style.scss";

import { Filter } from "./components/filter";
import { List } from "./components/list";

import bgHeaderMobile from "./images/bg-header-mobile.svg";

function App() {
	return (
		<>
			<img src={bgHeaderMobile} alt="header background image" className="bg-header-img" />

			<div className="container">
				<Filter />
				<List />
			</div>
		</>
	);
}

export default App;
