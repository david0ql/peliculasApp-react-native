import {NavigationContainerProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({route}: Props) => {
  const {top} = useSafeAreaInsets();

  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);
  return (
    <ScrollView>
      <View style={[styles.imageContainer, {marginTop: top}]}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
        <Text>Fecha lanzamiento: {movie.release_date}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={30} color="grey" style={{marginTop: 10}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast}/>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
