import React  from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

  export default function CardComentario(props) {

    criaestrelas = () => {
      let stars = [];
      let nstars = props.estrelas;
  
      for (let i = 0; i < nstars ; i++) 
  
      { stars.push(<Ionicons name='star-outline'/>)}
      return stars;
    }
   
    {
  
      return (
  
        <View style={styles.container2} >
          <Image style={styles.imagem} source={{uri: props.foto}}></Image>
            <View style={styles.container3}>
              <Text style={styles.titulo1} >{props.nomepessoa}</Text>
              <Text style={styles.texto_normal} >{props.comentario}</Text>
              <Text style={styles.titulo1} >Estrelas: {criaestrelas()}
              </Text>
            </View>
        </View> 
      )
    }
  }


const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    marginVertical: 10,
    marginHorizontal: 30,
    alignItems: 'center',
    padding: 10,
  },
  container3: {
    flex: 1,
    backgroundColor: 'pink',
    marginBottom: 5,
    borderWidth: 10,
    borderColor: 'pink',
  },
  texto_normal: {
    fontSize: 14 ,
    color: '#444',
    textAlign: 'justify',
  },
  titulo1: {
    fontSize: 14 ,
    fontWeight: 'bold',
  },
  imagem:{
    marginRight: 10,
    justifyContent: 'center',
    width: 80,
    height: 80,

  },
});