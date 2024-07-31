import { Image, ImageBackground, Text, View } from "react-native";
import styles from "../styles/Stylesheet";

export default function Home() {
  const imageGalaxy = {
    uri: "https://i.pinimg.com/564x/99/19/d7/9919d7ca481aa442d5abeee3596a68da.jpg",
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgGalaxy}
        resizeMode="cover"
        source={imageGalaxy}
      >
        <View style={styles.testeIcone}>
          <Image
            style={styles.imgLogo}
            resizeMode="cover"
            source={require("../assets/OIP-removebg-preview.png")}
          />
        </View>
        <Text style={styles.testeTitulo}>GymGalaxy</Text>
      </ImageBackground>
    </View>
  );
}
