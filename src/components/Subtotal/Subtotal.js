import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
import './Subtotal.scss'

const Subtotal = (props) => {
    const {bakers, handleCheckout} = props
    let totalProduct = 0
    let total = 0
    let grand = 0
    let ship = 20000

    

    return (
        <div>
            {bakers.length !== 0 &&(
                // <div className='cart-items-empty'></div>
                <div className="totals">
                    {bakers.map((item) => {
                        totalProduct += parseInt(item.quantity)
                        total += item.quantity * item.price
                        grand = ship + total
                         })}
                    <div className="totals-item">
                        <label>Subtotal ({totalProduct}) items: </label>
                        <div className="totals-value">{total}</div>
                    </div>

                    <div className="totals-item">
                        <label>Shipping</label>
                        <div className="totals-value" id="cart-shipping">{ship}</div>
                    </div>

                    <div className="totals-item totals-item-total">
                        <label>Grand Total</label>
                        <div className="totals-value" id="cart-total">{grand}</div>
                    </div>
                    <button 
                    className="checkout"
                    onClick={() => handleCheckout()}
                    >
                        <Link to={'/confirm'}>Checkout</Link>
                        
                    </button>
                </div>
                
            )}
            
        </div>
        
        
    
  )
}

export default Subtotal