import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import {nowPlayingMovieApi} from "@/app/redux/RTKQuery";

const configurationAppStore = () => {
    const store = configureStore({
        reducer: {
            [nowPlayingMovieApi.reducerPath]: nowPlayingMovieApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
            nowPlayingMovieApi.middleware,
        ]),
        devTools: process.env.NODE_ENV === 'development'
    })
    setupListeners(store.dispatch)
    return store
}
export default configurationAppStore


