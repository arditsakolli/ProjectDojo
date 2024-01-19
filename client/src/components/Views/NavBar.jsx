import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import HamburgerMenu from '../HamburgerMenu';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <HamburgerMenu/>
      <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Info</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary"></Button>
    </ButtonGroup>
      </Container>
    </Navbar>
  );
}

export default NavBar;