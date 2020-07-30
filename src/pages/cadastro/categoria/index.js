import React, { useState, useEffect } from 'react'
import{ Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
import FormFiled from '../../../components/FormFiled';
import Button from '../../../components/Button';

function CadastroCategoria(){

  
  const valoresIniciais ={
    nome:'',
    descricao:'',
    cor:'',
  }
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor){    
    setValores({
      ...valores,
      [chave]: valor, //nome: 'valor'
    })    
  }

  function handleChange(infosDoEvento){
    setValor(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value      
    );    
  }

  useEffect(()=>{
    console.log('Alo brasil');
    const URL = 'http://localhost:8080/categorias'

    fetch(URL).then(async (respostaDoServidor) => { 
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta
      ]);
     });

  })

  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault()
        console.log('Você tentou enviar um form né?')
        setCategorias([
          ...categorias,
          valores
        ]);
        setValores(valoresIniciais)
      }}>
        <FormFiled
          label="Nome da Categoria"
          type= "texto"
          name = "nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormFiled
          label="Descrição"
          type= "textarea"
          name = "descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormFiled
          label="Cor"
          type= 'color'
          name = 'cor'
          value={valores.nome}
          onChange={handleChange}
        />


        <Button className="ButtonLink">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 &&(
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria)=>{
          return(
            <li key={`${categoria}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>      
  )
}

export default CadastroCategoria;