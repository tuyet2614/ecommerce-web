import React from 'react';
import { useEffect, useState } from 'react';
import "./Home.scss"
import panner from '../../images/panner.png'
import productData from '../../data/Product';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ImageList, ImageListItem } from '@mui/material';
import Shop from '../../images/shop.png'
import Foot from '../Foot/Foot';
import { Link } from 'react-router-dom';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Home = (props) => {
    const {listItem, handleAddBaker, handleDetails} = props
    const Branchs = productData.getAllBranch()

    return (
        <div className='home'>
            <div className='home_container'>
                <img src={panner} className="panner"></img>
            </div>
            <h3>Trending Now</h3>
            
            <div className='Products'>
                {listItem.map((item)=> 
                    <div className='product' key={item.id}>
                        <div className='card' onClick={() => handleDetails(item.id)}>
                        <Link to={`Products/${item.id}`}>
                            <div className='card_img'>
                                <img src={item.image01} className="images" />
                            </div>
                            <div className='card_header'>
                                <h4>{item.title}</h4>
                                <p>{item.categorySlug}</p>
                                <p className='price'>{item.price}</p>
                                {/* <div className='btn' onClick={() => handleAddBaker(item)}><AddShoppingCartIcon /></div> */}
                            </div>
                            
                        </Link>
                        <div className='btn' onClick={() => handleAddBaker(item)}><AddShoppingCartIcon className='btn_add'/></div>
                        </div>
                    </div>
                )}
                
            </div>

            <div className='panner'>
                <div className='information'>
                    <h1 className='infor h1'>FOREVER 21</h1>
                    <h3 className='infor h3'>Big Fashion Festival</h3>
                    <h3 className='infor h3'>70% - 80% off</h3>
                    <button className='infor'>Explore</button>
                </div>
                
            </div>


            <div className='Categories'>
                <h2>Shop by Categories</h2>
                <div className='branch'>
                    
                    <ImageList 
                    sx={{width: 1200, height: 470}}
                    variant="quilted"
                    cols={6}
                    rowHeight={230}
                    
                    
                    >
                        {Branchs.map((item) => (
                            <ImageListItem className="shops" key={item.img} cols={item.cols || 1} rows={item.row || 1}>
                                <img 
                                {...srcset(item.img, 120, item.row, item.cols)}
                                alt = {item.title}
                                loading='lazy'
                                className='shops'
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>

            <div className='about'>
                <h2>About Us</h2>
                <h2 className='item_tag'>Business Name</h2>
                <p className='item_tag'>
                    <img src={Shop} className='img_shop'/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. 
                    Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. 
                    Risus suspendisse mauris ullamcorper felis a, quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. 
                    Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper felis a, quam.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas
                </p>
                
                
                <h4 >Contact Information</h4>
                <p className='item_tag_p'>+911256378409</p>
                <p>Someting@random.com</p>
            </div>

            <div className='foot'>
                <Foot />
            </div>
        </div>
    )


}

export default Home