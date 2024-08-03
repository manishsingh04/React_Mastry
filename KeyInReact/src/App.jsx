
import './App.css'
import KeysCom from './components/KeysCom'

function App() {

  const users = [
    {
      id: 1,
      name: "Manish",
      age: 22
    },
    {
      id: 2,
      name: "Rithvik",
      age: 12
    },
    // {
    //   id: 2,
    //   name: "Ved",
    //   age: 20
    // },
    {
      id: 3,
      name: "Ved",
      age: 20
    },
    {
      id: 4,
      name: "avik",
      age: 19
    },
  ]


  return (
    <>
      <h1>Welcome to keys in React tutorial</h1>
      <KeysCom users={users} />
    </>
  )
}

export default App
