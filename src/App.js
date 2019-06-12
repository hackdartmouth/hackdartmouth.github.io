import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import UserNav from './UserNav';
import ContentPage from './ContentPage';
import AboutBody from './AboutBody';
import FAQBody from './FAQBody';
import * as Pages from './data/pages.json';
//import SponsorsBody from './SponsorsBody';
//import RegisterBody from './RegisterBody';

class App extends Component {
  render = () => {
    return (
      <>
        <Header/>
        <UserNav/>
        {Pages.map((page, i)=>{
          return(
            <ContentPage bodyComponent={page.bodyComponent} backgroundImg={page.backgroundImg} title={page.pageTitle} bodyContent={page.bodyContent}/>
          );
        })}
      </>
    );
  }
}

export default App;
