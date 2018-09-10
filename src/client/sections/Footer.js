import React, { Component } from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

class Footer extends Component {
  render() {
    return (
      <Element name="footer-element">
      <footer>
        <h2>Footer here, please.</h2>
      </footer>
    </Element>
    );
  }
}

export default Footer;
