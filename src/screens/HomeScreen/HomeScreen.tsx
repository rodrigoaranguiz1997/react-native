import CarouselHome, { DataProps } from "@/core/components/carousel";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  const data: DataProps[]  = [{
    url:  "./assets/image/image1.png",
    name: "City 1",
  },
  {
    url:  "./assets/image/image2.png",
    name: "City 2"
  },
  {
    url:  "./assets/image/image3.png",
    name: "City 3",
  },
]
  return (
    <ScreenWrapper>
      <View style={{ flex: 1 }}>
            <Text>Home Screen</Text>
            <CarouselHome data={data}></CarouselHome>
        </View>

    </ScreenWrapper>
  );
}
