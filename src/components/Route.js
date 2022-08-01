import React from "react";
import {
  Switch,
  Route, 
} from "react-router-dom";
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import Products from './Products/Products'
import ProductDetail from './ProductDetail/ProductDetail'
import FilterProducts from "./Products/FilterProducts";
import Confirm from "./comfirm/Confirm";
const Routes = (props) => {
    const {listItems, listItem,branch, 
        handleAddProduct, handleDetail, DetailProducts, 
        handleAddManyProduct, bakers, handleChange,
        handleDelete, btnCheckout, SearchProducts} = props
    return(
            
            <Switch>
                
              <Route path="/" exact>
                <Home 
                listItem ={listItem}
                Branchs = {branch}
                handleAddBaker = {handleAddProduct}
                handleDetails = {handleDetail}
                />
              </Route>
              <Route path="/Products" exact>
                <Products 
                products = {listItems}
                handleAddBaker = {handleAddProduct}
                handleDetails = {handleDetail}
                />
              </Route>
              <Route path='/Products/:id'>
                <ProductDetail 
                DetailProduct = {DetailProducts}
                handleAddBaker = {handleAddManyProduct}
                // color = {color}
                // size = {size}
                // getColor = {getColor}
                />
              </Route>

                <Route path='/searchProducts'>
                    <FilterProducts 
                    searchProducts = {SearchProducts}
                    />
                </Route>

              <Route path="/contact">
                
              </Route>
              
              <Route path="/checkout">
                <Checkout 
                bakers = {bakers}
                handleAddBakers = {handleChange}
                handleDelete = {handleDelete}
                handleCheckout = {btnCheckout}
                />
              </Route>

              <Route path='/confirm'>
                <Confirm />
              </Route>
            </Switch>
        
        
    )
}

export default Routes