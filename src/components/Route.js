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
import Login from "./Login/Login";
import Header from "./Header/Headers"
const Routes = (props) => {
    const {listItems, listItem,branch, 
        handleAddProduct, handleDetail, DetailProducts, 
        handleAddManyProduct, bakers, handleChange,
        handleDelete, btnCheckout, SearchProducts, 
        SearchOnClick, user, getUser} = props
    return(
            
            <Switch>
                
              <Route path="/" exact>
                <Header 
                  SearchOnClick = {SearchOnClick}
                  user = {user}
                />
                <Home
                listItem ={listItem}
                Branchs = {branch}
                handleAddBaker = {handleAddProduct}
                handleDetails = {handleDetail}
                />
              </Route>
              <Route path="/Products" exact>
                <Header 
                  SearchOnClick = {SearchOnClick}
                  user = {user}
                />
                <Products 
                products = {listItems}
                handleAddBaker = {handleAddProduct}
                handleDetails = {handleDetail}
                />
              </Route>
              <Route path='/Products/:id'>
                <Header 
                  SearchOnClick = {SearchOnClick}
                  user = {user}
                />
                <ProductDetail 
                DetailProduct = {DetailProducts}
                handleAddBaker = {handleAddManyProduct}
                />
              </Route>

                <Route path='/searchProducts'>
                  <Header 
                    SearchOnClick = {SearchOnClick}
                    user = {user}
                  />
                    <FilterProducts 
                    searchProducts = {SearchProducts}
                    />
                </Route>

              <Route path={"/Login"}>
                <Login 
                getUser = {getUser}
                />
              </Route>
              
              <Route path="/checkout">
                <Header 
                  SearchOnClick = {SearchOnClick}
                  user = {user}
                  
                />
                <Checkout 
                bakers = {bakers}
                handleDetails = {handleDetail}
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