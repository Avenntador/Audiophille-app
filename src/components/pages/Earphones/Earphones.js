import './Earphones.scss';
import Navbar from '../GlobalLayouts/Navbar/Navbar';
import Thumbnail from '../GlobalLayouts/Thumbnail/Thumbnail';
import Footer from '../GlobalLayouts/Footer/Footer';
import About from '../GlobalLayouts/About/About';
import ItemDescription from '../GlobalLayouts/ItemDescription/ItemDescription';
import EarphonesImage from '../../../assets/product-yx1-earphones/desktop/image-product.jpg'


const title = <>YX1 WIRELESS <br/> EARPHONES</>;
const desc = <>
                Tailor your listening experience with bespoke dynamic drivers <br /> from the new YX1 Wireless Earphones. Enjoy incredible <br /> high-fidelity sound even in noisy environments with its active <br /> noise cancellation feature.
            </>


function Earphones() {
    return(
        <>
            <header className='earphones__header'>
                <div className="header__content">
                    <Navbar />
                    <h2 className="heading__two">earphones</h2>
                </div>
            </header>
            <div className="earphones__main">
                <ItemDescription 
                    image={EarphonesImage}
                    title={title}
                    desc={desc}
                    render={() => <p className="overline">new product</p>}
                />
                <Thumbnail />
                <About />
            </div>
            <Footer />
        </>
    )
}

export default Earphones;