import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { transormResponseDrinks } from '../../types/typeContext';

export const dataApi = createApi({
    reducerPath: "coctails",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/' }),
    endpoints: (builder) => ({
      getAllCoctail: builder.query({
        query: () => 'filter.php?c=Cocktail',
      }),
      getElement: builder.query({
        query: (id) => `lookup.php?i=${id}`
      }),
      getSearch: builder.query({
        query:(search) => `search.php?s=${search}`,
        transformResponse: (response: transormResponseDrinks) => response.drinks
      }),
    }),
});
export const {useGetAllCoctailQuery} = dataApi;
export const {useGetElementQuery} = dataApi;
export const {useGetSearchQuery} = dataApi;
export default dataApi.reducer

