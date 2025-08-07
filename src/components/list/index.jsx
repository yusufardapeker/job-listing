import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../store/listSlice";
import clsx from "clsx";

function List() {
	const { jobs } = useSelector((state) => state.list);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchJobs());
	}, []);

	return (
		<div className="list">
			{jobs.map((job) => (
				<div className={clsx("list-item", { featured: job.featured })} key={job.id}>
					<img src={job.logo} alt="company-logo" className="logo" />
					<div className="job-info">
						<div className="job-header">
							<p className="company-name">{job.company}</p>
							<div className="tags">
								{job.new && <p className="new-tag">New!</p>}
								{job.featured && <p className="featured-tag">Featured</p>}
							</div>
						</div>

						<p className="position">{job.position}</p>

						<ul className="time-location-info">
							<li className="posted-at">{job.postedAt}</li>
							<li className="contract">{job.contract}</li>
							<li className="location">{job.location}</li>
						</ul>
					</div>

					<div className="job-requirements">
						<p className="requirement-tag">{job.role}</p>
						<p className="requirement-tag">{job.level}</p>

						{job.languages.map((language, index) => (
							<p className="requirement-tag" key={index}>
								{language}
							</p>
						))}

						{job.tools.length >= 1 &&
							job.tools.map((tool, index) => (
								<p className="requirement-tag" key={index}>
									{tool}
								</p>
							))}
					</div>
				</div>
			))}
		</div>
	);
}

export { List };
