import '../../sass/components/_input.scss';

function Input() {
    return (
        <div>
            <input name='input' className='input' type="text" placeholder='Insert your name' />
            <label className='input__label' htmlFor='input'>Name</label>
        </div>
    );
}

export default Input;