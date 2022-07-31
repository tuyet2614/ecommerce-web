
import React from "react";
import logo from '../../images/logo.png'
import './Header.scss'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
  Link,
  NavLink
} from "react-router-dom"


class Header extends React.Component {
    render() {
        return(
            <div className="top">
                <div className="left">
                    <div className="logo">
                        <NavLink to= '/'><img src={logo}></img></NavLink>
                        
                    </div>
                    <div className="topnav">
                        <NavLink to='/Products' activeClassName="active">
                            Products
                        </NavLink>
                        
                        <NavLink to='/contact' activeClassName="active">
                            Contact us
                        </NavLink>
                    </div>

                </div>


                <div className="right">
                    <Paper className="search_bar" 
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '400px'}}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search here"
                            type="search"
                            
                        />
                        {/* logo */}
                        <IconButton type="submit"><SearchIcon className="search_icon" /></IconButton>
                        
                    </Paper>

                    <FavoriteBorderIcon />
                    <NavLink to='/checkout'><ShoppingCartIcon /></NavLink>
                    

                    <p>tuyet</p>
                    
                </div>
                
            </div>
        )
    }
}

export default Header;