import React from 'react'
import { StyleSheet, View } from 'react-native';

interface PropsHero {
    title: string;
    subtitle: string;
}
const Hero = ({ title, subtitle }: PropsHero) => {
    return (
        <View>
            <p style={styles.title}>{title}</p>
            {subtitle}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold"
    }

})

export default Hero
