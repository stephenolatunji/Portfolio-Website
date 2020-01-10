import React from 'react';
import Container from '@material-ui/core/Container';
import Profile from '../Assets/profile.jpg';
import { Segment, Image, Divider } from 'semantic-ui-react'

const Home = () => {
    return(
        <div>
            <Container fluid
                style={{
                    backgroundColor: '#aaa',
                    marginTop: '60px',

                }}>
                <Segment
                    style={{
                        padding: 50,
                    }}>
                    <Image src={Profile} size='medium' floated='left' circular />
                    <div align='center' >
                        <h2 fontFamily='fantasy'><strong>Hello!</strong></h2>
                        <h3>I am Stephen Olatunji</h3>
                    </div>
                </Segment>
                <Divider />
            </Container>
            <Divider />
        </div>
        
    )
};
export default Home;
