import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno  from './components/CardPqueneo.js/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fbfh4-1.fna.fbcdn.net/v/t39.30808-6/243759242_4642941645724124_930650237161407004_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFeKxjlvmAHX2lzKgey-C6w4xMWUnuyo2jjExZSe7KjaAd5JOyy0OzYVGz0oXvXU_yIIq_go3LSUW1FMut4T5Tg&_nc_ohc=bt8-YZReXK4AX947h_g&tn=-eIuOSlsvjm_cMYu&_nc_ht=scontent.fbfh4-1.fna&oh=00_AT8boLSk7FwpQpaJ6okKqWGbtE0uqZeVwQS45IWdgZeOMw&oe=62BB8923" 
          nome="Allef" 
          descricao="Oi, eu sou o Allef. Sou um estudante da Labenu. Adoro Tecnologia e estou a procura de conquistar meu espaço nesse ramo de trabalho."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      <div className='page-section-container'>
        <CardPequeno
        email="Email:"
        descricao="fakefake@hotmail.com"
        />
      </div>
      <div className='page-section-container'>
        <CardPequeno
        email="Endereço:"
        descricao="Rua coronel fake de lima 9999"
        />
      </div>
      
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/d/dd/Logo_Bosch_Sicherheitssysteme_GmbH.png" 
          nome="Robert Bosch" 
          descricao="Atualmente trabalhando como Operador de Maquinas e ferramentas" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
