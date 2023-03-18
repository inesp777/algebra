import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>Main Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link to='/menu'>Menu</Link> | 
                        <Link to='/deserts'>Deserts</Link> | 
                        <Link to='/salads'>Salads</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}