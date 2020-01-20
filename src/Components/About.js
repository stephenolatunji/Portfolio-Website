import React from 'react';
import { Container, Grid, Card, Image } from 'semantic-ui-react';
import Mern from '../Assets/MERN.jpg';
import Mongod from '../Assets/Mongod.png';
import Express from '../Assets/Express.png';
import Git from '../Assets/Git.png';
import Bootstrap from '../Assets/bootstrap.jpeg';
import CSS from '../Assets/CSS.png';
import Node from '../Assets/Node.png';
import Logo from '../Assets/React.png';
import HTML5 from '../Assets/HTML.png'


const About = () => {
    return(
        <div>
            <Container fluid style={{
                backgroundColor: '#fd8508',
                padding: 30,
            }}>
                <h1 style={{textAlign: 'center'}}>About Me</h1>
                <Grid stackable columns={2} style={{padding: 30}}>
                    <Grid.Column>
                        <Image src={Mern} fluid />
                    </Grid.Column>
                    <Grid.Column>
                        <Card
                            centered
                            color='orange'
                            header='Stephen Olatunji'
                            meta='Software Developer'
                            description='I am a Fullstack Software developer. I am passionate about writing clean codes and building working softwares. I enjoy playing chess and scrabble. Someday soon I will visit Paradise on Earth, Bora Bora! '

                            style={{
                                fontFamily: 'monospace',
                                height: '100%',
                                width: '100%',
                                padding: 20
                            }}
                        />
                    </Grid.Column>
                </Grid>
            </Container>
            <Container fluid 
            style={{
                padding: 20
            }}>
                <h1 style={{textAlign: 'center'}}>Skills</h1>
                <Grid columns={2}
                style={{
                    padding: 30,
                    textAlign: 'center'
                }} >
                    <Grid.Column>
                        <p>
                            <Image src={Logo} avatar size='tiny' />
                            <span>ReactJs</span>
                        </p>
                        <p>
                            <Image src={HTML5} avatar size='tiny' />
                            <span>HTML5</span>
                        </p>
                        <p>
                            <Image src={CSS} avatar size='tiny' />
                            <span>css3</span>
                        </p>
                        <p>
                            <Image src={Node} avatar size='tiny' />
                            <span>nodeJs</span>
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>
                            <Image src={Bootstrap} avatar size='small' />
                            <span>Bootstrap</span>
                        </p>
                        <p>
                            <Image src={Mongod} avatar size='small'/>
                            <span>mongoDB</span>
                        </p>
                        <p>
                            <Image src={Express} avatar size='small' />
                            <span>Express Js</span>
                        </p>
                        <p>
                            <Image src={Git} size='small' avatar/>
                            <span>Git</span>
                        </p>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
};

export default About;