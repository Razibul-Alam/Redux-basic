
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// First, create the thunk
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    return response.data
  }
)

// Then, handle actions in your reducers:
export const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.users=action.payload
    })
  },
})

// Later, dispatch the thunk as needed in the app


const initialState=[]
export const TeamReducer=(state=initialState,action)=>{
if(action.type=='addMember'){
    console.log('something')
    console.log(action.payload)
    const newState=[...state,action.payload]
    return newState
}
if(action.type==='removeMember'){
    console.log(action.payload)
    const newState=state.filter(text=>text!==action.payload)
    console.log(newState)
    return newState
}
return state
}

