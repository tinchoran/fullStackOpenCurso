import { useState } from 'react'


const Button = (props) => (
  <button onClick= { props.handleClick } >
    {props.text}
  </button>
)

const Display = (props) => (
  <div>
    {props.type} {props.value}
  </div>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={ "good" } handleClick={ () => setGood( prev => prev + 1) } />
      <Button text={ "neutral" } handleClick={ () => setNeutral( prev => prev + 1 ) } />
      <Button text={ "bad" } handleClick={ () => setBad( prev => prev + 1 ) } />
      <h2>Statistics</h2>
      <Display type= { "good" } value= { good } />
      <Display type= { "neutral" } value= { neutral } />
      <Display type= { "bad" } value= { bad } />
    </div>
  )
}

export default App