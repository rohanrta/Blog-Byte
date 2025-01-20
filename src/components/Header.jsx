import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Navbar style={{zIndex:'1',position:'fixed'}} className="bg-body-tertiary w-100">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="data:image/png;base64,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"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Blog Byte
          </Navbar.Brand></Link>
          <Nav className="fw-bolder ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header