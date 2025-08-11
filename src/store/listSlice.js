import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk("data/fetchJobs", async () => {
	const res = await fetch("./data.json");
	return res.json();
});

const initialState = {
	allJobs: [],
	jobs: [],
	filteredFields: [],
};

export const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {
		addFilter: (state, action) => {
			const isFilterExist = state.filteredFields.some((field) => field === action.payload);
			if (!isFilterExist) state.filteredFields.push(action.payload);

			state.jobs = state.allJobs.filter((job) => {
				const tags = [job.role, job.level, ...job.languages, ...job.tools];
				return state.filteredFields.every((filter) => tags.includes(filter));
			});
		},

		removeFilter: (state, action) => {
			state.filteredFields = state.filteredFields.filter((field) => field !== action.payload);

			state.jobs = state.allJobs.filter((job) => {
				const tags = [job.role, job.level, ...job.languages, ...job.tools];
				return state.filteredFields.every((filter) => tags.includes(filter));
			});
		},

		clearFilter: (state) => {
			state.filteredFields = [];
			state.jobs = state.allJobs;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchJobs.fulfilled, (state, action) => {
			state.allJobs = action.payload;
			state.jobs = action.payload;
		});
	},
});

export const { addFilter, removeFilter, clearFilter } = listSlice.actions;

export default listSlice.reducer;
