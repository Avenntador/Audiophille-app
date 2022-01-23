import './App.scss';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductItem from './pages/ProductItem/ProductItem';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='headphones' element={<CategoryPage categoryType={'headphones'} />} />
            <Route path='speakers' element={<CategoryPage categoryType={'speakers'} />} />
            <Route path='earphones' element={<CategoryPage categoryType={'earphones'} />} />

            <Route path='earphones/:productId' element={<ProductItem />} />
            <Route path='headphones/:productId' element={<ProductItem />} />
            <Route path='speakers/:productId' element={<ProductItem />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
