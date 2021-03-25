import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import CardComentario from '../components/card_comentarios';
import { getComentarios } from '../service/ProdutoService'; 

export default function Comentarios(props) {

  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    async function loadContent() {
      const comentarios = await getComentarios(idProduto);
      setComentarios(comentarios);
    }
    loadContent();
  });

  var desenhandoComentarios = ({ item  }) => {
    return <CardComentario
    {... props}
    idComentario={item.id}
    nome={item.nome}
    estrelas={item.estrelas}
    foto= {item.foto}
    comentario = {item.comentario}
    />;
  }

  return (
     <View style={styles.container1}>
      <StatusBar style="auto" />
      <FlatList 
        data= {comentarios}
        renderItem= {desenhandoComentarios}
        keyExtractor={(item) => item.id}
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingTop: 20,
  },
 
});