import React from 'react';
import {Text, View} from 'react-native';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import {CastItem} from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
        <Text>Vote: </Text>
        <Text>{movieFull.vote_average} </Text>
        <Text>- {movieFull.genres.map(g => g.name).join(', ')}</Text>
      </View>
      {/* Historia pelicula */}
      <View style={{marginHorizontal: 20, marginTop: 10}}>
        <Text>{movieFull.overview}</Text>
      </View>
      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginHorizontal: 20}}>Actores</Text>
        <FlatList
        data={ cast }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <CastItem actor={ item } />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10}}
        />

        
      </View>
    </>
  );
};
