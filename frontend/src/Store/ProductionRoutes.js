import { createSlice } from "@reduxjs/toolkit";

const productionSlice=createSlice({
    name:"production",
    initialState:{
        link:"http://localhost:3000"
    },

});

export default productionSlice.reducer;