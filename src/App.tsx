import { useState } from 'react'
import './App.css'

type child = {
  children:React.ReactNode;
  size?: "small"|"large";
}

const Title = ( {children, size} : child )=>(<h1 style={{fontSize: size == 'small' ? "1.5rem" : "3rem"}}>{children}</h1>)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title size='small'>
        <span>
          Hello <b>World</b>
        </span>
      </Title>
    </div>
  )
}

export default App
