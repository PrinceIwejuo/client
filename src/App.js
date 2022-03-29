import logo from './logo.svg';
import './App.css';
import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import React, { useState } from 'react';
import EditProductForm from './components/EditProductForm';

function App() {

  let [formSent, setFormSent] = useState(false)

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Prince's Products</h1>
        <Link to="/" className="btn btn-success">Home</Link>
        <Switch>
            <Route exact path="/">
              <ProductForm formSent = {formSent} setFormSent = {setFormSent}></ProductForm>
              <br></br>
              <AllProducts formSent = {formSent} ></AllProducts>
          </Route>
          <Route exact path="/details/:_id">
            <ProductDetail></ProductDetail>
          </Route>
          <Route exact path="/edit/:_id">
            <EditProductForm></EditProductForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
