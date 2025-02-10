import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const CityDetailScreen = () => {
    const url = useLocalSearchParams()
    
  return (
    <div>
      {url.name}
    </div>
  )
}

export default CityDetailScreen
