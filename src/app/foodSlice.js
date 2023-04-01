import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodSlice = createApi({
  reducerPath: "food",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  endpoints: (builder) => ({
    getFood: builder.query({
      query: () => "food",
    }),
    postFood: builder.mutation({
      query: (data) => ({
        url: "food/add",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetFoodQuery, usePostFoodMutation } = foodSlice;
