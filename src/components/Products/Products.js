import React from 'react'
import './Products.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const  Products = (props) => {
    const {products, handleAddBaker, handleDetails} = props

  return (
    <div className='AllProducts'>
        {products.map((item)=> 
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
  )
}

export default Products