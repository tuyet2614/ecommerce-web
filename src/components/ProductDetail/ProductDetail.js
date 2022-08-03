import React from "react";
import './ProductDetail.scss'
import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductDetail = (props) => {
    const {DetailProduct, handleAddBaker} = props
    const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        setQuantity(1)
    }, [DetailProduct])

    const [previewImg, setPreviewImg] = useState(DetailProduct.image01)
    const [descriptionExpand, setDescriptionExpand] = useState(false)

    return (
        <div className="DetailProduct">
            <div className="DetailProduct_top">
                <div className="DetailProduct_top__images">
            
                    <div className="DetailProduct_top__images__main">
                        <img src={previewImg} alt="" className="detail"/>
                    </div>

                    <div className="DetailProduct_top__images__list">
                        <div className="DetailProduct_top__images__list__item" onClick={() => setPreviewImg(DetailProduct.image01)}>
                            <img src={DetailProduct.image01} alt="" />
                        </div>
                        <div className="DetailProduct_top__images__list__item" onClick={() => setPreviewImg(DetailProduct.image02)}>
                            <img src={DetailProduct.image02} alt="" />
                        </div>
                        <div className="DetailProduct_top__images__list__item" onClick={() => setPreviewImg(DetailProduct.image03)}>
                            <img src={DetailProduct.image03} alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className="DetailProduct_top_info">
                    <div className="DetailProduct_top_info_title">
                        <h2>{DetailProduct.title}</h2>
                    </div>

                    <div className="DetailProduct_top_info_review">
                        <p className="DetailProduct_top_info_review_number">{DetailProduct.star}</p>
                        <Rating name="read-only" value={DetailProduct.star} readOnly  precision={0.1} className="DetailProduct_top_info_review_star"/>
                        
                    </div>

                    <div className="DetailProduct_top_info_price">
                        <p><span></span> {DetailProduct.price}</p>
                    </div>
                    
                    
                    <div className="DetailProduct_top_info_quantity">
                        <div className='DetailProduct_top_info_quantity_input'>
                            <label>Quantity:</label>
                            <input 
                                type='number' 
                                defaultValue={1}
                                min='1'  
                                onChange={(e) => {setQuantity(e.target.value)}}>
                                
                            </input>
                            <span className="available">{DetailProduct.available} available</span>
                        </div>
                        
                        <div className="DetailProduct_top_info_quantity_btn" onClick={() => {handleAddBaker(DetailProduct, quantity)}}>
                            <AddShoppingCartIcon className="add_icon"/>Add to cart
                        </div>
                    </div>

                    
                    
                
                </div>
            </div>

            <div className="DetailProduct_bottom">
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" >{DetailProduct.description}</div>
                    <div className="product-description__toggle">
                        <button 
                        className="product-description__toggle_button" 
                        onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'collapse' : 'More'
                            }
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDetail