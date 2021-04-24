import React, {useState} from "react";
import { View, TextInput, Text, StyleSheet, Button, Alert} from 'react-native';

import { postComentario } from '../service/ProdutoService';
 

export default function Cadastro(props){

idProduto = props.route.params.idProduto;
const idproduto = idProduto;
//console.log('Cadastrar comentarios: ', props)

const [comentario, setComentario] = useState(''); 
const [estrelas, setEstrelas] = useState(''); 

  return (
      
                        <View>
                           <Text style={styles.text_input}>Digite seu comentário:</Text>
                            <TextInput style={styles.input}
                                onChangeText={setComentario}
                                value={comentario}
                                multiline/>
                            <Text style={styles.text_input}>Quantas estrelas de 1 a 5:</Text>
                            <TextInput style={styles.input1}
                                onChangeText={setEstrelas}
                                value={estrelas}
                                />
                        <View style={{flexWrap: "nowrap", alignItems: 'center', marginTop: 20}}>
                        <Button   
                            title = 'Cadastrar'
                            onPress={() => {
                                if (comentario && estrelas != "") {
                                    postComentario({
                                        comentario: comentario,
                                        estrelas: estrelas,
                                        foto: 'https://i.pinimg.com/564x/53/55/55/5355558c7f21338f5f6174f3e2456935.jpg',
                                        nomepessoa: 'Fulanx',
                                        idProduto: idproduto,
                                    }, idProduto),
                                    Alert.alert('Comentário incluso com sucesso.')
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
        height: 100,
        backgroundColor: "white",
        textAlign: "justify",
        textAlignVertical: "top",
    },
    input1:{
        borderColor: "gray",
        borderWidth: 1,
        margin: 5,
        marginHorizontal: 30,
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