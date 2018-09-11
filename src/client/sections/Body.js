import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';

const Element = Scroll.Element;

const Wrapper = styled.section `
  background: PaleTurquoise;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -ms-flex-align: center;
      align-items: center;
  padding: 20vh;
`;

class Body extends Component {
  
  render() {
    return (
      <Element name="body-element">
      <Wrapper>
        <h1>This is a body section.</h1>
        <p>Lorem Khaled Ipsum is a major key to success. They never said winning was easy. Some people can’t handle success, I can. Fan luv. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. To succeed you must believe. When you believe, you will succeed. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. Bless up. Learning is cool, but knowing is better, and I know the key to success.</p>
        <p>Bless up. Celebrate success right, the only way, apple. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. Another one. Let’s see what Chef Dee got that they don’t want us to eat. Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there.</p>
      </Wrapper>
      </Element>
    );
  }
}

export default Body;
