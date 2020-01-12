import React from 'react';
import PropTypes from 'prop-types';
import './RegisterBody.css';
import { Button } from 'react-bootstrap'
import * as typeformEmbed from "@typeform/embed"

class RegisterBody extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    typeformEmbed.makePopup(
      'https://hackdartmouth.typeform.com/to/foXT8j',
      {
        mode: 'popup',
        autoOpen: true,
        hideScrollbars: true,
        onSubmit: function () {
          console.log('Typeform successfully submitted')
        }
      }
    )
  }
  
  render() {
    return (
      <div>
        <h2 className="registerTitle">{`Register for ${this.props.bodyContent.event}`}</h2>
        <h5 className="registerSubTitle">{`${this.props.bodyContent.date} | ${this.props.bodyContent.location}`}</h5>
        <p className="registerDetails">{this.props.bodyContent.info}</p>
        <Button variant="outline-light" className="registerButton" onClick={this.openForm}>
          Join
        </Button>
      </div>
    );
  }
}
RegisterBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.object.isRequired,
};

export default RegisterBody;
