import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link, NavLink } from 'react-router-dom';
import './Confirm.scss'

const Confirm = () => {
  return (
    <div className='Confirm_form'>
        <div className='Confirm_form_main'>
            <div>
                <CheckCircleOutlineIcon className='Confirm_form_main_icon'/>
            </div>

            <div className='Confirm_form_main_success'>
                <p className='Confirm_form_main_success_thank'>Thanks for your order!</p>
				<p class="Confirm_form_main_success_rest">
					Sit back, relax or even better...go for a run! We'll take care of the rest.
				</p>
                <hr class="divider"></hr>
            </div>
        </div>
        <div className='Confirm_form_continue'>
            <p>Your order # is: <span>{Math.floor(Math.random() * 10000000000)}</span>.</p>
			<p>We'll email you an order confirmation with details and tracking info.</p>
            
                <NavLink to={'/Products'} className="Confirm_form_continue_button">Continue Shopping</NavLink>
            
        </div>
    </div>
  )
}

export default Confirm