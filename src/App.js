import React from 'react'
import './App.css';
// Route 
import { Route, Switch } from "react-router-dom"
import Layout from './components/layout/Layout';
import ScrollToTop from "./components/ScrollToTop";


// Home Component
import HomeComponent from './components/HomeComponent'
// Pages 
import Catagory from './pages/category'
import ProductDetails from './pages/productdetails'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import PrementeCard from './pages/prementecard'
import Singup from './pages/singup'
import LoginPages from './pages/login'
import Allcategories from './pages/all_categories'
import ComingSoon from './pages/comingSoon'
import Dashboard from './pages/dashboard'


function App() {
    return (
    <div className="App">
      <ScrollToTop />
      <Layout> 
        <Switch>
          {/* <LoadingScreenCustom>
            <Route exact path="/" component={HomeComponent}></Route>
          </LoadingScreenCustom> */}
            <Route exact path="/" component={HomeComponent}></Route>
            <Route exact path="/category" component={Catagory}></Route>
            <Route exact path="/product-details" component={ProductDetails}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
            <Route exact path="/premente-card" component={PrementeCard}></Route>
            <Route exact path="/singup" component={Singup}></Route>
            <Route exact path="/login" component={LoginPages}></Route>
            <Route exact path="/all-categories" component={Allcategories}></Route>
            <Route exact path="/coming-soon" component={ComingSoon}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
