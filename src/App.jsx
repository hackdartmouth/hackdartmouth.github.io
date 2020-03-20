import React, { Component, Fragment } from 'react';
import './App.css';
import { configureAnchors } from 'react-scrollable-anchor';
import ContentPage from './ContentPage';
import pages from './data/pages';
import Header from './Header';
import UserNav from './UserNav';
import Favicon from 'react-favicon';
import DocumentTitle from 'react-document-title';
import ReactGA from 'react-ga';

configureAnchors({ scrollDuration: 250 });

function initializeReactGA() {
  ReactGA.initialize('UA-60214500-2');
  ReactGA.pageview('/mainpage');
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    initializeReactGA()
  }

  render() {
    return (
      <div>
        <DocumentTitle title='HackDartmouth' />
        <Favicon url={require(`./img/favicon.ico`)} />
        <Header />
        <UserNav />
        {pages.map((page,i) => {
          if(page.visible){
          return (
            <Fragment key={page.key}>
              <ContentPage
                dictKey={page.key}
                sectionColor={page.sectionColor}
                title={page.pageTitle}
                titleColor={page.titleColor}
                bodyContent={page.bodyContent}
                href={page.href}
                first={i==0}
                last={i==3}
              />
            </Fragment>
          )
        }})}
      </div>
    )
  }
};
