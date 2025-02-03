import React from 'react'
import { View, Text, Dimensions, Image, ImageProps } from 'react-native'
import Carousel from "react-native-reanimated-carousel";

export interface DataProps {
    url: string;
    name: string;
}
interface CarouselProps {
    data: DataProps[]
}
const CarouselHome = ({data}: CarouselProps) => {
    const width = Dimensions.get("screen").width;
    return (
        <div>
            <View style={{ flex: 1 }}>
                <Carousel
                    loop
                    width={width}
                    height={width / 2}
                    autoPlay={true}
                    data={data}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ index, item }) => (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: 'center',
                            }}
                        >
                            <Image source={item.url as ImageProps}></Image>
                            <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                {item.name}
                            </Text>
                        </View>
                    )}
                />
            </View>

        </div>
    )
}

export default CarouselHome
