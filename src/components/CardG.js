import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

export default function CardG(props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.game}
        source={{ uri: props.game.capa }}
        resizeMode="cover"
      />
      <Text style={{ color: "darkred" }}> {props.game.titulo} </Text>
      <Text style={{ fontSize: 12 }}> R$ {props.game.preco}</Text>
      <TouchableOpacity onPress={props.deletarGame} style={styles.botao}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "red",
    width: "45%",
    height: 250,
    borderRadius: 10,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  game: {
    resizeMode: "stretch",
    width: "100%",
    height: 180,
  },
});
