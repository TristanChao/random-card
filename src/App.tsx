import { useState } from 'react'
import './App.css'
import { ImHeart, ImClubs, ImSpades, ImDiamonds } from 'react-icons/im'

function App() {
  const vals = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const suits = [<ImHeart/>, <ImClubs/>, <ImSpades/>, <ImDiamonds/>]
  
  const [val, setVal] = useState<string>(vals[Math.round(Math.random() * 12)]);
  const [suit, setSuit] = useState(suits[Math.round(Math.random() * 3)]);

  function drawCard() {
    setVal(vals[Math.floor(Math.random() * 12)]);
    setSuit(suits[Math.floor(Math.random() * 3)]);
  };

  return (
    <>
      <div className='card'>
        <span className='val'>{val}</span>
        <span>{suit}</span>
      </div>
      <div className="button">
        <button onClick={drawCard}>
          draw a card
        </button>
      </div>
    </>
  )
}

export default App
