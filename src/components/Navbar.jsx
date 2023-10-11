import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/logo.png' 



function Navbarr() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight:'bold'}}>
        <img
              alt=""
              src={logo}
              width="200"
              height="40"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#link">Каталог</Nav.Link>
            <NavDropdown title="О нас" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Сертификаты</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Расположение
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Контакты</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Связаться
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <Container>
        <Navbar.Collapse>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#link">energomashNTF@mail.ru</Nav.Link>


            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

export default Navbarr;