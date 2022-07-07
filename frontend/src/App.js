import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import  HomeScreen  from './screens/HomeScreen';
import  ProductScreen  from './screens/ProductScreen';


function App() {

  // const params = { params: { id: '1' } };
  // match={params} 

  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">Market-Man</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/cart/:id?" element={<CartScreen/>}></Route>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
