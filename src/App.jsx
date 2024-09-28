import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBar from './components/HeaderBar';
import Blogs from './components/Blogs/Blogs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <HeaderBar/>
     <Blogs/>

    </>
  )
}

export default App
