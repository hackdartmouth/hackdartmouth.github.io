import React, { Component, Fragment } from 'react';
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
        <Fragment>
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
        <a id="mlh-trust-badge" style={{display:"block",maxWidth:"100px", minWidth:"60px", position:"fixed", right:"75px", top:"0", width:"10%", zIndex:"10000"}} href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=gray" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-gray.svg" alt="Major League Hacking 2020 Hackathon Season" style={{width:"100%"}}/></a>
        </Fragment>
      );
    }
}
export default UserNav;
