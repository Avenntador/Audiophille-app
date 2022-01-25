import '../../sass/components/_button.scss';
import { useLocation, Link } from 'react-router-dom';

function Button({ type, title = 'see product', slug = '', to = '', category = '' }) {
    const url = useLocation();


    let finalUrl = '';
    if (!to) {
        finalUrl = `${url.pathname}/${slug}`
    } else if (!category) {
        finalUrl = `${to}/${slug}`
    } else {
        finalUrl = `${category}/${slug}`
    }

 
    return (
        <>
            <Link className={`btn btn__${type}`} to={finalUrl}>{title}</Link>
        </>
    );
}

export default Button;