import React from 'react'
import { View, Text, Image, ImageProps, TouchableOpacity } from 'react-native'

interface CityCardProps {
    name: string;
    image: string;
    clickEvent: () => void;
}
const CityCard = ({name, image, clickEvent}: CityCardProps) => {
  return (
    <TouchableOpacity onPress={clickEvent}>
    <View>
      <Text>{name}</Text>
      <Image source={image as ImageProps}></Image>
    </View>
    </TouchableOpacity>

  )
}

export default CityCard;
