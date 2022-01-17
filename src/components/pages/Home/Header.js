import './Header.scss';
import Navbar from '../GlobalLayouts/Navbar/Navbar';
import Button from '../../form/Button';

function Header() {
    return (
        <header className='home-header'>
            <div className="home-header__content">
                <Navbar />
                <div className="home-header__text">
                    <p className="overline">new product</p>
                    <h1 className="heading__one">XX99 Mark II <br/> Headphones</h1>
                    <p className="paragraph">Experience natural, lifelike audio and exceptional <br/> build quality made for the passionate music <br/> enthusiast.</p>
                    <Button type={'one'}/>
                </div>
            </div>
        </header>
    )
}

export default Header;