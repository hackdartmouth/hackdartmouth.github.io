import React, {Component} from 'react';
import './UserNav.css';
import {Navbar, Nav} from 'react-bootstrap';
import pages from './data/pages.js';

class UserNav extends Component {
	static state = {
            brandImg: "treeBrand.png",
    }
    renderNavLinks = () => {
        return pages.map((page, i)=>{
            return(
                <Nav.Link className={page.visible ? "navLink":"hidden"} href={`#${page.href}`}>{page.navText}</Nav.Link>
            );
            });
    }
    render = () => {
        return(
        <Navbar sticky="top" bg="light" expand="lg">
                <Navbar.Brand href="#home"><img height="30" className="brandImg" src={require(`./img/${this.state.brandImg}`)} alt="brand"/></Navbar.Brand>
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