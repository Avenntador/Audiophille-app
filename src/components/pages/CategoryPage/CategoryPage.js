import './CategoryPage.scss';

import Thumbnail from '../../GlobalLayouts/Thumbnail/Thumbnail';
import Footer from '../../GlobalLayouts/Footer/Footer';
import About from '../../GlobalLayouts/About/About';
import MainContent from './MainContent/MainContent';
import Header from './Header/Header';

import { useState, useEffect } from 'react';

function CategoryPage({ categoryType }) {

    const [category, setCategory] = useState([]);
    const [categoryHeader, setCategoryHeader] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/data')
            .then(response => response.json())
            .then(response => {
                let recievedCategory = [];
                response.forEach(item => {
                    if (item.category === categoryType) {
                        recievedCategory.push(item);
                    }
                })
                setCategoryHeader(recievedCategory[0].category);
                setCategory(recievedCategory);
            });
    }, [categoryType])

    return (
        <>
            <header className='category__header'>
                <Header categoryHeader={categoryHeader} />
            </header>
            <div className="category__main">
                <MainContent category={category} />
                <Thumbnail />
                <About />
            </div>
            <Footer />
        </>
    )
}

export default CategoryPage;