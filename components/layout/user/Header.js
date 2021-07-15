//@ts-check
import Dropdown from 'react-bootstrap/Dropdown'
import {Navbar ,Nav , InputGroup ,Form,FormControl, Button, Container} from 'react-bootstrap'
import Icon from './Icon'
import Link from 'next/link'

export default function  header (){
    return (
<div className= 'fixed-top '>
<Icon/>
<Navbar   collapseOnSelect  bg="success" expand="sm"  variant="dark">
      <Container  >
        <Navbar.Toggle aria-controls ='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>  
        <Dropdown >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <img className="border rounded-circle img-profile" src="../../assets/img/user8-128x128.jpg" style={{width: 30, height: 30}} />
     
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Link href='/user/gantipassword'><Dropdown.Item>Ganti Password</Dropdown.Item></Link>
    <Link href='/'><Dropdown.Item href="/">Log Out</Dropdown.Item></Link>
  </Dropdown.Menu>
</Dropdown>     
            <Navbar.Brand href="home">PERPUSKU</Navbar.Brand>
            <Nav className="mr-auto">
      <Nav.Link href="/user/home">Home</Nav.Link>
      <Nav.Link href="/user/pinjaman">Pinjaman</Nav.Link>
      <Nav.Link href="/user/cari">Buku</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <form>
    <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
    </InputGroup.Prepend>
    <Link href="/user/cari"><Button className="btn btn-dark">Cari</Button></Link>
  </InputGroup>
  </form>
</Container>
</Navbar>
</div>
 
    
     

    )
}