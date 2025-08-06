import React from "react";

import iconRemove from "../../images/icon-remove.svg";

function Filter() {
	return (
		<div className="filter">
			<div className="filter-items">
				<div className="filter-item">
					<p className="filtered-field">Frontend</p>
					<img src={iconRemove} alt="remove icon" className="remove-icon" />
				</div>

				<div className="filter-item">
					<p className="filtered-field">CSS</p>
					<img src={iconRemove} alt="remove icon" className="remove-icon" />
				</div>

				<div className="filter-item">
					<p className="filtered-field">JavaScript</p>
					<img src={iconRemove} alt="remove icon" className="remove-icon" />
				</div>
			</div>

			<button className="clear-filter-btn">Clear</button>
		</div>
	);
}

export { Filter };
