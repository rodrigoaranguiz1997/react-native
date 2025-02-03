import React from 'react'
import { StyleSheet } from 'react-native';

interface PropsHero {
    title: string;
    subtitle: string;
}
const Hero = ({ title, subtitle }: PropsHero) => {
    return (
        <div>
            <p style={styles.title}>{title}</p>
            {subtitle}
        </div>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold"
    }

})

export default Hero
