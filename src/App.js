import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ProductDetails from './components/product-details/ProductDetails'
import ProductForm from './components/product-form/ProductForm';
import Checkout from './components/checkout/Checkout';


function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/produtos/novo" component={ProductForm} />
            <Route path="/detalhes/:id" component={ProductDetails} />
          </Switch>

          <Checkout />
          
        </BrowserRouter>

      </div>
    </Provider>
  );
}

export default App;
