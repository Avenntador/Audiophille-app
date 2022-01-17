import './Speakers.scss';
import Navbar from '../GlobalLayouts/Navbar/Navbar';
import Thumbnail from '../GlobalLayouts/Thumbnail/Thumbnail';
import Footer from '../GlobalLayouts/Footer/Footer';
import About from '../GlobalLayouts/About/About';
import ItemDescription from '../GlobalLayouts/ItemDescription/ItemDescription';
import ItemDescriptionReverse from '../GlobalLayouts/ItemDescriptionReversed/ItemDescriptionReversed';
import SpeakerZX9 from '../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import SpeakerZX7 from '../../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg';

const titleZX9 = <>ZX9 <br /> SPEAKER</>
const descZX9 = <>Upgrade your sound system with the all new ZX9 active <br /> speaker. It’s a bookshelf speaker system that offers truly <br /> wireless connectivity -- creating new possibilities for more <br /> pleasing and practical audio setups.</>

const titleZX7 = <>ZX7 <br /> SPEAKER</>
const descZX7 = <>Stream high quality sound wirelessly with minimal loss. The ZX7 <br /> bookshelf speaker uses high-end audiophile components that <br /> represents the top of the line powered speakers for home or <br /> studio use.</>

function Speakers() {
    return(
        <>
            <header className='speakers__header'>
                <div className="header__content">
                    <Navbar />
                    <h2 className="heading__two">Speakers</h2>
                </div>
            </header>
            <div className="speakers__main">
                <ItemDescription 
                    image={SpeakerZX9}
                    title={titleZX9}
                    desc={descZX9}
                    render={() => <p className="overline">new product</p>}
                />
                <ItemDescriptionReverse 
                    image={SpeakerZX7}
                    title={titleZX7}
                    desc={descZX7}
                />
                <Thumbnail />
                <About />
            </div>
            <Footer />
        </>
    )
}

export default Speakers;