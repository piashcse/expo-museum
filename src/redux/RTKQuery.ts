import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieItem } from '@/src/types/MovieItem';
import { MovieResult } from '@/src/types/MovieResult';
import { AppConfig } from '@/src/constants/AppConfig';
import { useAppStore } from '@/src/zustand/useAppStore';
import axiosBaseQuery from '@/src/redux/BaseQuery';

export const expoMuseumApi = createApi({
  reducerPath: 'nowPlayingMovieApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getNowPlayingMovie: builder.query<MovieItem[], number>({
      query: (page) => ({
        url: `movie/now_playing?api_key=${AppConfig.API_KEY}&language=en-US?page=${page}`,
        method: 'GET',
      }),
      transformResponse: (response: MovieResult) => response.results,
    }),
    postRefreshToken: builder.mutation<string, void>({
      query: () => ({
        url: 'auth/refreshToken',
        method: 'POST',
        headers: {
          // Pass the refreshToken in the header while calling refresh token api
          Authorization: `Bearer ${useAppStore().token}`,
        },
      }),
      transformResponse: (response: string) => response,
    }),
  }),
});

export const { useGetNowPlayingMovieQuery } = expoMuseumApi;
