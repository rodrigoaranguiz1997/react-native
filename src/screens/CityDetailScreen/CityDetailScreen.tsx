import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const CityDetailScreen = () => {
    const url = useLocalSearchParams()
    
  return (
    <View>
      {url.name}
    </View>
  )
}

export default CityDetailScreen
