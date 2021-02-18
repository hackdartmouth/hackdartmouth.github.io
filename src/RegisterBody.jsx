import React from 'react';
import PropTypes from 'prop-types';
import './RegisterBody.css';
import * as typeformEmbed from "@typeform/embed";
import { isMobile } from 'react-device-detect';

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
        opacity: 0,
      });
    }
  }

  render() {
    return (
      <div>
        <h1 className="registerSubTitle">{this.props.bodyContent.date}</h1>
        <p className="registerDetails">{this.props.bodyContent.info}</p>
        <div ref={(form) => this.form = form} style={{width: '100%', height: isMobile ? '10em' : '20em', marginTop: '1em'}} />
      </div>
    );
  }
}
RegisterBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.object.isRequired,
};

export default RegisterBody;
