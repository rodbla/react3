import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">E-commerce</Navbar.Brand> */}
        <Link to='/'>E-commerce</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#indumentaria">Indumentaria</Nav.Link>
            <Nav.Link href="#tecnologia">Tecnologia</Nav.Link> */}
            <NavLink as={Link} to='/categoria/gorras' className={({ isActive })=> isActive  ? 'btn btn-primary':'btn btn-outline-primary' } >Gorras</NavLink>
            <NavLink as={Link} to='/categoria/remeras' className={({ isActive })=> isActive  ? 'btn btn-primary':'btn btn-outline-primary' } >Remeras</NavLink>
            
          </Nav>
          <Nav className='align-items-center'>
          <NavDropdown title="Mi Perfil" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cuenta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Historial de Compra
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Soporte</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Desloguearse
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className='d-flex' href="#deets">🛒</Nav.Link> */}
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            <Link to='/cart'>CartWidget</Link>
            {/* <CartWidget /> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar