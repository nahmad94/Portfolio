import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <nav className='nav'>
      <a className='navbar-brand'>
        <img src='' />
        <div>Naveed</div>
      </a>
      <button className='toggle'>
        <span></span>
      </button>
      <div className='navbar collapse'>
        <div className='navbar-nav'>
          <HashLink smooth to='/#home' className='nav-link'>Home</HashLink>
          <HashLink smooth to='/#projects' className='nav-link'>Projects</HashLink>
          <HashLink smooth to='/#resume' className='nav-link'>Resume</HashLink>
          <HashLink smooth to='/#contact' className='nav-link'>Contact</HashLink>
        </div>
      </div>
    </nav>


    // <Navbar expand='med' fixed='top'>
    //   <Container className='navbar' >
    //     <Navbar.Brand>
    //       <img src='./Pics/logo.png' />
    //     </Navbar.Brand>
    //     <Navbar.Toggle className='toggle' aria-controls='basic-navbar-nav' />
    //     <Navbar.Collapse id='basic-navbar-nav'>
    //       <Nav className='me-auto'>
    //         <Nav.Link>Home</Nav.Link>
    //         <Nav.Link>Projects</Nav.Link>
    //         <Nav.Link>Resume</Nav.Link>
    //         <Nav.Link>Contact</Nav.Link>
    //         <Nav.Link>Social</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
        
    //   </Container>
    // </Navbar>
  )
}
