import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home/Home';
import ProductItem from './pages/ProductItem/ProductItem';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Cart from './pages/Cart/Cart';
import Modal from './pages/GlobalLayouts/Modal/Modal';
import Checkout from './pages/Checkout/Checkout';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const cartModal = isModalOpen ? <Modal><Cart toggleModal={toggleModal} /></Modal> : null;

  return (
    <div className="App">
       {cartModal}
        <Routes>
            <Route path='/' element={<Home toggleModal={toggleModal}/>} />
            <Route path='headphones' element={<CategoryPage categoryType={'headphones'} toggleModal={toggleModal}/>} />
            <Route path='speakers' element={<CategoryPage categoryType={'speakers'} toggleModal={toggleModal}/>} />
            <Route path='earphones' element={<CategoryPage categoryType={'earphones'} toggleModal={toggleModal}/>} />

            <Route path='earphones/:productId' element={<ProductItem toggleModal={toggleModal}/>} />
            <Route path='headphones/:productId' element={<ProductItem toggleModal={toggleModal}/>} />
            <Route path='speakers/:productId' element={<ProductItem toggleModal={toggleModal}/>} />

            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    </div>
  );
}

export default App;
