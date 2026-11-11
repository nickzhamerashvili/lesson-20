
import { useState } from "react";
import AboutSection from "./ui/AboutSection/AboutSection.jsx"

function App() {

  const [ counter, setCounter ] = useState(5); 


  const increment = () => {
    if(counter < 10) setCounter(counter + 1)
    console.log(counter)
  }

  const decrement = () => {
    if(counter > 0) setCounter(counter - 1)
  }

  return (
    <div style={{background: "black"}}>


      <button onClick={() => increment()}>{counter}</button>
      <button onClick={() => decrement()}>-</button>
      <AboutSection />
    </div>
  )
}

export default App
