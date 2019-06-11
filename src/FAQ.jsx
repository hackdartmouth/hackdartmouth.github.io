import React, {Component} from 'react';
import './FAQ.css';

class FAQ extends Component {
	constructor(props){
		super(props);
        this.state = {
            backgroundImg: "faq.png",
            title: "FAQ",
            text: "few fe wufj oiewjiojiw jfew af ewaf ewafewa fewa fewa fewaf ewaffwqfqg gwra waf feiwo jfieow jfoiewajfoiewaj foiewa jfoiew jafoiewa joig rjeio greio gjeiao gjiojwaiofe jwiof ejigorejoa ajfieo wajfieowaj fieoa"
        }
    }
    render = () =>{
        return(
            <div className="faqContainer">
                <img className="backgroundImg" src={require(`./img/${this.state.backgroundImg}`)} alt="Background"/>
                <div className="faqText">
                    <p className="faqTitle">{this.state.title}</p>
                    <p className="faqBody">{this.state.text}</p>
                </div>
            </div>
        );
    }

}
export default FAQ;