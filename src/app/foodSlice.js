import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodSlice = createApi({
  reducerPath: "food",
  baseQuery: fetchBaseQuery({ baseUrl: "https://zoo-api-nhvk.onrender.com/" }),
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
