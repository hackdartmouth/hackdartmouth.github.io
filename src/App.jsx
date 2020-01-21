import React, { Component, Fragment } from 'react';
import './App.css';
import { configureAnchors } from 'react-scrollable-anchor';
import ContentPage from './ContentPage';
import pages from './data/pages';
import Header from './Header';
import UserNav from './UserNav';
import Favicon from 'react-favicon';
import DocumentTitle from 'react-document-title';

configureAnchors({ scrollDuration: 250 });

const App = () => (
  <div>
    <DocumentTitle title='HackDartmouth' />
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
);

export default App;
