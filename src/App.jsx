import "./App.css"
import GamePlay from "./components/GamePlay"
import StartGame from './components/StartGame'
import { useState } from "react"

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () =>{
    setIsGameStarted(prev => !prev)
  }
  return (
    <div className="container">
     { isGameStarted ? <GamePlay />: <StartGame toggle = {toggleGamePlay} />}
    </div>
  )
}

export default App