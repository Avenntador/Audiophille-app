import '../../sass/components/_input-radio.scss';

function InputRadio({ value, title, setRadioBtnValue, defaultChecked=false }) {

    const clickHandler = (e) => {
        setRadioBtnValue(e.target.value);
    }

    return (
        <div>
            <input defaultChecked = {defaultChecked} onClick={clickHandler} value={value} className ='input-radio' type="radio" name="radio" id="" />
            <label className ='input-radio__label' htmlFor="radio">{title}</label>
        </div>
    );
}

export default InputRadio;