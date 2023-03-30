import React, { useState } from 'react'
import './App.css';

export default function App() {
  let [counter, setCounter] = useState(0)
  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)
  let [result, setResult] = useState(0)
  
  const add = () => {
    setCounter( ++counter )
  }
  const sub = () => {
    setCounter( --counter )
  }
  const res = () => {
    setCounter( 0 )
  }

  const changeNum1 = ( e ) => {
    setNum1( e.target.value )
  }
  const changeNum2 = ( e ) => {
    setNum2( e.target.value )
  }
  const addTwoNumbers = () => {
    setResult( Number( num1 ) + Number( num2 ) )
  }

  return (
    <>
    
    <div>
      <h1>{counter}</h1>
      <button onClick={ add }>add</button>
      <button onClick={ sub }>substract</button>
      <button onClick={ res }>reset</button>
    </div>
    <br/>
    <div className='container'>
      <input type='number'  value={ num1 } onChange={ changeNum1 }/> +
      <input type='number' value={ num2 } onChange={ changeNum2 }/> = 
      <input readOnly value={ result }/>
      <button onClick={ addTwoNumbers }>Sumar</button>
    </div>
    </>
  )
}