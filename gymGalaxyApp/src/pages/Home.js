import {  Image, ImageBackground, Text, View } from 'react-native';
import styles from '../styles/Stylesheet';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.testeIcone}>
            <ImageBackground>
                <Image />
            </ImageBackground>
        </View>
      <Text style={styles.testeTitulo}>GymGalaxy</Text>
    </View>
  );
}

