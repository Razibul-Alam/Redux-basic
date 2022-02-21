import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
        
      query: () => ({
url:'users'
      })

    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetPokemonQuery} = pokemonApi