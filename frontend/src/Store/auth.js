import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        IsLoggedIn:false
    },
    reducers:{
        login:(state)=>{
            state.IsLoggedIn=true
        },
        logout:(state)=>{
            state.IsLoggedIn=false
        },
        

    }
})
export const authActions=authSlice.actions;
export default authSlice.reducer;