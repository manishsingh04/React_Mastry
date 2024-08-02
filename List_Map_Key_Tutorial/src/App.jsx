import './App.css'
import ListCom from './components/ListCom'
import ListAlogProps from './components/ListAlogProps'

function App() {

  const numbers = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <h1>List and Map</h1>
      <ListCom />
      <ListAlogProps num={numbers} />
    </>
  )
}

export default App
