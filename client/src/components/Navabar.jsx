import { Container,Nav,Navbar,Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavaBar = () => {
    return <Navbar bg="dark" className="mb-4" style={{height:"3.75rem"}}>
    <Container>
      <h2>
      <Link to="/" className="link-light text-decoration-none"> 
      ChatApp</Link>  
      </h2>
      <span className="text-warning">Logged in as Farhan</span>
      <Nav>
        <Stack direction="horizontal" gap={3}>
        <Link to="/login" className="link-light text-decoration-none"> 
       Login
      </Link>
      <Link to="/signup" className="link-light text-decoration-none"> 
      Signup
      </Link>
        </Stack>
      </Nav>
    </Container>
    </Navbar>
}
 
export default NavaBar;