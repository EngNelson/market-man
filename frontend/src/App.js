import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  HomeScreen  from './screens/HomeScreen';
import  ProductScreen  from './screens/ProductScreen';


function App() {

  // const params = { params: { id: '1' } };
  // match={params} 

  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Market-Man</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
