import './App.css';
import React,{useState} from 'react';

function App() {
  const[result,setResult]=useState("");
  //handleclick
  function handleclick(e){
    //console.log(e.target?.name)
    setResult(result.concat(e.target?.name))
  }
function clear(){
  setResult("");
}
 function back(){
   setResult(result?.slice(0,-1));
 }
 function Calculator(){
   try {
     setResult(Number(eval(result).toString()).toFixed(2))
   } catch (error) {
      setResult('Invalid format')
   }
 }
  return (
    <div className="calc">
      <h1 style={{textAlign:'center'}}>Calculator Using React</h1>
     <input type="text" id="answer" placeholder='0' value={result}></input>
     <button  className='button' onClick={clear}>C</button>
     <button name='/'  className='button' onClick={back}>DEL</button>
     <button name="/"  className='button' onClick={handleclick}>&divide;</button>
     <button name="x"  className='button' onClick={handleclick}>x</button>
     <button name="9"  className='button' onClick={handleclick}>9</button>
     <button name="8"  className='button' onClick={handleclick}>8</button>
     <button name="7" className='button' onClick={handleclick}>7</button>
     <button name="+" className='button' onClick={handleclick}>+</button>
     <button name="6" className='button ' onClick={handleclick}>6</button>
     <button name="5" className='button' onClick={handleclick}>5</button>
     <button name="4" className='button' onClick={handleclick}>4</button>
     <button name="-" className='button' onClick={handleclick}>-</button>
     <button name="3" className='button' onClick={handleclick}>3</button>
     <button name="2" className='button' onClick={handleclick}>2</button>
     <button name="1" className='button' onClick={handleclick}>1</button>
     <button name="0" className='button' onClick={handleclick}>0</button>
     <button name="." className='button button1' onClick={handleclick}>.</button>
     <button name="=" className='button button1' onClick={ Calculator} >=</button>


    </div>
  );
}

export default App;