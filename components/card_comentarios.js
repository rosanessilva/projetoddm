import React  from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

/*const [stars, setStars] = useState(0);
const [maxstars, setMaxstars] = useState([1,2,3,4,5]);
const imgstar = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
const Estrela =(props)=>{
  return(
    <View>
      {maxstars.map((props.estrelas, key)=>{
        return(
          <Ionicons name='star-outline' 
          key={item}
          onPress={()=> setStars(props.estrelas)}>
            <Image> source={
              props.estrelas<= stars
              ? {uri: imgstar}
              : {uri: imgstar}
              } </Image>
          </Ionicons>
        );
      });
      }
    </View>
  );
}
*/
 
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
    marginHorizontal: 20,
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