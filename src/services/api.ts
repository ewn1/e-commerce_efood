import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Restaurante = any

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes',
    }),

    purchase: builder.mutation<any, any>({
      query: (payload) => ({
        url: 'checkout',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
})

export const { useGetRestaurantsQuery, usePurchaseMutation } = api

export default api
