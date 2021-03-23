import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from "react-native";

import { getProduto } from '../service/ProdutoService';
import Card from "../components/card_descricao";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BaseScreen(props) {
  return(
    <Stack.Navigator>
      <Stack.Screen name={props.name} children={() => props.children} options={{
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerRightContainerStyle: { paddingRight: 20 },
          headerLeft: () => <Ionicons
          name= "arrow-back-outline"
            size={25}
            color="#000"
            onPress={() => props.navigation.navigate('bichos')}
          />,
        }} /> 
    </Stack.Navigator>
  )
}
function HomeScreen({ navigation }){
  
  const [produto, setProduto] = useState({});
  
  useEffect(() => {
    async function loadContent() {
      const produto = await getProduto(props.route.params.idProduto);
      setProduto(produto);
    }
    loadContent();
  });

    return <BaseScreen
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
        </View>
    </BaseScreen>
}

function Comentarios({ navigation }){
  
  const [produto, setProduto] = useState({});
  
  useEffect(() => {
    async function loadContent() {
      const produto = await getProduto(props.route.params.idProduto);
      setProduto(produto);
    }
    loadContent();
  });

    return <BaseScreen
      navigation = {navigation}
      name ={"Comentários"}
      >
        <View>
          <Text>Testando</Text>
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
          name="Informações"
          initialParams={{ idProduto: props.route.params.idProduto }}
          component={HomeScreen}
           />
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='reader-outline' size={size} color={color} />
          }}
          name="Comentários"
          component={Comentarios} />
      </Tab.Navigator>
  );
 
}