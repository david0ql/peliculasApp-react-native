import 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Navigation } from './src/navigation/Navigation';
const App = () => {
  return (
    <NavigationContainer>
      <Navigation/> 
    </NavigationContainer>
  )
}

export default App;