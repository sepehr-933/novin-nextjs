import {createSlice} from "@reduxjs/toolkit";
import {useQuery} from "react-query";

const users = createSlice({
    initialState: {
        users: [],
        isLoading : true
    },
    name : 'users',
    reducers : {
      fetchUsers(state, {payload}) {
          state.users = payload
          console.log('ss',payload);
      }
    },
})
export const {fetchUsers} = users.actions;
export default users.reducer;