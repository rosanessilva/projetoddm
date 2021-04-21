import axios from 'axios';

var getProdutos = async() => {
    //conectar com o servidor 
    //retornar os dados

    const response = await axios.get('http://192.168.1.6:3031/produtos');
    return response.data;
}
var getProduto = async (id) => {
    const response = await axios.get('http://192.168.1.6:3031/produtos/' + id);
    return response.data;
  }
  var getComentarios = async (idProduto) => {
    const response = await axios.get('http://192.168.1.6:3031/produtos/' + idProduto +'/comentarios');
    return response.data;
  }
  //Mostrar apenas um comentário específicio de um produto
  var getComentario = async (idProduto, idComentario) => {
    const response = await axios.get('http://192.168.1.6:3031/produtos/' + idProduto +'/comentarios/'+ idComentario);
    return response.data;
  }
    //Mostrar todos os comentários de todos os produtos
    var getTodosComentarios = async () => {
      const response = await axios.get('http://192.168.1.6:3031/comentarios');
      return response.data;
    }
  var postComentario = async (idProduto, comentario) => {
    const response = await axios.post('http://192.168.1.6:3031/produtos/'+ idProduto+'/comentarios', comentario);
    return response.data;
  }
 /* var postComentario = async (comentario) => {
    const response = await axios.post('http://192.168.1.6:3031/comentarios', comentario);
    return response.data;
  } 
  */
  var removerComentario = async (idProduto, idComentario) => {
    const response = await axios.delete('http://192.168.1.6:3031/produtos/'+ idProduto +'/comentarios/'+ idComentario);
    return response.data;
  }

export { getProdutos, getProduto, getComentarios, getTodosComentarios, getComentario, postComentario , removerComentario};