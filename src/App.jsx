import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import './App.css';
import ContentPage from './ContentPage';
import pages from './data/pages';
import Header from './Header';
import Seperator from './Seperator';
import UserNav from './UserNav';


// import SponsorsBody from './SponsorsBody';
// import RegisterBody from './RegisterBody';
class App extends Component {
  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }


  render = () => (
    // eslint-disable-next-line no-return-assign
    <ReactPageScroller ref={c => this.reactPageScroller = c}>
      <Header />
      <UserNav />
      {pages.map(page => (
        <div key={page.key}>
          <Seperator id={page.href} />
          <ContentPage
            dictKey={page.key}
            backgroundImg={page.backgroundImg}
            title={page.pageTitle}
            bodyContent={page.bodyContent}
          />
        </div>
      ))}
    </ReactPageScroller>
  )
}

export default App;
