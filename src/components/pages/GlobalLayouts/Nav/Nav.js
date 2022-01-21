import './Nav.scss';
import { Link } from 'react-router-dom';


function Nav() {
        return (
            <nav className="nav">
                <ul>
                    
                    <li className="subtitle"><Link to='/'>home</Link></li>
                    <li className="subtitle"><Link to='/headphones'>headphones</Link></li>
                    <li className="subtitle"><Link to='/speakers'>speakers</Link></li>
                    <li className="subtitle"><Link to='/earphones'>earphones</Link></li>
                </ul>
            </nav>
        )
    }

export default Nav;