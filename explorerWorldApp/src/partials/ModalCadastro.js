import {
  View,
  Modal,
  TextInput,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native"; //importação dos componentes do react-native

import styles from "../styles/Stylesheet"; //importação do Styles

export default function ModalCadastro() {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={{ backgroundColor: "#F0EDE9", flex: 1 }}>
          <ScrollView>
            <View
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                backgroundColor: "#F0EDE9",
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ alignItems: "center" }}>
                  <View style={{ marginBottom: 40 }}>
                    <TextInput
                      style={{
                        padding: 10,
                        borderRadius: 5,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#2F2C79",
                        backgroundColor: "#2F2C7900",
                        color: "#2F2C79",
                        fontFamily: "Prompt",
                      }}
                    />
                    <View style={{ backgroundColor: "#F0EDE9" }}>
                      <Text
                        style={{
                          position: "absolute",
                          backgroundColor: "#F0EDE9",
                          marginTop: -60,
                          marginLeft: 10,
                          paddingRight: 10,
                          paddingLeft: 10,
                          color: "#2F2C79",
                          fontFamily: "Prompt",
                        }}
                      >
                        NOME COMPLETO
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginBottom: 40 }}>
                    <TextInput
                      style={{
                        padding: 10,
                        borderRadius: 5,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#2F2C79",
                        backgroundColor: "#2F2C7900",
                        color: "#2F2C79",
                        fontFamily: "Prompt",
                      }}
                      keyboardType="numeric"
                    />
                    <View style={{ backgroundColor: "#F0EDE9" }}>
                      <Text
                        style={{
                          position: "absolute",
                          backgroundColor: "#F0EDE9",
                          marginTop: -60,
                          marginLeft: 10,
                          paddingRight: 10,
                          paddingLeft: 10,
                          color: "#2F2C79",
                          fontFamily: "Prompt",
                        }}
                      >
                        CPF
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginBottom: 40 }}>
                    <TextInput style={styles.formInput} keyboardType="email" />
                    <View style={{ backgroundColor: "#F0EDE9" }}>
                      <Text
                        style={{
                          position: "absolute",
                          backgroundColor: "#F0EDE9",
                          marginTop: -60,
                          marginLeft: 10,
                          paddingRight: 10,
                          paddingLeft: 10,
                          color: "#2F2C79",
                          fontFamily: "Prompt",
                        }}
                      >
                        E-MAIL
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginBottom: 40 }}>
                    <TextInput
                      style={{
                        padding: 10,
                        borderRadius: 5,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#2F2C79",
                        backgroundColor: "#2F2C7900",
                        color: "#2F2C79",
                        fontFamily: "Prompt",
                      }}
                      keyboardType="password"
                    />
                    <View style={{ backgroundColor: "#F0EDE9" }}>
                      <Text
                        style={{
                          position: "absolute",
                          backgroundColor: "#F0EDE9",
                          marginTop: -60,
                          marginLeft: 10,
                          paddingRight: 10,
                          paddingLeft: 10,
                          color: "#2F2C79",
                          fontFamily: "Prompt",
                        }}
                      >
                        SENHA
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginBottom: 40 }}>
                    <TextInput
                      style={{
                        padding: 10,
                        borderRadius: 5,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#2F2C79",
                        backgroundColor: "#2F2C7900",
                        color: "#2F2C79",
                        fontFamily: "Prompt",
                      }}
                      keyboardType="password"
                    />
                    <View style={{ backgroundColor: "#F0EDE9" }}>
                      <Text
                        style={{
                          position: "absolute",
                          backgroundColor: "#F0EDE9",
                          marginTop: -60,
                          marginLeft: 10,
                          paddingRight: 10,
                          paddingLeft: 10,
                          color: "#2F2C79",
                          fontFamily: "Prompt",
                        }}
                      >
                        CONFIRMAR SENHA
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginBottom: 40 }}>
                    <TouchableOpacity
                      style={{ backgroundColor: "#2F2C79", marginRight: 10 }}
                    >
                      <Text style={{ color: "#F5E2CF" }}>Cadastrar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
