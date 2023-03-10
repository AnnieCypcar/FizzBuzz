import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Grid from './Grid';
import Header from './Header';
import Loading from './Loading';
const URL = 'http://localhost:4000'

function App() {
  const [n, setN] = useState('');
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendNum = async () => {
      setLoading(true);
      const { data } = await axios.post(`${URL}/fizzbuzz`, {n}).catch((e) => console.log(e));
      if (data && data.answer) {
        localStorage.setItem(`answer_${n}`, JSON.stringify(data.answer));
        setAnswers(data.answer);
      }
  };

  useEffect(() => {
    if (window.localStorage !== undefined) {
      const allStorage = Object.keys(localStorage);
      const allAnswers = [];
      for (const key of allStorage) {
        if (key.startsWith('answer')) {
          const fizzbuzz = JSON.parse(localStorage.getItem(key));
          const itemKey = key.split('_')[1];
          allAnswers.push({num: itemKey, fizzbuzz});
        }
      }
      setLoading(false);
      setAnswers(allAnswers);
    }
  }, []);

  return (
    <div className='App'>
      <Header />
      <form onSubmit={sendNum}>
          <label>
            pick a number to fizzbuzz!<br/><br/>
            <input type='text' value={n} onChange={(e) => setN(e.target.value)} />
          </label>
          <input type='submit' />
        </form>
        {loading && <Loading />}
        {!loading && <Grid answers={answers} />}
    </div>
  );
}

export default App;
