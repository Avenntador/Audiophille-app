import '../../sass/components/_button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function SecondaryButton({ to = '/' }) {
    return (
        <>
            <NavLink to={`/${to}`} className='btn btn__three'>
                {`shop  `}
                {<FontAwesomeIcon icon="chevron-right" size="sm" color='#D87D4A' />}
            </NavLink>
        </>
    );
}

export default SecondaryButton;