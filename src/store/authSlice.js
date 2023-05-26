import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    authData: [],
    users: [],
    usersFromFirebase: []
}

export const saveDataToFirebase = createAsyncThunk(
    '/saveDataToFirebase',
    async (action) => {
        try {
            console.log('in Async');
            console.log(action)
            const response = await axios({
                method: 'post',
                url: 'https://shoozee-e20e0-default-rtdb.firebaseio.com/users.json',
                data: action
            });
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err)
        }
    }
)
export const getDataFromFirebase = createAsyncThunk(
    '/saveDataToFirebase',
    async () => {
        try {
            console.log('in Async');
            const response = await axios({
                method: 'get',
                url: 'https://shoozee-e20e0-default-rtdb.firebaseio.com/users.json',
            });
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            console.log('in regs')
            saveDataToFirebase(action.payload)
            state.users.push(action.payload)
        },
        loginUser: (state, action) => {
            console.log('inSlice')
            state.authData = []
            state.authData.push(action.payload)
        },
        logOut: (state, action) => {
            state.authData = []
        }
    },
    extraReducers: {
        [saveDataToFirebase.fulfilled]: (state, action) => {
            console.log(action)
        },
        [getDataFromFirebase.fulfilled]: (state, action) => {
            state.usersFromFirebase = action.payload
            console.log(state.usersFromFirebase)
            console.log(action)
        },
    }
})



export const { registerUser, loginUser, logOut } = authSlice.actions;
export default authSlice.reducer;