import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
     <h1 className=' text-red-700 text-6xl'>Learn About Redux</h1>
     <AddTodo />
     <Todos />
    </>
  )
}

export default App
