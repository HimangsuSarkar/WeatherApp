import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

const  WEATHER_API_KEY ='a5d943ebd115e365117562df62a57f98';

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    load()
}, [])

async function load(){
  try{
    let { status } = await Location.requestPermissionsAsync()

    if (status !== 'granted') {
      setErrorMessage('Access to location is needed to run the app')
      return
  }
  const location = await Location.getCurrentPositionAsync()
  const { latitude, longitude } = location.coords
  const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`

 


  }catch(error){}
}


  return (
    <View style={styles.container}>
      <Text>Hello Weather App! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
