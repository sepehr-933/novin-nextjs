import {createSlice} from "@reduxjs/toolkit";

const counter = createSlice({
    initialState :{
       count: 0
    },
    name:'counter',
    reducers : {
        minus(state, action) {
          state.count -= 1
        },
        plus(state, action) {
            state.count += 1
        }
    }
});
export const {minus, plus} = counter.actions;
export default counter.reducer;