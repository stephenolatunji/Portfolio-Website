import React from 'react';
import {Card, Container, Grid, Icon, Segment } from 'semantic-ui-react';
import './Index.css';

 


const About = () => {
    return(
        <Container fluid style={{
            marginTop: '200px',
            backgroundColor: '#aaa'
        }}>
            <Segment
                style={{
                    padding: 50,
                    margin: 20,
                }}>
                <Grid>
                    <Grid.Column width={8}>
                        <h1>About Me</h1>
                        <Card.Group>
                            <Card color='red'
                                header='Stephen Olatunji'
                                meta='Software Developer'
                                description={[
                                    'I am a Fullstack Software Developer. ',
                                    'I am passionate about writing clean codes and developing working softwares'
                                ]}
                                style={{
                                    // padding: 90
                                }} />
                        </Card.Group>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h1>Skills</h1>
                        <Grid>
                            <Grid.Column width={8}>
                                <div className='Icons'>
                                    <Icon name='react' size='big' color='green ' />
                                    <span>ReactJs</span>
                                </div>
                                <div className='Icons'>
                                    <Icon name='html5' size='big' color='' />
                                    <span>HTML5</span>
                                </div>
                                <div className='Icons'>
                                    <Icon name='css3' size='big' color='' />
                                    <span>css3</span>
                                </div>
                                <div className='Icons'>
                                    <Icon name='node js' size='big' color='' />
                                    <span>nodeJs</span>
                                </div>
                                
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className='Icons'>
                                    <Icon name='js' size='large' color='' />
                                    <span>Vanilla JavaScript</span>
                                </div>
                                <div className='Icons'>
                                    <Icon name='' size='big' color='' />
                                </div>
                                <div className='Icons'>
                                    <Icon name='' size='big' color='' />
                                </div>
                                <div className='Icons'>
                                    <Icon name='' size='big' color='' />
                                </div>
                                
                            </Grid.Column>
                        </Grid>
                        
                    </Grid.Column>
                </Grid>
            </Segment>
            
        </Container>
            
    )
    
};

export default About;