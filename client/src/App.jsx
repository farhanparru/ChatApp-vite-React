 import {Routes,Route,Navigate} from 'react-router-dom'
 import Chat from './pages/Chat'
 import Signup from './pages/Signup'
 import Login from './pages/Login'
 import "bootstrap/dist/css/bootstrap.min.css"
 import {Container} from 'react-bootstrap'
 import NavaBar from './components/Navabar'

 function App() {
  return<>
  <>
    <NavaBar/>
  </>
  <Container>
    <Routes>
      <Route path='/' element={<Chat/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    </Container>
  </>
}
export default App
