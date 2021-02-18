import React, { Fragment } from 'react';
import Favicon from 'react-favicon';
import DocumentTitle from 'react-document-title';
import ReactGA from 'react-ga';
import './App.css';
import { configureAnchors } from 'react-scrollable-anchor';
import ContentPage from './ContentPage';
import pages from './data/pages';
import Header from './Header';
import UserNav from './UserNav';
import Footer from './Footer';

configureAnchors({ scrollDuration: 250 });
const socialLinks = [
  'https://www.facebook.com/hackDartmouth',
  'https://www.instagram.com/hackdartmouth/',
  'https://www.linkedin.com/company/6588725?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A6588725%2Cidx%3A1-1-1%2CtarId%3A1439363530321%2Ctas%3Ahackdartmouth',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
];
function initializeReactGA() {
  ReactGA.initialize('UA-60214500-2');
  ReactGA.pageview('/mainpage');
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    initializeReactGA();
  }

  render() {
    return (
      <div>
        <DocumentTitle title='HackDartmouth' />
        <Favicon url={require(`./img/favicon.ico`)} />
        <Header />
        <UserNav />
        {pages.map((page,i) => {
          if (page.visible) {
            return (
              <Fragment key={page.key}>
                <ContentPage
                  dictKey={page.key}
                  sectionColor={page.sectionColor}
                  title={page.pageTitle}
                  titleColor={page.titleColor}
                  bodyContent={page.bodyContent}
                  href={page.href}
                  first={i === 0}
                  last={i === 4}
                />
              </Fragment>
            );
          }
        })}
        <Footer socialLinks={socialLinks} />
      </div>
    );
  }
}
