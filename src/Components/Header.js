import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
// import InfoIcon from '@material-ui/icons/Info';
// import HomeIcon from '@material-ui/icons/Home';


const Header = () => {
    return(
        <AppBar
            position='fixed'
            style={{
                backgroundColor: '#000041',
                padding: '40px, 0',
            }}>
            <Toolbar>
            <BusinessCenterIcon 
            style = {{
                color: '#fd8508',
                fontSize: 40
            }}/>
            </Toolbar>
        </AppBar>
    )
}
export default Header;