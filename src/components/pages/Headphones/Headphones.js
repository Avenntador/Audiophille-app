import './Headphones.scss';
import Navbar from '../GlobalLayouts/Navbar/Navbar';
import Thumbnail from '../GlobalLayouts/Thumbnail/Thumbnail';
import Footer from '../GlobalLayouts/Footer/Footer';
import About from '../GlobalLayouts/About/About';
import ItemDescription from '../GlobalLayouts/ItemDescription/ItemDescription';
import ItemDescriptionReversed from '../GlobalLayouts/ItemDescriptionReversed/ItemDescriptionReversed';
import HeadphoneXX99MARK2 from '../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import HeadphoneXX99MARK1 from '../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import HeadphoneXX59 from '../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';

const titleMark2 = <>XX99 Mark II <br /> Headphones</>
const descMark2 = <>The new XX99 Mark II headphones is the pinnacle of pristine <br /> audio. It redefines your premium headphone experience by <br /> reproducing the balanced depth and precision of studio-quality <br /> sound.</>

const titleMark1 = <>XX99 Mark I <br /> Headphones</>
const descMark1 = <>As the gold standard for headphones, the classic XX99 Mark I <br /> offers detailed and accurate audio reproduction for <br /> audiophiles, mixing engineers, and music aficionados alike in <br /> studios and on the go.</>

const titleXX59 = <>XX59 <br />Headphones</>
const descXX59 = <>Enjoy your audio almost anywhere and customize it to your <br /> specific tastes with the XX59 headphones. The stylish yet <br /> durable versatile wireless headset is a brilliant companion at <br /> home or on the move.</>

function Headphones() {
    return(
        <>
            <header className='headphones__header'>
                    <div className="header__content">
                        <Navbar />
                        <h2 className="heading__two">headphones</h2>
                    </div>
            </header>
            <div className="headphones__main">
                <ItemDescription 
                    image={HeadphoneXX99MARK2}
                    title={titleMark2}
                    desc={descMark2}
                    render={() => <p className="overline">new product</p>}
                />
                <ItemDescriptionReversed
                    image={HeadphoneXX99MARK1}
                    title={titleMark1}
                    desc={descMark1}
                />
                <ItemDescription 
                    image={HeadphoneXX59}
                    title={titleXX59}
                    desc={descXX59}
                />
                <Thumbnail />
                <About />
            </div>
            <Footer />
        </>
    )
}

export default Headphones;