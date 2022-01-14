import './App.scss';
import Button from './form/Button';
import SecondaryButton from './form/SecondaryButton';
import InputRadio from './form/InputRadio';
import Input from './form/Input';
import CartCounter from './form/CartCounter';

function App() {
  return (
    <div className="App">

      <div>
        <Button type={'one'} />
      </div>
      <div>
        <Button type={'two'} />
      </div>
      <div>
        <SecondaryButton />
      </div>
      <div>
        <InputRadio title={'e-Commerce'} />
      </div>

      <div>
        <Input />
      </div>

      <div>
        <CartCounter />
      </div>

    </div>
  );
}

export default App;
