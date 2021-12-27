import {createSlice} from "@reduxjs/toolkit";

const getUserById = createSlice({
    initialState :{
        user : [],
        isLoading : true,
        error : ''
    },
    name : 'user',
    reducers : {
        fetchUser(state,{payload}) {
            state.isLoading = true
            console.log('s');
        },
        fetchUserSuccess(state,{payload}) {
            state.isLoading = false;
            state.user = [...state.user,payload.user];
        },
        fetchUserFail(state,{payload}) {
            state.error = payload.error;
        }
    }
});
export const {fetchUser,fetchUserSuccess,fetchUserFail} = getUserById.actions;
export default getUserById.reducer