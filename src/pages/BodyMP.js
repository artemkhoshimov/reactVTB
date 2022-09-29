import { Routes, Route } from 'react-router-dom'
import MainPage from './MP/MainPage'
import Data from './DataP/Data'



const BodyMP = () => (
  <main>
    <Routes>
      <Route exact path='/' element={<MainPage/>} />
      <Route exact path='/main/*' element={<MainPage/>} />
      <Route path='/data/*' element={<Data/>} />
    </Routes>
  </main>
)

export default BodyMP
