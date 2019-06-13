import React, { Component, Fragment } from 'react';
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
    <ReactPageScroller>
      <Header />
      <UserNav />
      {pages.map(page => (
        <Fragment key={page.key}>
          <Seperator id={page.href} />
          <ContentPage
            dictKey={page.key}
            backgroundImg={page.backgroundImg}
            title={page.pageTitle}
            bodyContent={page.bodyContent}
          />
        </Fragment>
      ))}
    </ReactPageScroller>
  )
}

export default App;
