import './ProductItem.scss';

import Navbar from '../GlobalLayouts/Navbar/Navbar';
import Footer from '../GlobalLayouts/Footer/Footer';
import Thumbnail from '../GlobalLayouts/Thumbnail/Thumbnail';
import Button from '../../form/Button';
import CartCounter from '../../form/CartCounter';

// import ItemImg from '../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';

// import GalleryImg1 from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
// import GalleryImg2 from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
// import GalleryImg3 from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';

// import OtherImg1 from '../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
// import OtherImg2 from '../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
// import OtherImg3 from '../../../assets/shared/desktop/image-xx59-headphones.jpg';
import About from '../GlobalLayouts/About/About';

function ProductItem() {
    return (
        <>
            <div className="product-header">
                <Navbar />
                
            </div>
            {/* <div className="product-container">
                <p className="paragraph">Go back</p>
                <div className="product">
                    <div className="product__img">
                        <img src={ItemImg} alt="prdouct-item" />
                    </div>
                    <div className="product__desc">
                        <p className="overline">new product</p>
                        <h2 className="heading__two">XX99 Mark II <br /> Headphones</h2>
                        <p className="paragraph">The new XX99 Mark II headphones is the pinnacle of pristine <br /> audio. It redefines your premium headphone experience by <br /> reproducing the balanced depth and precision of studio-quality <br /> sound.</p>
                        <p className="price">$ 2,999</p>
                        <div className="product__buttons">
                            <CartCounter />
                            <Button type={'one'}  title={'add to cart'}/>
                        </div>
                    </div>
                </div>
                <div className="product__info">
                        <div className="product__features">
                            <h3 className="heading__three">features</h3>
                            <p className="paragraph">
                                Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                               <br />
                               <br />
                                The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                            </p>
                        </div>
                        <div className="product__equip">
                            <h3 className="heading__three">in the box</h3>
                            <p className="paragraph"><span>1x</span>Headphone Unit</p>
                            <p className="paragraph"><span>2x</span>Headphone Unit</p>
                            <p className="paragraph"><span>1x</span>Headphone Unit</p>
                            <p className="paragraph"><span>3x</span>Headphone Unit</p>
                        </div>
                </div>
                <div className="product__gallery">
                    <div className="product__gallery_small">
                        <img src={GalleryImg1} alt="" />
                        <img src={GalleryImg2} alt="" />
                    </div>
                    <div className="product__gallery_big">
                        <img src={GalleryImg3} alt="" />
                    </div>
                </div>
                <div className="product__other">
                    <h3 className="heading__three">you may also like</h3>
                    <div className="product__other_items">
                        <div className="item">
                            <img src={OtherImg1} alt="" />
                            <h5 className="heading__five">XX99 MARK I</h5>
                            <Button type={'one'}/>
                        </div>
                        <div className="item">
                            <img src={OtherImg2} alt="" />
                            <h5 className="heading__five"> XX59</h5>
                            <Button type={'one'}/>
                        </div>
                        <div className="item">
                            <img src={OtherImg3} alt="" />
                            <h5 className="heading__five">ZX9 SPEAKER</h5>
                            <Button type={'one'}/>
                        </div>
                    </div>
                </div>
                <Thumbnail />
                <About />
            </div> */}
            <Footer />
        </>


    )
}

export default ProductItem;