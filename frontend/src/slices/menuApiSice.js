import { apiSlice } from "./apiSlice";

const menuApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMenu: builder.mutation({
      query: (data) => ({
        url: "/api/menu",
        method: "POST",
        body: data,
      }),
    }),
    getAllMenu: builder.query({
      query: () => ({
        url: "/api/menu",
      }),
    }),
  }),
});

export const { useCreateMenuMutation , useGetAllMenuQuery } = menuApiSlice;
