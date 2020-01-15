import React, { Component } from 'react';
import './UserNav.css';
import { Navbar, Nav } from 'react-bootstrap';
import pages from './data/pages';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'


class UserNav extends Component {
    state = {
      brandImg: 'treeBrand.png',
    }

    renderNavLinks = () => pages.map(page => (
      <Link activeClass="active" className="test1" to={page.href} spy={true} smooth={true} duration={500} offset={-58} >
        <Nav.Link key={page.href} className={page.visible ? 'navLink' : 'hidden'}>{page.navText}</Nav.Link>
      </Link>
    ))

    render = () => {
      const { brandImg } = this.state;
      return (
        <Navbar collapseOnSelect sticky="top" bg="light" expand="lg">
          <a onClick={() => animateScroll.scrollToTop()}>
          <Navbar.Brand><img height="30" className="brandImg" src={require(`./img/pages/${brandImg}`)} alt="brand" /></Navbar.Brand>
          </a>
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
