import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  userId: null,
  error: null
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    // loging parth
  
loginSuccess: (state,action)=>{

  state.userId = action.payload
  
},

  loginFaild: (state,action)=>{
    state.error = action.payload
    },
  logOut: (state)=>{
    state.userId = null
    
    },
  
  }
})

export const authReducer = authSlice.reducer
export const  {loginSuccess,loginFaild,logOut} = authSlice.actions