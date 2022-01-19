import './ProductItem.scss';

import Navbar from '../GlobalLayouts/Navbar/Navbar';
import Footer from '../GlobalLayouts/Footer/Footer';
import Thumbnail from '../GlobalLayouts/Thumbnail/Thumbnail';

// import Description from './Description/Description';
// import Info from './Info/Info';
// import Gallery from './Gallery/Gallery';
// import Other from './Other/Other';

import About from '../GlobalLayouts/About/About';

import { useState, useEffect } from 'react';


function ProductItem() {


    // useEffect(() => {
    //     fetch('http://localhost:4000/data')
    //         .then(response => response.json())
    //         .then(response => console.log(response));
    // }, []);

    return (
        <>
            {/* <div className="product-header">
                <Navbar />
            </div>
            <div className="product-container">
                <p className="paragraph">Go back</p>
                <div className="product">
                    <div className="product__img">
                        <img src={ItemImg} alt="prdouct-item" />
                    </div>
                    <Description />
                </div>
                <Info />
                <Gallery />
                <Other />
                <Thumbnail />
                <About />
            </div> */}
            <Footer />
        </>


    )
}

export default ProductItem;