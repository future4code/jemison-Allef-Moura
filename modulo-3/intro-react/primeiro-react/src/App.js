import Mypicture from './Img/foto.jpg'
import './App.css';

function App() {
  const titulo = "Olá, Eu sou o Allef"
  const sayGoodNight = () => {
    alert ('Boa noite')
  }
  return (
    <div className="App">
      <h1>{titulo}</h1>
      <img src={Mypicture} className='foto' alt='minhaFoto'/>
      <h3>Este é meu primeiro site React</h3>
      <button onClick={sayGoodNight}> Clique Aqui </button>
    </div>
  );
}

export default App;
