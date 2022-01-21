import './App.scss';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductItem from './pages/ProductItem/ProductItem';
import CategoryPage from './pages/CategoryPage/CategoryPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='headphones' element={<CategoryPage categoryType={'headphones'} />} /> 
          <Route path='speakers' element={<CategoryPage categoryType={'speakers'} />} />
          <Route path='earphones' element={<CategoryPage categoryType={'earphones'} />} />
          

          <Route path='earphones/:productId'  element={<ProductItem />} />
          <Route path='headphones/:productId' element={<ProductItem />} />
          <Route path='speakers/:productId' element={<ProductItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
