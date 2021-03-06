import React, { useEffect, useState } from 'react';
//import Menu from '../../components/Menu'
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
//import Footer from '../../components/Footer';
import categoriasRespoitory from '../../repositories/categorias'
import PageDefault from '../../components/PageDefault';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(()=>{
    categoriasRespoitory.getAllWithVideos().then((categoriasComVideos) => {
      //console.log(categoriasComVideos)
      setDadosIniciais(categoriasComVideos)
    })
    .catch((err) => {
      console.log(err.message)
    })
  },[])

  return (
    <PageDefault paddingAll={0}>

    {dadosIniciais.length === 0 && (<div>Loading...</div>)}

    {dadosIniciais.map((categoria, indice) => {
      if(indice === 0){
        return(
          <div key={categoria.id}>
            <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription={"Inspirados por uma descoberta extraordinária, dois príncipes humanos e uma elfo assassina se unem numa jornada épica na busca de paz para seus reinos em guerra."}
              />

            <Carousel
              ignoreFirstVideo
              category={dadosIniciais[0]}
            />
          </div>
        )
      }

      return(
        <Carousel
        key={categoria.id}
        category={categoria}
        />
      )
    })}
    
{/*       <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Inspirados por uma descoberta extraordinária, dois príncipes humanos e uma elfo assassina se unem numa jornada épica na busca de paz para seus reinos em guerra."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />          

      <Footer /> */}

    </PageDefault>
  );
}

export default Home;
