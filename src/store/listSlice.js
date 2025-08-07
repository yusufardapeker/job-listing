import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk("data/fetchJobs", async () => {
	const res = await fetch("../../data.json");
	return res.json();
});

const initialState = {
	jobs: [],
};

export const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchJobs.fulfilled, (state, action) => {
			state.jobs = action.payload;
		});
	},
});

export const {} = listSlice.actions;

export default listSlice.reducer;
