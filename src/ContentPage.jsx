import React, {Component} from 'react';
import './ContentPage.css';
import AboutBody from './AboutBody';

class ContentPage extends Component {
    render = () =>{
        return(
            <div className="pageContainer">
                <img className="backgroundImg" src={require(`./img/${this.props.backgroundImg}`)} alt="Background"/>
                <div className="pageText">
                    <p className="pageTitle">{this.props.title}</p>
                    <this.props.bodyComponent bodyContent={this.props.bodyContent}/>
                </div>
            </div>
        );
    }

}
export default ContentPage;