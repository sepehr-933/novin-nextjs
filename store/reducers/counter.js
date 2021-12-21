import {createSlice} from "@reduxjs/toolkit";

const counter = createSlice({
    initialState :{
       count: 0
    },
    name:'counter',
    reducers : {
        minus(state, action) {
            action.payload === 0 ?
          state.count -= 1 :
                state.count -= action.payload
            console.log(action);
        },
        plus(state, action) {
            action.payload === 0 ?
                state.count += 1 :
                state.count += action.payload
            console.log(action);
        },
    }
});
export const {minus, plus,increment_Async} = counter.actions;
export default counter.reducer;