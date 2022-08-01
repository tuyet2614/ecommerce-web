import Header from './components/Header/Headers';
import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import Routes from './components/Route';
import productData from './data/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bakers, setBakers] = useState([])
  const [listItems, setListItems] = useState(productData.getAllProducts())
  const [listItem, setListItem] = useState(productData.getProducts(5))
  const [branch, setBranch] = useState(productData.getAllBranch())
  const [DetailProducts,setDetailProducts] = useState([])
  const [SearchProducts, setSearchProducts] = useState([])
  const [color, setColor] = useState(undefined)
  const [size, setSize] = useState(undefined)

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

  const handleAddManyProduct = (product, ProductQuantity) => {
    const ProductExist = bakers.find((item) => item.id === product.id)
    if(ProductExist) {
      setBakers(
        bakers.map((item) => 
        item.id === product.id ? {...ProductExist, quantity: parseInt(ProductExist.quantity) + parseInt(ProductQuantity)} : item)
      )
    }

    else {
      setBakers([...bakers, {...product, quantity: ProductQuantity}])
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

  const getColor = (value) => {
   DetailProducts.colors.map((item) => 
     setColor(value) )
    // setColor(ColorProduct)
  }
  const SearchOnClick = (e) => {
    const DetailProduct = listItems.filter((item) => item.title.toLowerCase().includes(e))
    console.log (DetailProduct)
    setSearchProducts(DetailProduct)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          
          <Header 
            listItems = {listItems}
            SearchOnClick = {SearchOnClick}
          />
          <div className='Routes'>
            <Routes 
            listItems = {listItems}
            listItem = {listItem}
            branch = {branch}
            handleAddProduct = {handleAddProduct}
            handleDetail = {handleDetail}
            DetailProducts = {DetailProducts}
            handleAddManyProduct = {handleAddManyProduct}
            bakers = {bakers}
            handleChange = {handleChange}
            handleDelete = {handleDelete}
            btnCheckout = {btnCheckout}
            SearchProducts = {SearchProducts}
            />
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
