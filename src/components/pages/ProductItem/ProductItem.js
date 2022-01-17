import './ProductItem.scss';

import Navbar from '../GlobalLayouts/Navbar/Navbar';

function ProductItem() {
    return (
        <>
            <div className="product-header">
                <Navbar />
                
            </div>
            <div className="product-container">
                <p className="paragraph">Go back</p>
            </div>
        </>


    )
}

export default ProductItem;