import React from 'react';
import PropTypes from 'prop-types';
import './FAQBody.css';
import Markdown from 'markdown-to-jsx';

// generate function-style blocks for QA
function styleFuncBlock(title, text) {
  if (!(title || text)) {
    return null;
  }

  return (
    <div className="code">
      <h3 className="QATitle">
        <span className="keyword">func </span>
        <span className="function">{title.toLowerCase().replace(/ /g, "_").replace("?", "")}</span>
        <span className="syntax">() {String.fromCharCode(123)}</span>
      </h3>
      <p className="QAText">
        <Markdown>
          {text}
        </Markdown>
      </p>
      <p className="syntax">{String.fromCharCode(125)}</p>
    </div>
  )
}

export default class FAQBody extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      qa: this.props.bodyContent
    }
  }

  updateQAList() {
    let width = window.innerWidth;
    var filler;

    if (width > 1999) {
      filler = (this.props.bodyContent % 4 == 0) ? 0 : 4 - (this.props.bodyContent.length % 4);
    } else if (width > 899) {
      filler = (this.props.bodyContent % 3 == 0) ? 0 : 3 - (this.props.bodyContent.length % 3);
    } else if (width > 599) {
      filler = (this.props.bodyContent % 2 == 0) ? 0 : 2 - (this.props.bodyContent.length % 2);
    }

    console.log('re-doing filler cells');
    // add filler
  }

  componentDidMount() {
    this.updateQAList();
    window.addEventListener('resize', this.updateQAList.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateQAList.bind(this));
  }

  render() {
    return (
      <div>
        <div className="lineNumbers"></div>
        <div className="imports">
          <div className="code">
            <p>
              <span className="specialKeyword">import </span>
              <span className="specialSyntax">swag</span>
            </p>
            <p>
              <span className="specialKeyword">import </span>
              <span className="specialSyntax">hacking</span>
            </p>
            <p>
              <span className="specialKeyword">import </span>
              <span className="specialSyntax">questions</span>
            </p>
            <br></br>
          </div>
        </div>
        <div className="gridContainer">
          {this.props.bodyContent.map(QA => (
            <div className="QABlock">
              {styleFuncBlock(QA.title, QA.text)}
            </div>
          ))}
        </div>
      </div>
    )
  }
};
FAQBody.propTypes = {
  bodyContent: PropTypes.shape({
    col1: PropTypes.array.isRequired,
    col2: PropTypes.array.isRequired,
  }).isRequired,
};
