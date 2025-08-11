import React from "react";

import iconRemove from "../../images/icon-remove.svg";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, removeFilter } from "../../store/listSlice";

function Filter() {
	const { filteredFields } = useSelector((state) => state.list);
	const dispatch = useDispatch();

	const removeFilterField = (filterField) => {
		dispatch(removeFilter(filterField));
	};

	return (
		<>
			{filteredFields.length >= 1 && (
				<div className="filter">
					<div className="filter-items">
						{filteredFields.map((field) => (
							<div className="filter-item" key={field}>
								<p className="filtered-field">{field}</p>
								<img
									src={iconRemove}
									alt="remove icon"
									className="remove-icon"
									onClick={() => removeFilterField(field)}
								/>
							</div>
						))}
					</div>
					<button className="clear-filter-btn" onClick={() => dispatch(clearFilter())}>
						Clear
					</button>
				</div>
			)}
		</>
	);
}

export { Filter };
