import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from "react-native";

import { getProduto } from '../service/ProdutoService';
import Card from "../components/card_descricao";

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
        }} /> 
    </Stack.Navigator>
  )
}
function HomeScreen(props, {navigation}){
  
  const [produto, setProduto] = useState({});
  
  useEffect(() => {
    async function loadContent() {
      const produto = await getProduto(props.idProduto);
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
          name="Informações">
          {() => <HomeScreen idProduto={props.route.params.idProduto} />}
        </Tab.Screen>
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='reader-outline' size={size} color={color} />
          }}
          name="Comentários"
          component={Comentarios} />
      </Tab.Navigator>
  );
 
}