import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const showuser = createAsyncThunk(
    'showuser',async(argu,{rejectWithValue})=>{
        try {
            
            const res = await axios.get("http://localhost:3000/user")
            const result = await res.data
            return result

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name:"userDetails",
    initialState:{
        user : [],
        loading : false,
        error : ""
    },
    reducers:{
        userPending :(state)=>{
            state.loading = true;
        },
        userFullfiled : (state,action)=>{
            state.loading = false,
            state.user.push(action.payload)
        },
        userReject : (state,action)=>{
                state.loading = false,
                state.error = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        // read data
        .addCase(showuser.pending,(state)=>{
            state.loading = true
        })
        .addCase(showuser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload
        })
        .addCase(showuser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const {userPending,userFullfiled,userReject} = userSlice.actions;

export default userSlice.reducer;