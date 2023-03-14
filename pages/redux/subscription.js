import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('./fetch/fetchPosts', async () => {
  const response1= sessionStorage.getItem("redux-state");
  const jasonData1= JSON.parse(response1);
  return {jasonData1};
});

const initialState = {
  	planLevel: "",
  	yearly: false,
  	addOns: [],
  	planAmt: 0,
	addOnsAmt: 0,  
  	total: 0
}

const saveToLocal= (item)=>{
  sessionStorage.setItem("redux-state", JSON.stringify(item));
}

export const counterSlice = createSlice({
  	name: 'plan',
  	initialState,
  	reducers: {
    	level: (state, action) => {
    	  state.planLevel = action.payload;
    	  saveToLocal(state);
    	},
    	validity: (state) => {
    	  state.yearly = !state.yearly;
    	  saveToLocal(state);
    	},
    	extraPlan: (state, action) => {
    	  state.addOns.push(action.payload);
    	  saveToLocal(state);
    	},
    	removeExtraPlan: (state, action) => {
    	  const extras= state.addOns;
    	  const id= action.payload
    	  const filter= extras.filter((extra)=>extra !== id);
    	  state.addOns= filter;
    	  saveToLocal(state);
    	},
    	planTotal: (state, action) => {
    	  state.planAmt = action.payload;
		  state.total= state.planAmt;
    	},
    	addOnsTotal: (state, action) => {
    	  state.addOnsAmt = action.payload;
		  state.total = state.planAmt + state.addOnsAmt;
    	},
  	},extraReducers: (builder) => {
  	  	builder.addCase(fetchPosts.fulfilled, (state, action) => {
  	      state = action.payload.jasonData1;
  	  	});
  	},
})

// Action creators are generated for each case reducer function
export const { level, validity, extraPlan, removeExtraPlan, planTotal, addOnsTotal} = counterSlice.actions

export default counterSlice.reducer