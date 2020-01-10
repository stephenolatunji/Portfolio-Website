import React from 'react';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


const Footer = () => {
    return(
        <Container fluid
        style={{
            backgroundColor: '#000041',
            padding: 30,
            
        }}>
            <div align='center' color='white'>
                <a href='https://github.com/stephenolatunji'>
                    <GitHubIcon fontSize='big' 
                    style={{
                        color: '#fd8508'
                    }}/>
                </a>
                <a href='https://www.instagram.com/stevemckorr/?hl=en'>
                    <InstagramIcon 
                    style={{
                        color: '#fb3958'
                    }}/>
                 </a>
                <a href='mailto:stephenolatunji02@gmail.com'>
                    <EmailIcon 
                    style={{
                        color: 'white',
                    }} />
                </a>
                
            </div>
        </Container>
    )
};
export default Footer;