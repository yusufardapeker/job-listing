import "./styles/reset.css";
import "./styles/style.scss";

import { Filter } from "./components/filter";
import { List } from "./components/list";

import bgHeaderMobile from "../public/images/bg-header-mobile.svg";
import bgHeaderDesktop from "../public/images/bg-header-desktop.svg";

function App() {
	return (
		<>
			<picture>
				<source media="(min-width: 376px)" srcSet={bgHeaderDesktop} />
				<img src={bgHeaderMobile} alt="header background image" className="bg-header-img" />
			</picture>

			<div className="container">
				<Filter />
				<List />
			</div>
		</>
	);
}

export default App;
