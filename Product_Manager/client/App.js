import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductForm from "./components/ProductForm"
import DisplayProduct from "./components/DisplayProduct"
import Details from './components/Details';
import UpdateProduct from './components/UpdateProduct';
import axios from 'axios';


function App() {
  //fetch all products:
  const [productList, setProductList] = useState ([]);
  // const [refresh, setRefresh] = useState(false);
  React.useEffect(() => {
    axios.get("http://localhost:8000/api/product")
        .then(res => setProductList(res.data.products))
        .catch(err => console.log(err))

        console.log("hhhhhhhhhhhhhhhhhhhhhhhhh");
}, [])


  // setTimeout(() => {
  //   setRefresh(false);
  // },5000)

  return (
    <div className="App">
      <BrowserRouter>
      <h1>Product Manager</h1>
      <Switch>
        <Route exact path="/">
          <ProductForm />
        </Route>
        <Route  path="/display/:product_id">
          <Details />
        </Route>
        <Route  path="/product/:product_id/update">
          <UpdateProduct />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
