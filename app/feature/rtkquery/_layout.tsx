import {View} from '@/components/Themed';
import {useEffect, useState} from "react";
import {useGetNowPlayingMovieQuery} from "@/app/redux/RTKQuery";
import Loading from "@/components/loading/Loading";
import MovieItemComponent from '@/components/movie-item/MovieItemComponent';
import {MovieItem} from "@/app/types/MovieItem";
import styles from "@/components/movie-item/MovieItemStyle";

export default function RTKQueryLayout() {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState<Array<MovieItem>>([]);
    const {data, error, isLoading, isFetching} = useGetNowPlayingMovieQuery(page)
    useEffect(() => {
        if (data && page > 1) {
            setMovies((prevMovies) => [...prevMovies, ...data]);
        } else {
            setMovies(data ?? []);
        }
    }, [page, data?.length]);

    if (isLoading) return <Loading/>;

    return (<View style={styles.mainView}>
        <MovieItemComponent
            movies={movies}
            onPress={() => {}}
            loadMoreData={()=>{}}/>
    </View>);
}
