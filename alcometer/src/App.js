import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [litres, setLitres] = useState(0);
  const [grams, setGrams] = useState(0);
  const [burning, setBurning] = useState(0);
  const [gramsleft, setGramsleft] = useState(0);
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const litres = bottles * 0.33;
    setLitres(litres);

    const grams = litres * 8 * 4.5;
    setGrams(grams);

    const burning = weight / 10;
    setBurning(burning);

    const gramsleft = grams - (burning * time);
    setGramsleft(litres);

    let vastaus = 0;

    if (gender === 'male') {
      vastaus = gramsleft / (weight * 0.7);
    } else {
      vastaus = gramsleft / (weight * 0.6);
    }

    setResult(vastaus);
  }

  return (
    <>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <input value={bottles} onChange={e => setBottles(e.target.value)}/>
        </div>
        <div>
          <label>Time</label>
          <input value={time} onChange={e => setTime(e.target.value)}/>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="sukupuoli" value="male" defaultChecked onChange={e => setGender} /><label>Male</label>
          <input type="radio" name="sukupuoli" value="female" onChange={e => setGender} /><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(0)}</output>
        </div>
      <button>Calculate</button>
      </form>
    </>
  );
}

export default App;
