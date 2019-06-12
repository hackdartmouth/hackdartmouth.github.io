import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import UserNav from './UserNav';
import ContentPage from './ContentPage';
import pages from './data/pages.js';
import Seperator from './Seperator';
// import SponsorsBody from './SponsorsBody';
// import RegisterBody from './RegisterBody';
class App extends Component {
  render = () => (
    <>
      <Header />
      <UserNav/>
      {pages.map((page, i) => (
        <>
          <Seperator id={page.href}/>
          <ContentPage dictKey={page.key} backgroundImg={page.backgroundImg} title={page.pageTitle} bodyContent={page.bodyContent} />
          
        </>
      ))}
    </>
  )
}

export default App;
