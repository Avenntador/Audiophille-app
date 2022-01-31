import './App.scss';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home/Home';
import ProductItem from './pages/ProductItem/ProductItem';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Cart from './pages/Cart/Cart';
import Modal from './utility/Modal';
import Checkout from './pages/Checkout/Checkout';
import SuccessBuy from './pages/SuccessBuy/SuccessBuy';


export const ModalContext = React.createContext();

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleModal = () => setIsCartOpen(!isCartOpen);
  
  const cartModal = isCartOpen ? <Modal><Cart toggleModal={toggleModal} /></Modal> : null;

  return (
    <div className="App">
      <ModalContext.Provider value={toggleModal}>
        {cartModal}
        <Routes>
          <Route path='/' element={<Home toggleModal={toggleModal} />} />
          <Route path='headphones' element={<CategoryPage categoryType={'headphones'} />} />
          <Route path='speakers' element={<CategoryPage categoryType={'speakers'} />} />
          <Route path='earphones' element={<CategoryPage categoryType={'earphones'} />} />

          <Route path='earphones/:productId' element={<ProductItem />} />
          <Route path='headphones/:productId' element={<ProductItem />} />
          <Route path='speakers/:productId' element={<ProductItem />} />

          <Route path='/checkout' element={<Checkout />} />
          {/* <Route path='/succsess-buy' element={<SuccessBuy />} /> */}
        </Routes>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
