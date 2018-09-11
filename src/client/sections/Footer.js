import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';

const Element = Scroll.Element;

const Wrapper = styled.section `
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
      <footer>
        <h2>Footer here, please.</h2>
      </footer>
      </Wrapper>
    </Element>
    );
  }
}

export default Footer;
