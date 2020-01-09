import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';


const Header = () => {
    return(
        <AppBar
            position='fixed'
            style={{
                backgroundColor: 'black',
                padding: '40px, 0',
            }}>
            <Toolbar>
            <BusinessCenterIcon 
            style = {{
                color: 'orange',
                fontSize: 40
            }}/>
            <HomeIcon align='right'/>
            <InfoIcon />
            </Toolbar>
        </AppBar>
    )
}
export default Header;