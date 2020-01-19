import React, { Component, Fragment } from 'react';
import './App.css';
import { configureAnchors } from 'react-scrollable-anchor';
import ContentPage from './ContentPage';
import pages from './data/pages';
import Header from './Header';
import UserNav from './UserNav';

configureAnchors({ scrollDuration: 250 });


// import SponsorsBody from './SponsorsBody';
// import RegisterBody from './RegisterBody';
const App = () => (
  <div>
    <Header />
    <UserNav />
    {pages.map(page => (
      <Fragment key={page.key}>
        <ContentPage
          dictKey={page.key}
          sectionColor={page.sectionColor}
          title={page.pageTitle}
          titleColor={page.titleColor}
          bodyContent={page.bodyContent}
          href={page.href}
        />
      </Fragment>
    ))}
  </div>
);

export default App;
