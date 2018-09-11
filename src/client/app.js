import React, {Component} from 'react';
import Navbar from "./sections/Navbar";
import Header from "./sections/Header";
import Body from "./sections/Body";
import Footer from "./sections/Footer";

class App extends Component {
    render() {
        return (
            <div className='app'>
            <div>
                <Navbar /> 
                </div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default App;