import {createSlice} from "@reduxjs/toolkit";

const users = createSlice({
    initialState: {
        users: [],
        isLoading : true,
        error:'',
    },
    name : 'users',
    reducers : {
      fetchUsers(state, {payload}) {
          state.isLoading = true
      },
      fetchUsersSuccess(state, {payload}) {
          state.users = payload.data
      },
      fetchUsersFail(state,{payload}) {
          state.error = payload.data
      }
    },
})
export const {fetchUsers,fetchUsersSuccess,fetchUsersFail} = users.actions;
export default users.reducer;