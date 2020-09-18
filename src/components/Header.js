import React from 'react';
import { Container } from "react-bootstrap";
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return ( 
      <Container fluid className="App-header">
        <h2 className="hey">
          Hey there, I'm <span>Edison Waweru</span>
          <br/>
          I am a Software Engineer.    
        </h2>
        <a href="/#" className="my-work">
          View my work &nbsp;  
          <i className="fas fa-angle-double-right arrow"></i>
        </a> 
      </Container>
     );
  }
}
 
export default Header;
