import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSIdeNav/LeftSideNav';
import { Button, Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontex } from '../../../contex/Contex';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const { user, logout } = useContext(Authcontex)

  const handlelogout = () => {
    logout();
  }
  return (
    <div>
      <Navbar collapseOnSelect className="mb-5" expand="lg" bg='dark' variant='dark' >
        <Container>
          <Navbar.Brand ><Link to='/' className='text-white text-decoration-none'>Dragon News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>



              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
                className='d-lg-none'
              >
                <NavDropdown.Item className='bg-dark'>
                  <LeftSideNav></LeftSideNav>
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>

            <span className='text-white me-3'>{user?.displayName}</span>
            {
              user?.photoURL ?
                <Link to='/profile'><Image className='me-3' style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image></Link>
                : <Link to='/profile'><FaUser className='me-3 '></FaUser></Link>
            }



            {
              user?.uid ?

                <Button variant="primary" type="LogOut" className='bg-dark lg:ms-5' onClick={handlelogout}>LogOut</Button> :
                <>
                  <Button variant="primary" type="LogOut" className='bg-dark lg:ms-5'><Link to="/login" className='text-white text-decoration-none'>LogIn</Link></Button>
                  <Button variant="primary" type="LogOut" className='bg-dark ms-3 '><Link to="/register" className='text-white text-decoration-none'>Register</Link></Button>

                </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
};

export default Header;