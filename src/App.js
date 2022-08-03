
import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import Routes from './components/Route';
import productData from './data/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD58R9W5cHcTCVGdqcpVn3-Cwlc-kbUBY",
  authDomain: "ecommerce-883a7.firebaseapp.com",
  projectId: "ecommerce-883a7",
  storageBucket: "ecommerce-883a7.appspot.com",
  messagingSenderId: "225230998200",
  appId: "1:225230998200:web:a39c6de015078c9ef9424d",
  measurementId: "G-L83K1NW54C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [bakers, setBakers] = useState([])
  const [listItems, setListItems] = useState(productData.getAllProducts())
  const [listItem, setListItem] = useState(productData.getProducts(5))
  const [branch, setBranch] = useState(productData.getAllBranch())
  const [DetailProducts,setDetailProducts] = useState([])
  const [SearchProducts, setSearchProducts] = useState([])
  const [user, setUser] = useState('')

  const handleAddProduct = (product, color , size) => {
    const ProductExist = bakers.find((item) => item.id === product.id)
    if(ProductExist) {
      setBakers(
        bakers.map((item) => 
        item.id === product.id && item.colors === color && item.size === size?  {...ProductExist, quantity:ProductExist.quantity+1} : item)
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

  const SearchOnClick = (e) => {
    const DetailProduct = listItems.filter((item) => item.title.toLowerCase().includes(e))
    console.log (DetailProduct)
    setSearchProducts(DetailProduct)
  }
  
  const getUser = (value) => {
    setUser(value)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          
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
            SearchOnClick = {SearchOnClick}
            user = {user}
            getUser = {getUser}
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
