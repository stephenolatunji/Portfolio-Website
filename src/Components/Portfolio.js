import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Project from './Projects'

class Portfolio extends Component {

    render(){
        return(
            <div>
                <Header />
                <Home />
                <About />
                <Project />
            </div>
        )
    }
};
export default Portfolio;