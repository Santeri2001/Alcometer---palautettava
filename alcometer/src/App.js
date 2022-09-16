import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [gender, setGender] = useState('male');

  return (
    <form>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" step="1"></input>
      </div>
      <div>
        <label>Bottles</label>
      </div>
      <div>
        <label>Times</label>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="sukupuoli" value="male" defaultChecked onChange={e => setGender} /><label>Male</label>
        <input type="radio" name="sukupuoli" value="female" onChange={e => setGender} /><label>Female</label>
      </div>
      <div>
        <output></output>
      </div>
      <button>Calculate</button>
    </form>
  );
}

export default App;
