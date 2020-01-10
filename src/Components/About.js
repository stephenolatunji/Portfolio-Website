import React from 'react';
import { Container, Grid, Icon, Segment, Card } from 'semantic-ui-react';
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
                        <Card
                            color='orange'
                            header='Stephen Olatunji'
                            meta='Software Developer'
                            description='I am a Fullstack Software developer. I am passionate about writing clean codes and building working softwares.'
                            
                            style={{
                                padding: 20,
                                fontFamily: 'monospace'
                            }}
                        />
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
                                </div >
                                
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className='Icons'>
                                    <Icon name='js' size='large' color='' />
                                    <span>Vanilla JavaScript</span>
                                </div>
                                <div className='Icons'>
                                    <Icon name='' size='big' color='' />
                                    <span>mongoDB</span>
                                </div>
                                <div className='Icons'>
                                    <Icon name='' size='big' color='' />
                                    <span>Express Js</span>
                                </div>
                                <div className='Icons'>
                                    <Icon name='' size='big' color='' />
                                    <span>Git</span>
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