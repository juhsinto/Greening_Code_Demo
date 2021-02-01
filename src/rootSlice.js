import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
	name: "root",
	initialState: {
        page1: {
            
        },
        page2: {
            
        },
        page3: {
            
        },
        formProgress: 0,
	}, 
	reducers: {
		updatePage1: (state, action) => { 
            state.page1 = { ...action.payload };
        },
        updatePage2: (state, action) => { 
            state.page2 = { ...action.payload };
        },
        updatePage3: (state, action) => { 
            state.page3 = { ...action.payload };
        },
        updateFormProgress: (state, action) => {
            state.formProgress = action.payload;
        }
	}
})

export const reducer = rootSlice.reducer;

export const { updatePage1, updatePage2, updatePage3, updateFormProgress } = rootSlice.actions

