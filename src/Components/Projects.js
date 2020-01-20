import React from 'react';
import { Container, Card, Divider } from 'semantic-ui-react';
import Player from '../Assets/Video.jpg';
import Quiz from '../Assets/Quiz.png';
import Wine from '../Assets/wine-clipart.jpg';
import Library from '../Assets/Library.jpeg';
import Gif from '../Assets/gif.gif';
import Todo from '../Assets/Todo.jpeg';


const Project = () => {
    return(
            <Container fluid style={{
                padding: 30,
                background: 'black',
                color: 'violet',
                textAlign: 'center'
            }} >
                <h1>My Projects</h1>
                <Card.Group itemsPerRow={6} stackable>
                    <Card 
                    raised 
                    image={Player} 
                    href='https://eager-kilby-4c938a.netlify.com/'
                    header='Video Search'
                    description='A video search App which enables user search for desired music videos or any video. It links to Youtube '
                    />
                    <Card raised 
                    image={Quiz} 
                    href='https://nervous-einstein-5df035.netlify.com/'
                    header='A quiz app that tests your knowledge of Geography'
                    description='' 
                    />
                    <Card raised
                    image={Wine}
                    href='https://elastic-payne-7677d1.netlify.com'
                    header='Winera'
                    description='A wine search app for wine enthusiasts. Get wine suggestions, reviews and ratings of wines' 
                    />
                    <Card raised 
                    image={Library}
                    href='https://stephenolatunji.github.io/McKorr_Books/'
                    header='Book Search'
                    description='Online book Library' 
                    />
                    <Card raised 
                    image={Gif}
                    href='https://stephenolatunji.github.io/Giphy_App/'
                    header='Gif Search'
                    description='Enables users to search for different gifs' 
                    />
                    <Card raised 
                    image={Todo}
                    href='https://stephen-olatunji.netlify.com'
                    header='Todo App'
                    description='Allows user to organise their actvities for productivity' 
                    />
                </Card.Group>
                <Divider />
            </Container>
    )
};
export default Project;
