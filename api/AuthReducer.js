import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {AuthApiServices} from './AuthApi'

export const Login = createAsyncThunk(
    'AuthReducer/Login',
    async(payload, {rejectWithValue} )=>{
        console.log(payload.body)
        try {

            const response = await AuthApiServices.apiLoginRequest(payload);
            console.log(payload.body)
            console.log(response)
            return response
        } catch (err) {
            console.log(err)

          if (!err.response) {
            throw err
          }
          return rejectWithValue(err.response.data)
        }
        
    }
)
export const Logout = createAsyncThunk(
    'AuthReducer/Logout',
    async payload =>{
        return payload
    }
)

const initialState = {
    token: null,
    user: null,
    loading: "idle",
    error: null,
  };

const states = {
    pending: 'pending',
    idle: 'idle',
  };

const AuthReducer = createSlice({
    name: 'AuthReducer',
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>{
        //login
        builder.addCase(
            Login.pending, (state, action)=>{
                state.loading = states.pending
                state.error = null
            }
        )
        builder.addCase(
            Login.fulfilled, (state, action)=>{
                state.token = action.payload.data.data.user
                state.user = action.payload.data.data.user
                state.loading = states.idle
                state.error = null
            }
        )
        builder.addCase(
            Login.rejected, (state, action)=>{
                state.loading = states.idle
            }
        )
        //logout
        builder.addCase(
                    Logout.pending, (state, action)=>{
                        state.loading = states.pending
                        state.error = null
                    }
                )
        builder.addCase(
                    Logout.fulfilled, (state, action)=>{
                        return {
                            ...initialState,
                          }
                    }
                )
        builder.addCase(
                    Logout.rejected, (state, action)=>{
                        state.loading = states.idle
                    }
                )
    }
})

export default AuthReducer.reducer;