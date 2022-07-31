import Header from './components/Header/Headers';
import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link, 
} from "react-router-dom";
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import productData from './data/Product';
import Products from './components/Products/Products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  const [bakers, setBakers] = useState([])
  const [listItems, setListItems] = useState(productData.getAllProducts())
  const [listItem, setListItem] = useState(productData.getProducts(5))
  const [branch, setBranch] = useState(productData.getAllBranch())
  const [DetailProducts,setDetailProducts] = useState([])

  const handleAddProduct = (product) => {
    const ProductExist = bakers.find((item) => item.id === product.id)
    if(ProductExist) {
      setBakers(
        bakers.map((item) => 
        item.id === product.id ? {...ProductExist, quantity:ProductExist.quantity+1} : item)
      )
    }

    else {
      setBakers([...bakers, {...product, quantity: 1}])
    }
    toast.success("add products to cart successfully")
  }

  const handleChange = (product,e) => {
    const ProductExist = bakers.find((item) => item.id === product.id)
    setBakers(
        bakers.map((item) => 
        item.id === product.id ? {...ProductExist, quantity: e.target.value} : item)
      )
      toast.success("change quantity successfully")
  }
    
  const handleDelete = (product) => {
    let currenProduct = bakers
    currenProduct = currenProduct.filter(item => item.id !== product.id)
    setBakers(
      currenProduct
    )
    toast.success("Delete successfully")
  }

  const btnCheckout = () => {
    setBakers([])
    toast.success("Checkout successfully")
  }

  const handleDetail = (id) => {
    const DetailProduct = listItems.find((item) => item.id === id)
    setDetailProducts(DetailProduct)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          
          <Header />
          <div className='Routes'>
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
            </Switch>
          </div>
          

          
        </header>
        <ToastContainer
          position="top-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
        <ToastContainer />
        
      </div>
    
    </BrowserRouter>
      
  );
}

export default App;
