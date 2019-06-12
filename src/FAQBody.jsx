import React, {Component} from 'react';
import './FAQBody.css';
import {Container, Row, Col} from 'react-bootstrap';

class FAQBody extends Component {
    render = () =>{
        const {col1, col2} = this.props.bodyContent;
        return(
            <Container className="colContainer">
                <Row>
                    <Col>
                        {col1.map((QA, i)=>{
                            return(
                                <div>
                                    <h3 className="QATitle">{QA.title}</h3>
                                    <p className="QAText">{QA.text}</p>
                                </div>
                            )
                        })}
                    </Col>
                    <Col>
                        {col2.map((QA, i)=>{
                            return(
                                <div>
                                    <h3 className="QATitle">{QA.title}</h3>
                                    <p className="QAText">{QA.text}</p>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default FAQBody;