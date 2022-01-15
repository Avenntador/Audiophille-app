import './Home.scss';
import Header from './Header';
import Thumbnail from '../GlobalLayouts/Thumbnail/Thumbnail';
import Products from './Products';
import About from '../GlobalLayouts/About/About';
import Footer from '../GlobalLayouts/Footer/Footer';

function Home() {
    return (
        <>
            <Header />
            <main className="main">
                <Thumbnail />
                <Products />
                <About />
            </main>
            <Footer />
        </>
    )
}

export default Home;