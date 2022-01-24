import './Header.scss';
import Navbar from '../../GlobalLayouts/Navbar/Navbar';

function Header({categoryHeader, toggleModal}) {
    return(
        <div className="header__content">
            <Navbar toggleModal={toggleModal}/>
            <h2 className="heading__two">{categoryHeader}</h2>
        </div>
    )
}

export default Header;