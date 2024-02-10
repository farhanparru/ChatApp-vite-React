import { Alert,Button,Form,Row,Col,Stack } from "react-bootstrap";

const Signup = () => {
    return <>
        <Form>
          <Row style={{
            height:"100vh",
            justifyContent:"center",
            paddingTop:"10%",
          }}>
           <Col xs={6}>
          <Stack gap={3}>   
         <h2>Signup</h2>
         <Form.Control type="text" placeholder="Name" />
         <Form.Control type="email" placeholder="email" />
         <Form.Control type="password" placeholder="Password" />
         <Button variant="primary" type="submit">
            Signup
         </Button>
         <Alert variant="danger"><p>An Error occured</p></Alert>
          </Stack>
         </Col>
        </Row>
        </Form>
    </>
}
 
export default Signup;