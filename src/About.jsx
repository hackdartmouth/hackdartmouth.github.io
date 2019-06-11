import React, {Component} from 'react';
import './About.css';

class About extends Component {
	constructor(props){
		super(props);
        this.state = {
            backgroundImg: "about.png",
            title: "ABOUT",
            text: "few fe wufj oiewjiojiw jfew af ewaf ewafewa fewa fewa fewaf ewaffwqfqg gwra waf feiwo jfieow jfoiewajfoiewaj foiewa jfoiew jafoiewa joig rjeio greio gjeiao gjiojwaiofe jwiof ejigorejoa ajfieo wajfieowaj fieoa"
        }
    }
    render = () =>{
        return(
            <div className="aboutContainer">
                <img className="backgroundImg" src={require(`./img/${this.state.backgroundImg}`)} alt="Background"/>
                <div className="aboutText">
                    <p className="aboutTitle">{this.state.title}</p>
                    <p className="aboutBody">{this.state.text}</p>
                </div>
            </div>
        );
    }

}
export default About;