import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const FilterProducts = (props) => {
    const {searchProducts, handleAddBaker, handleDetails} = props
    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)
    console.log(searchProducts)
    
  return (
    <div className='AllProducts'>
        {searchProducts.map((item)=> 
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
                            <div className="product_info_item">
                    <div className="product_info_item_type">
                        <h3>Select color</h3>
                    </div>
                    
                    <div className="product_info_item_list">
                        {item.colors.map((value,index) =>(
                            <div 
                            key={index}
                            className={`product_info_item_list_item ${color === value ? 'active':''}`}
                            >
                                <div className={`circle bg-${value}`} onClick={() =>{setColor(value)}}>
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
                        {item.size.map((value,index) =>(
                            <div 
                            key={index}
                            className={`product_info_item_list_item ${size === value ? 'active':''}`}
                            >
                                <div className='circle'>
                                    <div className="circle_size">{value}</div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                            
                        </Link>
                        <div className='btn' onClick={() => handleAddBaker(item)}><AddShoppingCartIcon className='btn_add'/></div>
                        </div>
                    </div>
        )}
    </div>
  )
}

export default FilterProducts