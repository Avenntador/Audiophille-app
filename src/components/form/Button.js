import '../../sass/components/_button.scss';

function Button({ type, title='see product' }) {
    return (
        <>
            <a className={`btn btn__${type}`} href="#">{title}</a>
        </>
    );
}

export default Button;