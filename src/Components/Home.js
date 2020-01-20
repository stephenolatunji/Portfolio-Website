import React from 'react';
import Container from '@material-ui/core/Container';
import Coder from '../Assets/coder.jpg';
import '../Components/Index.css';
import {Button} from 'semantic-ui-react';



const Home = () => {
    return(
        <Container fluid
            style={{
                backgroundImage:`url(${Coder})`,
                marginTop: '60px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '200px 0'
            }}>
            <div style={{
                marginLeft: 10,
                fontFamily: 'monospace',
                color: 'white',
                fontSize: '20px'
            }}>
                <p><strong>Hello!</strong></p>
                <p>I am Stephen Olatunji <br />
                Full-Stack Software Developer
                </p>
            <Button inverted color='violet'><a href='mailto:olatunjistephen02@gmail.com'>Contact me</a></Button>
            <Button inverted color='orange'><a href='https://docs.google.com/document/d/1edFePeIxo5oGEETwIF2yjKBkWLhjhdTJ2SeEJaAGPoY/edit?usp=sharing'>My Resume</a></Button>
            </div>
        </Container>
    )
};
export default Home;
