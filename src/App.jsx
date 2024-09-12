import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PasswordStrenghtChecker from './Components/PasswordSrengthChecker'
import Timer from './Components/Timer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PasswordStrenghtChecker />
      <Timer/>
    </div>
  )
}

export default App;
