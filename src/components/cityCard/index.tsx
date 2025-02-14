import React from 'react'
import { View, Text, Image, ImageProps, TouchableOpacity } from 'react-native'

interface CityCardProps {
    name: string;
    image: string;
    description?: string;
    clickEvent: () => void;
}
const CityCard = ({name, image, clickEvent, description}: CityCardProps) => {
  return (
    <TouchableOpacity onPress={clickEvent}>
    <View>
      <Text>{name}</Text>
      <Image source={image as ImageProps}></Image>
      <Text>{description && description}</Text>
    </View>
    </TouchableOpacity>

  )
}

export default CityCard;
