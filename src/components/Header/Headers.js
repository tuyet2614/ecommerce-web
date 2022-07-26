
import React from "react";
import logo from '../../images/logo.png'
import './Header.scss'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

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
                        <img src={logo}></img>
                    </div>
                    <div className="topnav">
                        
                        <NavLink to='/men' activeClassName="active">
                            Men
                        </NavLink>
                        <NavLink to='/women' activeClassName="active">
                            Women
                        </NavLink>
                        <NavLink to='/kids' activeClassName="active">
                            Kids
                        </NavLink>
                        <NavLink to='/shop' activeClassName="active">
                            Shop
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
                    <WorkOutlineIcon />

                    <p>tuyet</p>
                    
                </div>
                
            </div>
        )
    }
}

export default Header;