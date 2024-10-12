import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {MovieItem} from "@/src/types/MovieItem";
import {MovieResult} from "@/src/types/MovieResult";
import {AppConfig} from "@/src/constants/AppConfig";

export const nowPlayingMovieApi = createApi({
    reducerPath: 'nowPlayingMovieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        getNowPlayingMovie: builder.query<MovieItem[], number>({
            query: (page) => `movie/now_playing?api_key=${AppConfig.API_KEY}&language=en-US?page=${page}`,
            transformResponse: (response: MovieResult) => response.results
        }),
    }),
})

export const { useGetNowPlayingMovieQuery } = nowPlayingMovieApi;
