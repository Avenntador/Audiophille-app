import '../../sass/components/_input.scss';

function Input({type, title = '', placeholder }) {
    return (
        <div>
            <input name='input' className='input' type={type} placeholder={placeholder} />
            <label className='input__label' htmlFor='input'>{title}</label>
        </div>
    );
}

export default Input;