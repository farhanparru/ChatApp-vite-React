import { Alert,Button,Form,Row,Col,Stack } from "react-bootstrap";
import { useContext } from "react";
import { Data } from "../App";
const Signup = () => {
  const {signupInfo,updateSignupInfo,signupUser,signupError,isSignupLoading} = useContext(Data)

    return (
    <>
        <Form onSubmit={signupUser}>
          <Row style={{
            height:"100vh",
            justifyContent:"center",
            paddingTop:"10%",
          }}>
           <Col xs={6}>
          <Stack gap={3}>   
         <h2>Signup</h2>
         
         <Form.Control type="text" placeholder="Name" onChange={(e)=> updateSignupInfo
         // eslint-disable-next-line no-unexpected-multiline
         ({...signupInfo,name:e.target.value})}/>
         <Form.Control type="email" placeholder="email" onChange={(e)=>updateSignupInfo
         // eslint-disable-next-line no-unexpected-multiline
          ({...signupInfo,email:e.target.value})}/>

         <Form.Control type="password" placeholder="Password" onChange={(e)=>updateSignupInfo
         // eslint-disable-next-line no-unexpected-multiline
          ({...signupInfo,password:e.target.value})}/>

         <Button variant="primary" type="submit">
          {isSignupLoading ? "Creating your account" : "Signup"}
         </Button> 

          {signupError?.error && (
          <Alert variant="danger">
          <p>{signupError?.message}</p>
          </Alert>
        
          )}
         
         
          </Stack>
         </Col>
        </Row>
        </Form>
    </>
    )
}
 
export default Signup;