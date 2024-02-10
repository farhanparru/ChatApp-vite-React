 import {Routes,Route,Navigate} from 'react-router-dom'
 import Chat from './pages/Chat'
 import Signup from './pages/Signup'
 import Login from './pages/Login'
 import "bootstrap/dist/css/bootstrap.min.css"
 import {Container} from 'react-bootstrap'
 import NavaBar from './components/Navabar'
 import { createContext, useCallback, useState } from 'react'
import { postRequest,baseUrl } from './utils/services'



  export const Data=createContext()

  function App() {

  const [user,setUser]= useState(null)
  const [signupError,setSignupError] = useState(null)
  const [isSignupLoading,setIsSignupLoading] = useState(false)
  const [signupInfo,setSignupInfo]=useState({
    name:"",
    email:"",
    password:"",
  })

  console.log("register",signupInfo);
  const updateSignupInfo = useCallback((info)=>{
       setSignupInfo(info)
  },[])

  const SignupUser = useCallback(async(e)=>{
    e.preventDefault()
    
    setIsSignupLoading(true)
    setSignupError(null)
    
   // eslint-disable-next-line no-undef
   const response =  
   await postRequest(`${baseUrl}/users/signup`,JSON.stringify
   // eslint-disable-next-line no-unexpected-multiline
   (signupInfo))

   setIsSignupLoading(false)
  

   if(response.error){
    return setSignupError(response)
   }
   localStorage.setItem('user',JSON.stringify(response))
   console.log(localStorage);
  setUser(response)

  }, [signupInfo]);

  return<>
  <>
    <NavaBar/>
  </>
  <Container>
  <Data.Provider value={{user,signupInfo,updateSignupInfo,SignupUser,signupError,isSignupLoading}}>
    <Routes>
      <Route path='/' element={<Chat/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    </Data.Provider>
    </Container>
  </>
}
export default App
