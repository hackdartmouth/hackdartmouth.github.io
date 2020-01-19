import React from 'react';
import PropTypes from 'prop-types';
import './RegisterBody.css';
import * as typeformEmbed from "@typeform/embed";

class RegisterBody extends React.Component {
  constructor(props) {
    super(props);

    this.form = null;
  }

  componentDidMount() {
    if (this.form) {
      typeformEmbed.makeWidget(this.form, this.props.bodyContent.typeformUrl, {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
  }

  render() {
    return (
      <div>
        <h1 className="registerSubTitle">{`${this.props.bodyContent.date} | ${this.props.bodyContent.location}`}</h1>
        <p className="registerDetails">{this.props.bodyContent.info}</p>
        <div ref={(form) => this.form = form} style={{width: '100%', height: '300px', marginTop: '2.5em'}} />
      </div>
    );
  }
}
RegisterBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.object.isRequired,
};

export default RegisterBody;
