import './App.css';
import phrases from './data/phrases.json';
import FortunaCards from './components/FortunaCards';
import FortunaTitulo from './components/FortunaTitulo';
import { useState } from 'react';

function App() {

  const fondos = [1,2,3,4];

  const [num, setNum] = useState(0);

  const [ indexPhrases, setIndexPhrasess ] = useState(0);

  const changeFondo = () => {
    if (num === fondos.length -1) {
      setNum(0);
    } else{
      setNum(num +1);
    }
  }

  const changeFortuna = () => {
    setIndexPhrasess(Math.floor(Math.random() * phrases.length))
  }



  return (
    <div className="App" style={{backgroundImage:"url('fondo-"+fondos[num]+".jpg')"}}>

      
      <FortunaTitulo />

      <FortunaCards 
        fortunaData = { phrases[indexPhrases] }
      />
      
      <button className='button' onClick={ () =>{changeFortuna(), changeFondo()} }>
        Ver Otro
      </button>
        
    </div>
  )
}

export default App
