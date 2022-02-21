
// import { createStore, combineReducers } from 'redux';
import { TeamReducer, usersSlice } from './AllReducer/TeamReducer';

// const combinedReducer=combineReducers({
//     teams:TeamReducer
// })
// export const store=createStore(
    
//    combinedReducer
// )

// .....
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { pokemonApi } from './AllApi/MyGetApi';
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    teams:TeamReducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)