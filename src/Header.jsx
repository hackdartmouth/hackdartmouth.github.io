import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
	constructor(props){
		super(props);
        this.state = {
            title: "HackDay III",
            date: "October 5, 2019",
            location: "Sarner Underground",
            backgroundImg: "header.png",

        };
        
    }
    render = () =>{
        return(
            <div className="headerContainer">
                <img className="backgroundImg" src={require(`./img/${this.state.backgroundImg}`)} alt="Background"/>
                <div className="text">
                    <p className="title">{this.state.title}</p>
                    <p className="info">{`${this.state.date} | ${this.state.location}`}</p>
                </div>
            </div>
        );
    }
}

export default Header;