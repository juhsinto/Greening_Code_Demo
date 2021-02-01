import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
	name: "root",
	initialState: {
        page1: {
            project_name: "",
          },
        progress: 0,
	}, 
	reducers: {
		updatePage1: (state, action) => { 
            state.page1 = { ...action.payload };
        },
        updateProgress: (state, action) => {
            state.progress = action.payload;
        }
	}
})

export const reducer = rootSlice.reducer;

export const { updatePage1, updateProgress } = rootSlice.actions

