import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState([])
  const [visible, setVisible] = useState(3)

  const ShowMoreItems = () => {
    setVisible(prevValue => prevValue + 3)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        setState(json)
      })

  }, [])


  return (
    <div className="App">
      <h2><p>More Button...</p></h2>
      {state.slice(0 ,visible).map(item => (
        <div className='dic'>
          <h4><p>{item.title}</p></h4>
        </div>
      ))}
      <button onClick={ShowMoreItems}>See More</button>
    </div>
  )
}

export default App
