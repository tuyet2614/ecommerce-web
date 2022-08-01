import { TextField } from "@mui/material";
import React from "react";
import logo from '../../images/logo.png'
import './Foot.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

class Foot extends React.Component {

    render() {
        return (
            <div className="contain">
                <div className="title">
                    <img src={logo} className='logo'/>
                    <h1>Globex</h1>
                </div>


                <div className="maintain">
                    <div className="item">
                        <ul>
                            <li><h3>Women</h3></li>
                            <li>All Women</li>
                            <li>Skirts</li>
                            <li>T-Shirts</li>
                            <li>Tops</li>
                            <li>Jackets</li>
                        </ul>
                    </div>
                    <div className="item">
                        <ul>
                            <li><h3>Men</h3></li>
                            <li>All Men</li>
                            <li>Shirts</li>
                            <li>T-Shirts</li>
                            <li>Shorts</li>
                            <li>Jackets</li>
                        </ul>
                    </div>
                    <div className="item">
                        <ul>
                            <li><h3>Kids</h3></li>
                            <li>All Kids</li>
                            <li>Shirts</li>
                            <li>T-Shirts</li>
                            <li>Shorts</li>
                            <li>Jackets</li>
                        </ul>
                    </div>
                    <div className="item">
                        <ul>
                            <li><h3>Shopping</h3></li>
                            <li>Your cart</li>
                            <li>Your orders</li>
                            <li>Compared items</li>
                            <li>Wishlist</li>
                            <li>Shopping Details</li>
                        </ul>
                    </div>
                    <div className="item">
                        <ul>
                            <li><h3>More links</h3></li>
                            <li>Blogs</li>
                            <li>Gift center</li>
                            <li>Buying guides</li>
                            <li>New arrivals</li>
                            <li>Clearance</li>
                        </ul>
                    </div>
                    <div className="item stay">
                        <h3>Stay In Touch</h3>
                        <p>Stay in touch to get special offers, free giveaways and once in lifetime deals</p>
                        <input type="email" className="email" placeholder="Enter your email"></input>
                    </div>
                </div>
                
                <hr />
                <div className="contact">
                    <p>Terms 	&amp; Conditions</p>
                    <p>Privacy Policy</p>
                    <div className="icons">
                        <FacebookIcon className="icon"/>
                        <InstagramIcon className="icon"/>
                        <TwitterIcon className="icon"/>
                    </div>
                </div>
            </div>
            
        )
    }
        
}

export default Foot