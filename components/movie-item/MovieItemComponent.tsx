import React, {useState} from 'react';
import {FlatList, Image, View, TouchableOpacity, ImageBackground} from "react-native";
import {MovieItem} from "@/app/types/MovieItem";
import {AppConfig} from "@/constants/AppConfig";
import styles from "@/components/movie-item/MovieItemStyle";
interface MovieItemProps {
    movies: Array<MovieItem>;
    onPress: (item: MovieItem) => void;
    loadMoreData: () => void
}

const MovieItemComponent = (props: MovieItemProps) => {
    const {movies, onPress, loadMoreData} = props;
    const [isLoading, setIsLoading] = useState(true)
    const movieItem = ({item}: { item: MovieItem }) => {
        return (<TouchableOpacity style={styles.movieItemContainer} onPress={() => onPress(item)}>
            <ImageBackground
                imageStyle={{borderRadius: 18}}
                source={isLoading ? require('../../assets/images/placeholder.jpeg') : {uri: `${AppConfig.IMAGE_URL}${item.poster_path}`}}
            >
                <Image
                    style={styles.imageView}
                    source={{
                        uri: `${AppConfig.IMAGE_URL}${item.poster_path}`,
                    }}
                    onLoadEnd={() => {
                        setIsLoading(false)
                    }}
                />
            </ImageBackground>
        </TouchableOpacity>)
    };

    return (<View style={styles.mainView}>
        <FlatList
            style={styles.flatListContainer}
            data={movies}
            renderItem={movieItem}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreData}
        />
    </View>);
}

export default MovieItemComponent