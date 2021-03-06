const express = require ('express');
const app = express();
const port= 3031;

app.use(express.json());


    var produtos = [

              {
                id: '1',
                nome: 'Poodle',
                preco: 'seu amor...',
                descricao: 'Poodle, de acordo com a Federação Cinológica Internacional é oriunda da França, por ter sido reivindicada, porém ela já era há muito tempo criada em países da Europa Central como a Alemanha. Originalmente, era utilizado como cão de caça a aves aquáticas',
                img: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/129733029_3893469884016932_117980607517007813_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=Tcxtbx4gacIAX8QbLDo&_nc_ht=scontent.fnat1-1.fna&oh=ffd6152958eb7d01e7d3338d8dca7fc4&oe=6083FC1F',
                botao: 'Saber mais',

              },
              {
                id: '2',
                nome: 'Doberman',
                preco: 'seu carinho...',
                descricao: 'Dobermann é uma raça de cães do grupo pinscher, oriunda da Alemanha. A raça foi desenvolvida inicialmente por Karl Friedrich Louis Dobermann em Apolda na Alemanha por volta de 1860. Foi a primeira raça criada especialmente para proteção.',
                img: 'https://i.pinimg.com/originals/11/85/84/11858433bdbb6d16be35a4d9363ff41c.jpg',
                botao: 'Saber mais',
              },
              {
                id: '3',
                nome: 'Pinscher',
                preco: 'ser amigo...',
                descricao: 'A pinscher miniatura é uma raça canina de pequeno porte do grupo pinscher e é oriunda da Alemanha. Possui duas variedades de cores, ambas sem marcas brancas.',
                img:  'https://static.vecteezy.com/ti/fotos-gratis/p1/963473-macho-pincher-brinquedo-cachorro-foto.jpg',
                botao: 'Saber mais',
              },
              {
                id: '4',
                nome: 'Pastor Alemão',
                preco: 'seu cuidado...',
                descricao: 'Pastor-alemão ou lobo-da-alsácia é uma raça canina proveniente da Alemanha. Em sua origem era utilizado como cão de pastoreio de rebanhos. Atualmente é mais utilizado como cão de guarda e cão policial.',
                img:  'https://s2.glbimg.com/3Jdy7HOgk83fh-kAs5IhLh-nkfo=/0x0:620x416/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2014/04/17/dog-jury-duty_fran.jpg',
                botao: 'Saber mais',
              },
              {
                id: '5',
                nome: 'Pastor Belga',
                preco: 'seu amor...',
                descricao: 'Pastor-belga é uma raça de cães com origem na Bélgica, que possui 4 variedades com aparências bastante distintas e que não cruzam entre si. Estas são: Malinois, Groenendael, Tervueren e Laekenois.',
                img: 'https://meuamigopet.com.br/wp-content/uploads/2019/10/Pastor-Belga.jpg',
                botao: 'Saber mais',
              },
              {
                id: '6',
                nome: 'Vira-lata',
                preco: 'seu carinho...',
                descricao: 'Vira-lata ou rafeiro é a denominação dada aos cães ou gatos sem raça definida, SRD, sendo CRAND e GRAND, como são geralmente referenciados em textos veterinários.',
                img: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Serena_REFON.jpg',
                botao: 'Saber mais',
              },    
    ];

    var comentarios = [ 
        {
          idComentario: '1',
          idProduto: '1',
          foto: 'http://3.bp.blogspot.com/_gl58Mbhzt7A/TGBZhD806tI/AAAAAAAAAHE/DMqYuw3SrfE/s1600/rosto%20antes.jpg',
          nomepessoa: 'Maria Clara',
          comentario: 'Que poodle mais fofinha!!!',
          estrelas: '5',
        },
        {
          idComentario: '2',
          idProduto: '1',
          foto: 'https://i.pinimg.com/originals/ca/e6/1e/cae61e84e03a0bf4bc5fe18f57d4d1b8.jpg',
          nomepessoa: 'Mercedes',
          comentario: 'Eles nos dão muito amor...',
          estrelas: '4',
        },
        {
          idComentario: '3',
          idProduto: '2',
          foto: 'https://i.pinimg.com/originals/ae/ef/f8/aeeff87b072fe0a9c06b47898d0eee23.jpg',
          nomepessoa: 'Matheus Pontes',
          comentario: 'Companheiro e guardião! Doberman é o melhor.',
          estrelas: '5',
        },
        {
          idComentario: '4',
         idProduto: '3',
         foto: 'https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142839436',
         nomepessoa: 'Renata',
         comentario: 'Pense num cão raivoso!',
         estrelas: '2',
       },
       {
        idComentario: '5',
         idProduto: '3',
         foto: 'https://super.abril.com.br/wp-content/uploads/2019/02/tecnologia-ia-rostos-01.png',
         nomepessoa: 'Frederico',
         comentario: 'Pequeno, mas chama a atenção de todos!',
         estrelas: '4',
       },
       {
        idComentario: '6',
        idProduto: '4',
        foto: 'https://static1.preparadopravaler.com.br/articles/2/31/49/2/@/137185-rostos-redondos-se-beneficiam-de-cortes-660x0-1.jpg',
        nomepessoa: 'Cristovão',
        comentario: 'São lindos demais, mas soltam muito pelo.',
        estrelas: '3',
      },
      {
        idComentario: '7',
        idProduto: '5',
        foto: 'https://www.avon.com.br/arquivos/CROPMOB_rosto.png?v=637105548408570000',
        nomepessoa: 'Roseane Fontes',
        comentario: 'Já tive um assim. Calminho e companheiro.',
        estrelas: '4',
      },
      {
        idComentario: '8',
        idProduto: '6',
        foto: 'https://static1.purepeople.com.br/articles/9/22/26/49/@/2562184-franja-para-todos-os-tipos-de-rostos-e-p-624x600-1.jpg',
        nomepessoa: 'Gabriela Siqueira',
        comentario: 'São os mais inteligentes!',
        estrelas: '5',
      },
      {
        idComentario: '9',
        idProduto: '6',
        foto: 'https://super.abril.com.br/wp-content/uploads/2019/02/tecnologia-ia-rostos-02.png',
        nomepessoa: 'João Marcelo',
        comentario: 'Independente e adoece pouquíssimo.',
        estrelas: '5',
      },
      {
        idComentario: '10',
        idProduto: '6',
        foto: 'https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142837823',
        nomepessoa: 'Fernanda Paz',
        comentario: 'Os mais abandonados... infelizmente.',
        estrelas: '5',
      },
      {
        idComentario: '11',
        idProduto: '2',
        foto: 'https://www.hypeness.com.br/1/2020/08/Ma%CC%81scaras_rosto_02.jpg',
        nomepessoa: 'Penélope Ponte',
        comentario: 'Ele me protege e cuida do quintal. É super inteligente.',
        estrelas: '5',
      },
      {
        idComentario: '12',
        idProduto: '1',
        foto: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/143127941_4029624640401455_7380832891398866721_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=w7107fHOfvYAX-ScpeU&_nc_ht=scontent.fnat1-1.fna&oh=f12fb300e5b8b1933b6c25ebc32f6ec3&oe=608597E8',
        nomepessoa: 'Rosália Figueirêdo',
        comentario: 'Amo mais que muita gente!',
        estrelas: '5',
      },
      {
        idComentario: '13',
        idProduto: '2',
        foto: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t31.0-8/27356320_1618086334946431_4064499441379758094_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=HDv9dZ8_IMEAX8A2mw8&_nc_ht=scontent.fnat1-1.fna&oh=50bea2c1e4bde91a9104244b06f69bec&oe=60861010',
        nomepessoa: 'Rosane Gondim',
        comentario: 'Saudades da minha Xena...',
        estrelas: '5',
      },
      {
        idComentario: '14',
        idProduto: '5',
        foto: 'https://static1.segredosdesalao.com.br/articles/4/20/4/@/1029-rostos-ovais-devem-ser-harmonizados-com-article_media_item_mobile-1.jpg',
        nomepessoa: 'Afonso Souza',
        comentario: 'Soltam muito pelo, mas guardam a casa.',
        estrelas: '3',
      },
      {
        idComentario: '15',
        idProduto: '3',
        foto: 'https://conteudo.imguol.com.br/c/noticias/97/2018/12/18/rostos-gerados-por-uma-tecnica-de-inteligencia-artificial-chamada-gan-dos-pesquisadores-da-nvidia-1545135572851_v2_450x337.jpg',
        nomepessoa: 'Felipe Arruda',
        comentario: 'Ótimo alarme para a casa e muito companheiro.',
        estrelas: '5',
      },
      {
        idComentario: '16',
        idProduto: '2',
        foto: 'https://i.pinimg.com/originals/d5/f5/2c/d5f52c18bf3f73702677ea3738573c2a.jpg',
        nomepessoa: 'Maria Felícia',
        comentario: 'Fui atacada por um desses...',
        estrelas: '1',
      },
      {
        idComentario: '17',
        idProduto: '6',
        foto: 'http://cdn.soccerwiki.org/images/player/86765.png',
        nomepessoa: 'Ribamar',
        comentario: 'Vivem rasgando os sacos de lixo em frente de casa.',
        estrelas: '1',
      },
   ];

  
