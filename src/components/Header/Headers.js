
import React, { useState } from "react";
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


const Header = (props) => {
        const {SearchOnClick, user} = props
        const [searchKey,setSearchkey] = useState('')
        return(
            <div className="top">
                <div className="left">
                    <div>
                        <NavLink to= '/'><img src={logo} className="Logo"></img></NavLink>
                        
                    </div>
                    <div className="topnav">
                        <NavLink to='/Products' activeClassName="active">
                            Products
                        </NavLink>
                        <NavLink to='/Blog' activeClassName="active">
                            Blog
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
                            onChange={(e) => {setSearchkey(e.target.value)}}
                        />
                        {console.log(searchKey)}
                        {/* logo */}
                        <div onClick={() => {SearchOnClick(searchKey)}}><Link to={'/searchProducts'}><SearchIcon className="search_icon" /></Link></div>
                        
                    </Paper>

                    <FavoriteBorderIcon />
                    <NavLink to='/checkout'><ShoppingCartIcon /></NavLink>
                    
                    <Link to={'/Login'}>
                        <p className="login">
                            {user === '' ? 'Login' : user}
                        </p>
                    </Link>
                    
                    
                </div>
                
            </div>
        )
    
}

export default Header;