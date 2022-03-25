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

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Prince's Products</h1>
        <Link to="/" className="btn btn-success">Home</Link>
        <Switch>
            <Route exact path="/">
              <ProductForm></ProductForm>
              <br></br>
              <AllProducts></AllProducts>
          </Route>
          <Route exact path="/details/:_id">
            <ProductDetail></ProductDetail>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
