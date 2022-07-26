import React from 'react'
import './Checkout.scss'
import Subtotal from '../Subtotal/Subtotal'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
    const {bakers, handleDetails, handleAddBakers, handleDelete, handleCheckout, color} = props
    console.log(color)
    return (
    <div className='Checkout'>
        <h2 className='checkout_title'>Your shopping Basket</h2>
        {bakers.length === 0 &&(
            <div className='cart-items-empty'>No item are add</div>
        )}

        <div className= 'Checkout_product'>
            <table className='cartProducts'>
                <tr className='head'>
                    <th>images</th>
                    <th>title</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>ProductTotal</th>
                    <th>Delete</th>
                </tr>
                {bakers.map((item)=> 
                    <tr className='cart_product' key={item.id}>
                            
                            <td className='product-image ' onClick={() => handleDetails(item.id)}>
                                <Link to={`Products/${item.id}`}><img src={item.image01} className="images" /></Link>
                            </td>
                            <td className='product-type ' onClick={() => handleDetails(item.id)}>
                                <Link to={`Products/${item.id}`}><h4>{item.title}</h4></Link>
                                
                            </td>
                            
                            <td className='product-price '>
                                {/* <p>{item.categorySlug}</p> */}
                                <p>{item.price}</p>
                                
                            </td>
                            <td className='product-quantity '>
                                <input 
                                    type='number' 
                                    value={item.quantity} 
                                    min='1' 
                                    className='product-quantity' 
                                    onChange={(e) => {handleAddBakers(item,e)}}>
                                </input>
                            </td>
                            <td className='product-total '>
                                <p>{item.price * item.quantity}</p>
                            </td>
                            <td className='product-total  btnDelete'>
                                <div 
                                className='btnDelete'
                                onClick={() => {handleDelete(item)}}>
                                    <DeleteForeverIcon />
                                </div>
                            </td>
                    </tr>
                )}
            </table>
            
        </div>

        <div className='checkout_Subtotal'>
            <Subtotal 
            bakers = {bakers}
            handleCheckout = {handleCheckout}
            />
            
        </div>
    </div>
  )
}

export default Checkout