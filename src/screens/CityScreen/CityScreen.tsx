import CityCard from '@/components/cityCard';
import React from 'react'
import { View, Text, FlatList, TextInput } from "react-native";
import {router} from "expo-router"
import useCities from '@/hooks/useCities';

const CityScreen = () => {
    const {data, setData} = useCities();
    const onPress = (name: string) => {
        alert("Redireccion a ruta dinamica");
        router.push( "/cityDetail?name="+name);
    }
    return (
        <View><Text>Bienvenido</Text>
            <TextInput placeholder='Buscador' onChangeText={(text: string) => {
                const newData = data.filter((item) => {
                    item.name.includes(text);
                })
                setData(newData);
            }}></TextInput>
            <FlatList data={data} renderItem={(item) => <CityCard clickEvent={() => onPress(item.item.name)} name={item.item.name} image={item.item.image}></CityCard>}></FlatList>
        </View>
    )
}

export default CityScreen
