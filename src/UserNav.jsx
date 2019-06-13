import React, { Component } from 'react';
import './UserNav.css';
import { Navbar, Nav } from 'react-bootstrap';
import pages from './data/pages';

class UserNav extends Component {
    state = {
      brandImg: 'treeBrand.png',
    }

    renderNavLinks = () => pages.map(page => (
      <Nav.Link key={page.href} className={page.visible ? 'navLink' : 'hidden'} href={`#${page.href}`}>{page.navText}</Nav.Link>
    ))

    render = () => {
      const { brandImg } = this.state;
      return (
        <Navbar collapseOnSelect sticky="top" bg="light" expand="lg">
          <Navbar.Brand href="#home"><img height="30" className="brandImg" src={require(`./img/pages/${brandImg}`)} alt="brand" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {this.renderNavLinks()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
}
export default UserNav;
