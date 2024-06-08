import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import ScoreSheet from './components/ScoreSheet';

const columns = ['down', 'up', 'free']
const categories = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes', 'Top Sum', 
  'Max', 'Min', 'Middle Sum', 
  'Straight', 'Thrilling', 'Full House', 'Poker', 'Yamb']

const initialScores = {}

for(let column of columns){
  initialScores[column] = Array(categories.length).fill(null);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>YAMB</h1>
        <ScoreSheet categories={categories} columns={columns}/>
      </header>
    </div>
  );
}

export default App;
 