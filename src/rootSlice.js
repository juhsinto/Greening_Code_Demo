import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
	name: "root",
	initialState: {
        page1: {
            project_name: "",
          },
	}, 
	reducers: {
		updatePage1: (state, action) => { 
            state.page1 = { ...action.payload };
        },
	}
})

export const reducer = rootSlice.reducer;

export const { updatePage1 } = rootSlice.actions

