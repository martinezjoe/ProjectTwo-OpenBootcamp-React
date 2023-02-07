/**
 * Se nos pide que el componente 'tarea.jsx' sea un componente de tipo funcional,
 * es decir pasar de un componente de tipo clase a un componente de tipo función.
 * 
 */

import React, {useState, useEffect} from 'react'

const Clock = () => {

  useEffect(() => {
    const timerID = setInterval(tick, 1000)
    return () => {
      clearInterval(timerID)
    };
  }, []);

  const fechaInicial = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José'
  }

  const [state, setState] = useState(fechaInicial);

  function tick() {
    setState((state) => {
      let edad = state.edad +1;
      return {
         ...state,
         fecha: new Date(),
         edad
      }
   })
  }
  
  return (
    <div>
         <h2> Hora Actual:
         {state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{state.nombre} {state.apellidos}</h3>
         <h1>Edad: {state.edad}</h1>
    </div>
  )
}

export default Clock
