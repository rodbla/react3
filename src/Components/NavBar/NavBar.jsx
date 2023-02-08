import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>

        <Link to='/'>E-commerce</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink as={Link} to='/categoria/pelotas' className={({ isActive })=> isActive  ? 'btn btn-primary':'btn btn-outline-primary' } >Pelotas</NavLink>
            <NavLink as={Link} to='/categoria/zapatillas' className={({ isActive })=> isActive  ? 'btn btn-primary':'btn btn-outline-primary' } >Zapatillas</NavLink>
            
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

            <Link to='/cart'>CartWidget</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar