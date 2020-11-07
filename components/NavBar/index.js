import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg='dark' variant="dark" expand='lg'>
      <Navbar.Brand href='#home'>Would You Rather</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Leaderboard</Nav.Link>
        </Nav>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>Answered</Nav.Link>
          <Nav.Link href='#home'>Unasnswered</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
