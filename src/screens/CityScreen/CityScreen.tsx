import CityCard from '@/components/cityCard';
import React from 'react'
import { View, Text, FlatList } from "react-native";
import {router} from "expo-router"

const CityScreen = () => {
    const onPress = (name: string) => {
        alert("Redireccion a ruta dinamica");
        //window.location.href = "/cityDetail?name="+name;
        router.push( "/cityDetail?name="+name);
    }
    const data = [{ name: "ciudad", image: "https://testimage.com/city" }];
    return (
        <View><Text>Bienvenido</Text>
            <FlatList renderItem={(item) => <CityCard clickEvent={() => onPress(item.item.name)} name={item.item.name} image={item.item.image}></CityCard>} data={data}></FlatList>
        </View>
    )
}

export default CityScreen
