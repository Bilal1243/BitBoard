import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bitboard-backend.onrender.com' }),
    tagTypes: [],
    endpoints: () => ({})
})
