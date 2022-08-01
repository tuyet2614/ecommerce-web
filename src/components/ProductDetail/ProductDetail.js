import React from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.scss'
import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const ProductDetail = (props) => {
    const {DetailProduct, handleAddBaker} = props
    let {id} = useParams();
    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [DetailProduct])

      const getColor = (value) => {
        DetailProduct.colors.map((item) => 
        setColor(value) )
    // setColor(ColorProduct)
  }

    console.log(DetailProduct.star)
    return (
        <div className="Detail">
            <div className="left_items">
                <div className="main_image">
                    <img src={DetailProduct.image01} className="left_items_img_main"></img>
                </div>
                
            </div>
            <div className="product_info">
                <div className="product_info_title">
                    <h2>{DetailProduct.title}</h2>
                </div>

                <div className="product_info_review">
                    <p className="product_info_review_number">{DetailProduct.star}</p>
                    <Rating name="read-only" value={DetailProduct.star} readOnly  precision={0.1} className="product_info_review_star"/>
                    
                </div>

                <div className="product_info_price">
                    <h3>đ {DetailProduct.price}</h3>
                </div>
                
                <div className="product_info_item">
                    <div className="product_info_item_type">
                        <h3>Select color</h3>
                    </div>
                    
                    <div className="product_info_item_list">
                        {DetailProduct.colors.map((item,index) =>(
                            <div 
                            key={index}
                            className={`product_info_item_list_item ${color === item ? 'active':''}`}
                            >
                                <div className={`circle bg-${item}`} onClick={() =>{getColor(item)}}>
                                    {console.log(color)}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="product_info_item">
                    <div className="product_info_item_type">
                        <h3>Select size</h3>
                    </div>
                    
                    <div className="product_info_item_list">
                        {DetailProduct.size.map((item,index) =>(
                            <div 
                            key={index}
                            className={`product_info_item_list_item ${size === item ? 'active':''}`}
                            >
                                <div className='circle'>
                                    <div className="circle_size">{item}</div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="product_info_quantity">
                    <input 
                        type='number' 
                        defaultValue={1}
                        min='1' 
                        className='product-quantity' 
                        onChange={(e) => {setQuantity(e.target.value)}}>
                        
                    </input>
                </div>

                <div className="product_info_btn" onClick={() => {handleAddBaker(DetailProduct, quantity)}}>
                    <button>Add to cart</button>
                </div>
                
               
            </div>
        </div>
    )
}

export default ProductDetail