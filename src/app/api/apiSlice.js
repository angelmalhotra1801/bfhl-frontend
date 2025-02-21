import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bfhl-api-5ml8.onrender.com",
  }),
  endpoints: (builder) => ({
    postData: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),
    getOperationCode: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { usePostDataMutation, useGetOperationCodeQuery } = apiSlice;
