import React from 'react';
import './Header.css';
import { Button } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'
import Particles from 'react-particles-js';

const headerInfo = {
  title: 'HackDartmouth VI',
  date: 'April 18-19th, 2020',
  location: 'Thayer School of Engineering',
  backgroundImg: 'header.png',
  sectionColor: '#5f936a',
};
const Header = () => (
  <>
    <div className="headerContainer" style={{ backgroundColor: headerInfo.sectionColor }}>
		<div style={{ position: "absolute", width: '100%' }}>
			<Particles 
				height='100vh'
				width='100%'
				params={{
					"particles": {
						"number": {
							"value": 160,
							"density": {
								"enable": true
							}
						},
						"size": {
							"value": 10,
							"random": true
						},
						"move": {
							"direction": "bottom",
							"out_mode": "out"
						},
						"line_linked": {
							"enable": false
						}
					},
					"interactivity": {
						"events": {
							"hover": {
								"enable": false,
								"mode": "repulse"
							}
						},
						"modes": {
							"remove": {
								"particles_nb": 10
							}
						}
					}
				}}/>
		</div>
		<div className="textBigContainer">
			<div className="textContainer">
				<p className="title">{headerInfo.title}</p>
				<p className="announcement">Hi Hackers,</p>
				<p className="announcement">We’re sorry to announce that Dartmouth’s sixth annual hackathon will be canceled due to developments surrounding the coronavirus.</p>
				<p className="announcement">We understand that many of you have been looking forward to this event and were wondering whether HackDartmouth would take place online. Unfortunately, due to the major infrastructure changes and the tight timeline this would require, we don’t believe that we have the capacity to deliver participants a smooth and enjoyable HackDartmouth experience online.</p>
				<p className="announcement">For the past few months, the HackDartmouth team has been busy preparing for the event, from designing swag to amassing sponsors and spreading the word about the event. This decision was difficult for us but one that was necessary considering the likely cancellation of Dartmouth’s in-person spring term, recent Dartmouth guidelines restricting group events, and the CDC’s suggestions on restricting large gatherings. Among these confusing and chaotic times, please feel free to reach out to any of us with questions, or if you’re just looking for someone to talk to.</p>
				<p className="announcement">Best,</p>
				<p className="announcement">The HackDartmouth Team</p>
				
				
				{/* <p className="info">{`${headerInfo.date} | ${headerInfo.location}`}</p>
				<Link activeClass="active" className="test1" to={"register"} spy={true} smooth={true} duration={500} offset={-58}>
					<Button variant="outline-light" className="registerButton" style={{ backgroundColor: "#ffffff", borderStyle: "none", color: "#5f936a", fontWeight: "bold"}}>
					Register!
					</Button>
				</Link> */}
			</div>
		</div>
    </div>
  </>
 

  
);

export default Header;
