import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Rout from './rout'

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Rout />
      </BrowserRouter>
      <div className="background">
        <img src="img2.jpg" alt="Background Image" />
    </div>
    </div>
  )
}
export default App