import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CardG from "./src/components/CardG";

export default function App() {
  const [games, setGames] = React.useState([
    {
      id: 1,
      capa: "https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png",
      titulo: "Minecraft",
      preco: "38,90",
    },

    {
      id: 2,
      capa: "http://i.imgur.com/NuLQZnh.jpg",
      titulo: "Saints Row 4",
      preco: "78,90",
    },

    {
      id: 3,
      capa: "https://cdn.awsli.com.br/600x1000/2444/2444668/produto/203454398/residente-capa-ps4-kkbdsg.jpg",
      titulo: "Resident Evil 4 Remake",
      preco: "359,60",
    },

    {
      id: 4,
      capa: "http://4.bp.blogspot.com/_9jL9kkWidac/TT17G9zzUmI/AAAAAAAAAng/ald-HGDaNqQ/w1200-h630-p-k-no-nu/mk9+-+1.jpg",
      titulo: "Mortal Kombat 9",
      preco: "126,85",
    },

    {
      id: 5,
      capa: "https://i.pinimg.com/236x/c3/93/94/c3939405ff5e8892822b7f6b218b4a63--pc-game-videogames.jpg",
      titulo: "Watch Dogs",
      preco: "126,85",
    },
  ]);

  const deletarGame = (id) => {
    const index = games.findIndex((game) => game.id === id);
    const novaLista = [...games];
    novaLista.splice(index, 1);
    setGames(novaLista);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>The Best Games!!</Text>
      <View style={styles.conteudo}>
        
        {games.map((game) => (
          <CardG game={game} key={game.id} deletarGame={() => deletarGame(game.id)} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "darkred",
  },

  conteudo: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
