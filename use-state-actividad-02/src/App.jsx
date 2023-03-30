import React, { useState } from 'react'

import './App.css'

const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]
  let [amount, setAmount] = useState(0)

  const changeAmount = (e) => {
    setAmount(amount = e.target.value)
    
  }


  return (
    <>
        <label htmlFor="u0">{cambios[0].moneda}</label>
        <input id="u0" type="number" onChange={ changeAmount } value={ amount }/> 
        <label htmlFor="u1">{cambios[1].moneda} </label>
        <input id="u1" type="number" readOnly value={ amount * cambios[1].cambio } /> 
        <label htmlFor="u2">{cambios[2].moneda} </label>
        <input id="u2" type="number" readOnly value={ amount * cambios[2].cambio } /> 
        <label htmlFor="u3">{cambios[3].moneda} </label>
        <input id="u3" type="number" readOnly value={ amount * cambios[3].cambio } /> 
        <label htmlFor="u4">{cambios[4].moneda} </label>
        <input id="u4" type="number" readOnly value={ amount * cambios[4].cambio } /> 
    </>
  )
}

export default App;