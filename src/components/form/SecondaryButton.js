import '../../sass/components/_button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SecondaryButton() {
    return (
        <>
            <a className='btn btn__three' href="#">
                {`shop  `}
                {<FontAwesomeIcon icon="chevron-right" size="sm" color='#D87D4A' />}
            </a>
        </>
    );
}

export default SecondaryButton;