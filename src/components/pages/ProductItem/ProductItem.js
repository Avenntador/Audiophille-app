import './ProductItem.scss';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Navbar from '../GlobalLayouts/Navbar/Navbar';
import PreviewImage from './PreviewImage/PreviewImage';
import Description from './Description/Description';
import Info from './Info/Info';
import Gallery from './Gallery/Gallery';
import Other from './Other/Other';
import Thumbnail from '../GlobalLayouts/Thumbnail/Thumbnail';
import About from '../GlobalLayouts/About/About';
import Footer from '../GlobalLayouts/Footer/Footer';


function ProductItem() {

    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const productName = useParams().productId;

    useEffect(() => {
        fetch('http://localhost:4000/data')
            .then(response => response.json())
            .then(response => {
                response.forEach(item => {
                    if (item.slug === productName) {
                        setProduct(item);
                    }
                })
            })
    }, [productName])

    if (Object.keys(product).length !== 0) {
        let isNew = product.new ? () => <p className="overline">new product</p> : null;
  
        return (
            <>
                <header className="product-header">
                    <Navbar />
                </header>
                <div className="product-container">
                    <p onClick={() => navigate(-1)} className="paragraph back-btn">Go back</p>
                    <div className="product">
                        <PreviewImage image={product.image.desktop} />
                        <Description
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            render={isNew}
                        />
                    </div>
                    <Info
                        features={product.features}
                        equip={product.includes}
                    />
                    <Gallery
                        gallery={product.gallery}
                    />
                    <Other
                        others={product.others}
                    />
                    <Thumbnail />
                    <About />
                </div>
                <Footer />
            </>
        )
    } else return null;
}

export default ProductItem;