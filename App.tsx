import * as React from 'react';
import './style.css';

export default function App() {
  let text = 'sono un testo';
  let date = new Date();
  // non si può passare oggetto tra le {} <h2>{date}</h2>

  //useState restituisce lista di due elementi: variabile che ci serve e setCounter che è una funzione che modifica la variabile
  //counter inizializzata su 0

  //creaiamo componente button
  //oggetto props raccoglie tutte le proprietà settate sotto
  const CounterComp = (props) => {
    const [counter, setCounter] = React.useState(props.initialValue);

    const clickHandler = () => {
      //listener
      //bisogna utilizzare useState per "registrare" il cambiamento di stato
      //prevCounter è il valore attuale dell'oggetto counter
        setCounter((prevCounter) => {
        return prevCounter + 1
      });
    }

    return (
      <button type="button" onClick={clickHandler}> {props.buttonName} ({counter}) </button>
    );
    
  }

  return (
    <div>
      <h1>{'codice javascript'}</h1>
      <h1>{text}</h1>
      <h2>{date.toLocaleString()}</h2>
      < CounterComp initialValue = {1} buttonName = {"Click me"}/>
      < CounterComp initialValue = {10} buttonName = {"Cliccami"}/>

    </div>
  );
}
