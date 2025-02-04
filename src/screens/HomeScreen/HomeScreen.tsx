import CarouselHome, { DataProps } from "@/components/carousel";
import Hero from "@/components/hero";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  const data: DataProps[]  = [{
    url:  "./assets/image/image1.jpg",
    name: "City 1",
  },
  {
    url:  "./assets/image/image2.jpg",
    name: "City 2"
  },
  {
    url:  "./assets/image/image3.jpg",
    name: "City 3",
  },
]
  return (
    <ScreenWrapper>
      <View style={{ flex: 1 }}>
            <Text>Home Screen</Text>
            <Hero title="Ciudades" subtitle="Ciudades del mundo"></Hero>
            <CarouselHome data={data}></CarouselHome>
        </View>

    </ScreenWrapper>
  );
}
