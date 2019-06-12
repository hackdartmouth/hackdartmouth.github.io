import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import UserNav from './UserNav';
import ContentPage from './ContentPage';
import pages from './data/pages.js';
// import SponsorsBody from './SponsorsBody';
// import RegisterBody from './RegisterBody';
class App extends Component {
  render = () => (
    <>
      <Header />
      
      {pages.map(page => (
        <ContentPage key={page.key} backgroundImg={page.backgroundImg} title={page.pageTitle} bodyContent={page.bodyContent} />
      ))}
    </>
  )
}

export default App;
