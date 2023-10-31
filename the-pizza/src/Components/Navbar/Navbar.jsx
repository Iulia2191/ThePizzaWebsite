import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.scss';


export function Header() {
  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = isScrolling ? 'navbar-nav fixed-top scrolling' : 'navbar-nav fixed-top';

  return (
    <Navbar expand='lg' className={navbarClasses}>
      <Container>
        <Navbar.Brand className='my-0' data-bs-theme="light" href='#home'as={Link} to='/'>
          <img
            alt='Logo'
            src='./img/logo.jpg'
            width='80'
            height='80'
            className='d-inline-block align-top rounded-circle'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='nav-menu' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto d-flex justify-content-end text-light'>
            <Nav.Link className='text-light' href='#link'as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className='text-light' href='#link' as={Link} to='/menu'>Menü</Nav.Link>
            <Nav.Link className='text-light' href='#link'as={Link} to='/about'>Über Uns</Nav.Link>
            <Nav.Link className='text-light' href='#link' as={Link} to='/gallery'>Galerie</Nav.Link>
            <Nav.Link className='text-light' href='#link' as={Link} to='/contact'>Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
