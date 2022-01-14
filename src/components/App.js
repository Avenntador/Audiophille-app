import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';


function App() {

  return (
    <div className="App">
      {/* <h1 className='heading__one'>Text for testing</h1>
        <h2 className='heading__two'>Text for testing</h2>
        <h3 className='heading__three'>Text for testing</h3>
        <h4 className='heading__four'>Text for testing</h4>
        <h5 className='heading__five'>Text for testing</h5>
        <h6 className='heading__six'>Text for testing</h6>
        <p className='overline'>Text for testing</p>
        <p className='subtitle'>Text for testing</p>
        <p className='paragraph'>Text for testing Text for testing Text for testing Text for testing Text for testing</p> 
        <a className='btn btn__one' href="#">see product</a>
        <a className='btn btn__two' href="#">see product</a>
      */}

      <a className='btn btn__three' href="#">
        {`shop  `}
        {<FontAwesomeIcon icon="chevron-right" size="sm" color='#D87D4A' />}
      </a>
      <div className='input-radio__wrapper'>
        <input className='input-radio' type="radio" name="radio" id="" />
        <label className='input-radio__label' htmlFor="radio">e-Money</label>
      </div>
      <div className='input-radio__wrapper '>
        <input className='input-radio' type="radio" name="radio" id="" />
        <label className='input-radio__label' htmlFor="radio">Cash on Delivery</label>
      </div>
      <div className='input1'>
        <input name='input' className='input' type="text" placeholder='Insert your name' />
        <label className='input__label' htmlFor='input'>Name</label>
      </div>

      <div className='input1'>
        <div className='cart-counter'>
          <span className='cart-counter__plus'>+</span>
          <span className='cart-counter__amount'>1</span>
          <span className='cart-counter__minus'>-</span>
        </div>
      </div>


    </div>
  );
}

export default App;
