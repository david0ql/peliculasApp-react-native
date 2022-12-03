import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <View style={{marginBottom: bottom}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginLeft: 10,
          marginBottom: 5,
        }}>
        {title}
      </Text>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
