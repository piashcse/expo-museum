import { useGetNowPlayingMovieQuery } from '@/src/redux/RTKQuery';
import Loading from '@/src/components/loading/Loading';
import MovieItemComponent from '@/src/components/movie-item/MovieItemComponent';

export default function RTKQueryLayout() {
  const { data = [], isLoading } = useGetNowPlayingMovieQuery(1);

  if (isLoading) return <Loading />;

  return <MovieItemComponent movies={data} onPress={() => {}} />;
}
