import React, { useState } from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { MovieItem } from '@/src/types/MovieItem';
import { AppConfig } from '@/src/constants/AppConfig';
import styles from '@/src/components/movie-item/MovieItemStyle';
import placeholder from '../../assets/images/placeholder.jpeg';
interface MovieItemProps {
  movies: Array<MovieItem>;
  onPress: (item: MovieItem) => void;
}

const MovieItemComponent = (props: MovieItemProps) => {
  const { movies, onPress } = props;
  const [isLoading, setIsLoading] = useState(true);
  const movieItem = ({ item }: { item: MovieItem }) => {
    return (
      <TouchableOpacity
        style={styles.movieItemContainer}
        onPress={() => onPress(item)}
      >
        <ImageBackground
          imageStyle={{ borderRadius: 18 }}
          source={
            isLoading
              ? placeholder
              : { uri: `${AppConfig.IMAGE_URL}${item.poster_path}` }
          }
        >
          <Image
            style={styles.imageView}
            source={{
              uri: `${AppConfig.IMAGE_URL}${item.poster_path}`,
            }}
            onLoadEnd={() => {
              setIsLoading(false);
            }}
          />
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        style={styles.flatListContainer}
        data={movies}
        renderItem={movieItem}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default MovieItemComponent;
