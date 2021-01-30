import React from 'react';
// import PropTypes from 'prop-types';
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
      <p className="QAText code">
        <Markdown>
          {text}
        </Markdown>
      </p>
      <p className="syntax">{String.fromCharCode(125)}</p>
    </div>
  );
}

const isFiller = faq => !(faq.title.length === 0 || faq.text.length === 0);

export default class FAQBody extends React.Component {
  constructor(props) {
    super();

    this.state = {
      bodyContent: props.bodyContent,
    };
  }

  componentDidMount() {
    this.updateQAList();
    window.addEventListener('resize', this.updateQAList.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateQAList.bind(this));
  }

  updateQAList() {
    const { bodyContent } = this.props;
    const width = window.innerWidth;
    let filler;

    if (width > 1999) {
      filler = (bodyContent % 4 === 0) ? 0 : 4 - (bodyContent.length % 4);
    } else if (width > 899) {
      filler = (bodyContent % 3 === 0) ? 0 : 3 - (bodyContent.length % 3);
    } else if (width > 599) {
      filler = (bodyContent % 2 === 0) ? 0 : 2 - (bodyContent.length % 2);
    }

    const newQA = bodyContent.filter(faq => isFiller(faq));
    for (let i = 0; i < filler; i += 1) {
      newQA.push({ title: '', text: '' });
    }

    this.setState({ bodyContent: newQA });
  }

  render() {
    const { bodyContent } = this.state;

    return (
      <div>
        <div className="lineNumbers" />
        <div className="imports code">
          <span className="specialKeyword">import </span>
          <span className="specialSyntax">swag</span>
          <br />
          <span className="specialKeyword">import </span>
          <span className="specialSyntax">hacking</span>
          <br />
          <span className="specialKeyword">import </span>
          <span className="specialSyntax">questions</span>
          <br />
          <br />
        </div>
        <div className="gridContainer">
          {bodyContent.map(QA => (
            <div className="QABlock">
              {styleFuncBlock(QA.title, QA.text)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// FAQBody.propTypes = {
//   bodyContent: PropTypes.array(PropTypes.shape{
//     col1: PropTypes.array.isRequired,
//     col2: PropTypes.array.isRequired,
//   }).isRequired,
// };
