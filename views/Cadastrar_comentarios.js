import React, {useState} from "react";
import { View, TextInput, Text, StyleSheet, Button, Alert, TouchableOpacity, Image} from 'react-native';
//import { TouchableOpacity } from "react-native-gesture-handler";
import { postComentario } from '../service/ProdutoService';
 

export default function Cadastro(props){

idProduto = props.route.params.idProduto;
const idproduto = idProduto;

const [comentario, setComentario] = useState(''); 
const [inicioestrelas, setInicioestrela] = useState(0); 
const [max_estrelas, setMax_estrelas] = useState([1,2,3,4,5]);   
const estreladesmarcadaimg = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
const estrelamarcadaimg = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

const GerandoEstrelas = () => {
    return(
        <View style={styles.gerandoestrelas}>
        { 
           max_estrelas.map((item, key) => {
                return(
                    <TouchableOpacity
                    activeOpacity={0.7}
                    key={item}
                    onPress={() => setInicioestrela(item)}
                    >
                    <Image
                        style={styles.imagem_estrela}
                        source={
                            item <= inicioestrelas
                            ? {uri: estreladesmarcadaimg }
                            : {uri: estrelamarcadaimg}
                        }
                    />

                    </TouchableOpacity>
                )
            })
        }
        </View>
    )
}

return (
      
                        <View>
                           <Text style={styles.text_input}>Digite seu comentário:</Text>
                            <TextInput style={styles.input}
                                onChangeText={setComentario}
                                value={comentario}
                                multiline/>
                           <GerandoEstrelas
                           />
                           
                        <View style={{flexWrap: "nowrap", alignItems: 'center', marginTop: 20}}>
                        <Button   
                            title = 'Cadastrar'
                            onPress={() => {
                                if (comentario && inicioestrelas!= "") {
                                    postComentario({
                                        comentario: comentario,
                                        estrelas: inicioestrelas,
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
    gerandoestrelas:{
        justifyContent: 'center',
        marginTop: 30,
        flexDirection:'row'
        
    },
    imagem_estrela:{
        width: 40,
        height:40,
        resizeMode: 'cover'
    }

});