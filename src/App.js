import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import UserNav from './UserNav';
import About from './About';
import FAQ from './FAQ';
class App extends Component {
	constructor(props){
    super();
    this.state = {
      pages: [
        {
            visible: true,
            navText: "ABOUT",
            href: "about"
    
        },
        {
            visible: true,
            navText: "FAQ",
            href: "faq"
    
        },
        {
            visible: true,
            navText: "SPONSORS",
            href: "sponsors"
        },
        {
            visible: true,
            navText: "REGISTER",
            href: "register"
        }
      ],
    }
  }
  render = () => {
    return (
      <>
        <Header/>
        <UserNav pages={this.state.pages}/>
        <About/>
        <FAQ/>
      </>
    );
  }
}

export default App;
