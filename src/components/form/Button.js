import '../../sass/components/_button.scss';

function Button({ type }) {
    return (
        <>
            <a className={`btn btn__${type}`} href="#">see product</a>
        </>
    );
}

export default Button;