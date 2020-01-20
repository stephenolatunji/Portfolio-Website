import React from 'react';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


const Footer = () => {
    return(
        <Container fluid
        style={{
           
            padding: 20,
            textAlign: 'center'
            
        }}>
            <p>Contact Me</p>
            <p><strong>+2347039635385</strong></p>
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
                        color: 'blue',
                    }} />
                </a>
            </div>
        </Container>
    )
};
export default Footer;