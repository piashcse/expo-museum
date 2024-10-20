import { View } from '@/src/components/Themed';
import { useGetNowPlayingMovieQuery } from '@/src/redux/RTKQuery';
import Loading from '@/src/components/loading/Loading';
import MovieItemComponent from '@/src/components/movie-item/MovieItemComponent';
import styles from '@/src/components/movie-item/MovieItemStyle';

export default function RTKQueryLayout() {
  const { data = [], isLoading } = useGetNowPlayingMovieQuery(1);

  if (isLoading) return <Loading />;

  return (
    <View style={styles.mainView}>
      <MovieItemComponent movies={data} onPress={() => {}} />
    </View>
  );
}
