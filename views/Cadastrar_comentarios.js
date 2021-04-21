import React, {useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Text, StyleSheet, Button, Alert} from 'react-native';

import { postComentario } from '../service/ProdutoService';
 

export default function Cadastro(props){
    
const [comentario, setComentario] = useState(''); 
const idproduto =  props.idProduto ; 
console.log('Cadastrar produto: ', props)
navigation = useNavigation();
  return (
      
                        <View>
                            <Text style={styles.text_input}>{idproduto}</Text>
                            <Text style={styles.text_input}>Digite seu comentário:</Text>
                            <TextInput style={styles.input}
                                onChangeText={setComentario}
                                value={comentario}
                                multiline/>
                        <View style={{flexWrap: "nowrap", alignItems: 'center', marginTop: 20}}>
                        <Button   
                            title = 'Cadastrar'
                            onPress={() => {
                                if (comentario != "") {
                                    postComentario({
                                        comentario: comentario,
                                        estrelas: '3',
                                        foto: 'https://image.flaticon.com/icons/png/512/16/16410.png',
                                        nomepessoa: 'Fulanx',
                                        idProduto: idproduto,
                                    }),
                                    Alert.alert('Comentário incluso com sucesso.')
                                   // navigation.goBack();
                                } else{
                                    Alert.alert('Todos os campos são obrigatórios.')
                                }
                                
                            }} 
                            color ='#c0c0c0'
                            icon
                        />
                        </View>
                        </View>

  );
}

const styles = StyleSheet.create({

    input:{
        borderColor: "gray",
        borderWidth: 1,
        margin: 5,
        marginHorizontal: 30,
        height: 200,
        backgroundColor: "white",
        textAlign: "justify",
        textAlignVertical: "top",
    },
    text_input:{
        fontSize: 14,
        marginLeft: 30,
        marginTop: 10,
    },

});