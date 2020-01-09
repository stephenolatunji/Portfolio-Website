import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Project from './Projects'
import Footer from './Footer';

class Portfolio extends Component {

    render(){
        return(
            <div>
                <Header />
                <Home />
                <About />
                <Project />
                <Footer />
            </div>
        )
    }
};
export default Portfolio;