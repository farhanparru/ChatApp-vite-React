 import {Routes,Route,Navigate} from 'react-router-dom'
 import Chat from './pages/Chat'
 import Signup from './pages/Signup'
 import Login from './pages/Login'
 import "bootstrap/dist/css/bootstrap.min.css"
 import {Container} from 'react-bootstrap'
 import NavaBar from './components/Navabar'
 import { createContext, useCallback, useEffect, useState } from 'react'
 import { postRequest } from './utils/services'
 import { baseUrl } from './utils/services'





  export const Data=createContext()

  function App() {
    

  const [user,setUser]= useState(null)
  const [signupError,setSignupError]= useState(null)
  const [isSignupLoading,setIsSignupLoading] = useState(false);
  const [signupInfo,setSignupInfo]=useState({
    name:"",
    email:"",
    password:"",
  })

  console.log("sdi",user);

  useEffect(()=>{
      const user = localStorage.getItem("User")

      setUser(JSON.parse(user))
  },[])

  console.log("register",signupInfo);
  const updateSignupInfo = useCallback((info)=>{
       setSignupInfo(info)
  },[])

   const signupUser = useCallback(async(e)=>{
    e.preventDefault()
    setIsSignupLoading(true)
    setSignupError(null)

   const response = await postRequest(
   
    `${baseUrl}/users/register`,
    JSON.stringify(signupInfo)
    );
   
    setIsSignupLoading(false)


   if(response.error){
     return setSignupError(response)
   }

  localStorage.setItem('User',JSON.stringify(response))
  setUser(response)
   
  }, [signupInfo])

 
   

  return<>
  <>
    <NavaBar/>
  </>
  <Container>
  <Data.Provider value={{
    user,
    signupInfo,
    updateSignupInfo,
    signupUser,
    signupError,
    isSignupLoading
    }}>
    <Routes>
      <Route path='/' element={user ? <Chat/> : <Login/>}/>
      <Route path='/signup' element={user ? <Chat/> :<Signup/>}/>
      <Route path='/login' element={user ?<Chat/> : <Login/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    </Data.Provider>
    </Container>
  </>
}
export default App
