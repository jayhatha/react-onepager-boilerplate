import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';

const Element = Scroll.Element;

const Wrapper = styled.footer`
  background: MediumOrchid;
  padding: 5vh;
  box-sizing: border-box;
  margin: 0 auto;
`;

class Footer extends Component {
  render() {
    return (
      <Element name="footer-element">
      <Wrapper>
        <h2>Footer here, please.</h2>
      </Wrapper>
    </Element>
    );
  }
}

export default Footer;
