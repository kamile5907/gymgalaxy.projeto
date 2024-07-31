import { Image, ImageBackground, Text, View } from "react-native";
import styles from "../styles/Stylesheet";

export default function Inicio() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgGalaxy}
        resizeMode="cover"
        source={require("../images/Home.jpg")}
      >
        <View style={{ alignItems: "flex-start", width: "80%", height: "80%" }}>
          <View style={{ height: "30%", width: "100%" }}>
            <Text style={styles.texto}>Exploring </Text>
            <Text style={styles.texto2}>World</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
