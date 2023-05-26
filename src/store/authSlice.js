import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authData: [],
    users:[]
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        registerUser : (state, action) => {
            state.users.push(action.payload)
        },
        loginUser : (state, action) => {
            console.log('inSlice')
            state.authData=[]
            state.authData.push(action.payload)
        },
        logOut: (state, action) => {
            state.authData=[]
        }
    }
})

export const { registerUser,loginUser, logOut } = authSlice.actions;
export default authSlice.reducer;