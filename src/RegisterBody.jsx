import React from 'react';
import PropTypes from 'prop-types';
import './RegisterBody.css';
import { Button } from 'react-bootstrap';
import * as typeformEmbed from "@typeform/embed";
import { ReactTypeformEmbed } from 'react-typeform-embed';

class RegisterBody extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);

    this.form = null;
  }

  componentDidMount() {
    if (this.form) {
      typeformEmbed.makeWidget(this.form, 'https://hackdartmouth.typeform.com/to/foXT8j', {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
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
        {/*<h2 className="registerTitle">{`Register for ${this.props.bodyContent.event}`}</h2>*/}
        <h5 className="registerSubTitle">{`${this.props.bodyContent.date} | ${this.props.bodyContent.location}`}</h5>
        <p className="registerDetails">{this.props.bodyContent.info}</p>
        <div ref={(form) => this.form = form} style={{width: '100%', height: '350px', marginTop: '2.5em'}} />
        {/* <Button variant="outline-light" className="registerButton" onClick={this.openForm}>
          Join
        </Button> */}
      </div>
    );

  }
}
RegisterBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodyContent: PropTypes.object.isRequired,
};

export default RegisterBody;
