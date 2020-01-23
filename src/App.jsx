import React, { Component, Fragment } from 'react';
import './App.css';
import { configureAnchors } from 'react-scrollable-anchor';
import ContentPage from './ContentPage';
import pages from './data/pages';
import Header from './Header';
import UserNav from './UserNav';
import Favicon from 'react-favicon';

configureAnchors({ scrollDuration: 250 });

export default class App extends React.Component {
  constructor(props) {
    super(props)
    document.title = 'HackDartmouth'
  }

  render() {
    return (
      <div>
        <Favicon url={require(`./img/favicon.ico`)} />
        <Header />
        <UserNav />
        {pages.map((page,i) => (
          <Fragment key={page.key}>
            <ContentPage
              dictKey={page.key}
              sectionColor={page.sectionColor}
              title={page.pageTitle}
              titleColor={page.titleColor}
              bodyContent={page.bodyContent}
              href={page.href}
              first={i==0}
              last={i==pages.length-1}
            />
          </Fragment>
        ))}
      </div>
    )
  }
}
