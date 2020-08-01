import config from '../config'

const URL_CATEGORIAS = `${config.URL}/categorias`

function getAllWithVideos(){
  
  return fetch(`${URL_CATEGORIAS}/?_embed=videos`).then(async (respostaDoServidor) => { 

    if(respostaDoServidor.ok){
      const resposta = await respostaDoServidor.json();
      return resposta
    }

    throw new Error('Não foi possível retornar os dados :( ')

   });
}

function getAllCategorias(){
  
  return fetch(`${URL_CATEGORIAS}`).then(async (respostaDoServidor) => { 

    if(respostaDoServidor.ok){
      const resposta = await respostaDoServidor.json();
      return resposta
    }

    throw new Error('Não foi possível retornar os dados :( ')

   });
}

function createCategorias(objetoDaCategoria){
  
  return fetch(`${URL_CATEGORIAS}`,{
    method: 'POST',
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria)
  })
  .then(async (respostaDoServidor) => { 

    if(respostaDoServidor.ok){
      const resposta = await respostaDoServidor.json();
      return resposta
    }

    throw new Error('Não foi possível retornar os dados :( ')

   });
}

export default{
  getAllWithVideos,
  getAllCategorias,
  createCategorias
}