app.get('/produtos', (req, res) => {
  res.send(produtos);
});

app.get('/comentarios', (req, res) => {
  res.send(comentarios);
});

app.get('/produtos/:id', (req, res) => {
  const produto = produtos.filter((produto) => produto.id == req.params.id);
  res.send(produto[0]);
});

app.get('/produtos/:idProduto/comentarios', (req, res) => {
  const comentario = comentarios.filter((comentarios) => comentarios.idProduto == req.params.idProduto);
  res.send(comentario);
});
//Adição de comentário
app.post('/produtos/:idProduto/comentarios', (req,res) => {
 // console.log(req.body);
  const novoComentario = req.body;
  novoComentario.idComentario = comentarios.length+1;
  comentarios.push(novoComentario);
  res.send(novoComentario);
});

app.get('/produtos/:idProduto/comentarios/:idComentario', (req, res) => {
  const comentario = comentarios.filter((comentario) => comentario.idComentario == req.params.idComentario);
  res.send(comentario[0]);
});

app.delete('/produtos/:idProduto/comentarios/:idComentario', (req,res) => {
  comentarios = comentarios.filter((comentario) => comentario.idComentario != req.params.idComentario);  
  res.send(comentarios);
});

app.listen(port, '0.0.0.0', () => {
  console.log('Servidor online');
});