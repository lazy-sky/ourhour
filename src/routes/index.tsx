import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Meeting from './Meeting'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='meeting'>
          <Route path=':name'>
            <Route path=':id' element={<Meeting />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
