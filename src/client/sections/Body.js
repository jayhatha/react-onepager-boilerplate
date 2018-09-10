import React, { Component } from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;


class Body extends Component {
  
  render() {
    return (
      <Element name="body-element">
        <h1>This is a body section.</h1>
      </Element>
    );
  }
}

export default Body;
