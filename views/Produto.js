import React, { useEffect, useState } from "react";
import {  useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, FlatList, View, Alert } from "react-native";
import { AdMobBanner } from 'expo-ads-admob';

import { getComentarios , getProduto, postComentario } from '../service/ProdutoService';
import Card from "../components/card_descricao";
import CardComentario from "../components/card_comentarios";
import CadastrarComentarios from './Cadastrar_comentarios';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function BaseScreen(props) {
  const navigation = useNavigation();
  return(
    <Stack.Navigator>
      <Stack.Screen name={props.name} children={() => props.children} options={{
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerRightContainerStyle: { paddingRight: 20 },
          headerLeft: () => <Ionicons
          name= "arrow-back-outline"
            size={25}
            color="#000"
            onPress={() => navigation.navigate("bichos")} //verificar pq não está voltando...
          />,
            headerRightContainerStyle: { paddingRight: 20 },
            headerRight: () => <Ionicons
            name= "add-outline"
              size={25}
              color="#000"
              onPress={() => navigation.navigate('cadastrar_comentarios',{idProduto: props.idProduto}, )} //verificar pq não está voltando...
            />,       
        }} 

        /> 
        <Stack.Screen 
           name="cadastrar_comentarios" 
           component={ CadastrarComentarios}
            initialParams={{ idProduto: props.idProduto  }}     
           options={{ title: 'Cadastrar Comentários',
 /*          headerRightContainerStyle: { paddingRight: 20 },
           headerRight: () => <Ionicons
           name= "checkmark-outline"
             size={25}
             color="#000"
             onPress={() => { console.log("OnPress", props.idProduto); navigation.navigate({'cadastrar_comentarios'},{idProduto: props.idProduto}, )}} //verificar pq não está voltando...
           />,*/
            }}
           />
    </Stack.Navigator>
  )
}

function HomeScreen(props, { navigation }){

  const [produto, setProduto] = useState({});
  
  useEffect(() => {
    async function loadContent() {
      const produto = await getProduto(props.idProduto);
      setProduto(produto);
    }
    loadContent();
  });

    return <BaseScreen
     idProduto = {props.idProduto}
      navigation = {navigation}
      name ={"Bicho Selecionado"}
      >
        <View>
          { produto.id && 
          <Card
            id={produto.id}
            nome={produto.nome}
            descricao={produto.descricao}
            img={produto.img}
            botao={produto.botao}
            preco={produto.preco}
            hideButton
          />
          }
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError} />
        </View>
    </BaseScreen>
}

function Comentarios(props, { navigation }){
  const [comentarios, setComentario] = useState([]);

  useEffect(() => {
    async function loadContent() {
      const comentarios = await getComentarios(props.idProduto, props.idComentario);
      setComentario(comentarios);
    }
    loadContent();
  });

    var desenhandoItens = ({ item  }) => {
      return  <CardComentario
      idComentario ={item.idComentario}
      idProduto ={item.id}
      nomepessoa ={item.nomepessoa}
      comentario ={item.comentario}
      foto = {item.foto}
      estrelas={item.estrelas}
    />;
    }
    return <BaseScreen
      idProduto = {props.idProduto}
      navigation = {navigation}
      name ={"Comentários"}
      >
     <View style={styles.container1}>
        <FlatList 
          data= {comentarios}
          renderItem= {desenhandoItens}
          keyExtractor={(item) => item.idComentario}
        />
    </View> 
        
    </BaseScreen>
    
}

export default function Produto(props) {
  
  return (

      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='information-circle-outline' size={size} color={color} />
          }}
          name="Informações">
            
          {() => <HomeScreen idProduto={props.route.params.idProduto}/>}
        </Tab.Screen>
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='reader-outline' size={size} color={color} />
          }}
          name="Comentários">
          {() => <Comentarios idProduto={props.route.params.idProduto}/>} 
          </Tab.Screen>
      </Tab.Navigator>
    
  );
 
}

const styles = StyleSheet.create({
 
  container1: {
    flex: 1,
    paddingTop: 20,
  },
 
});
 