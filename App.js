import React from "react";
 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Produtos from './views/Produtos';
import Produto from "./views/Produto";
import CadastrarComentarios from './views/Cadastrar_comentarios';

 
const Stack = createStackNavigator();
 
export default function App(props) {
  console.log('App: ', props)
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="bichos" 
            component={Produtos}  
            options ={{ 
            title: 'Bichinhos',}
            }/>
        <Stack.Screen 
            name="bicho"  
            component={Produto}
            options={{ title: 'Bicho selecionado' }, {headerShown: false}}  />
         <Stack.Screen 
           name="cadastrar_comentarios" 
           component={CadastrarComentarios}
           {...props}
           initialParams={{ idProduto: props.id  }}
           options={{ title: 'Cadastrar Comentários' }}
           />
         </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}