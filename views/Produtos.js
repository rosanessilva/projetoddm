import { StatusBar } from 'expo-status-bar';
import { AdMobBanner } from 'expo-ads-admob';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import Card from '../components/cards';
import { getProdutos } from '../service/ProdutoService'; 

export default function Produtos(props) {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function loadContent() {
      const produtos = await getProdutos();
      setProdutos(produtos);
    }
    loadContent();
  });

  var desenhandoItens = ({ item  }) => {
    return <Card  
    {... props}
    id={item.id}
    nome={item.nome}
    preco={item.preco}
    img= {item.img}
    botao= {item.botao}
    descricao={item.descricao}
    />;
  }

  return (
     <View style={styles.container1}>
      <StatusBar style="auto" />
      <FlatList 
        data= {produtos}
        renderItem= {desenhandoItens}
        keyExtractor={(item) => item.id}
      />
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={this.bannerError} />
    </View> 
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingTop: 15,
    marginHorizontal: 30,
  },
 
});
