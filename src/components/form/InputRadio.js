import '../../sass/components/_input-radio.scss';

function InputRadio({ title }) {
    return (
        <div>
            <input  className='input-radio' type="radio" name="radio" id="" />
            <label className='input-radio__label' htmlFor="radio">{title}</label>
        </div>
    );
}

export default InputRadio;