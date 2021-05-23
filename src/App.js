import logo from './logo.svg';
import './App.css';

const entries = [
  "Black Backed Seagul",
  "Lord of the Rings",
  "Cool Runnings",
  "Went for a drink / meal",
  "Took photos",
  "Played games",
  "Pirate ships",
  "Went for a walk",
  "Met with friends",
]

const Checkbox = () => {
  return (
    <div className="checkbox" />
  )
}

const Entry = ({title, checked}) => {
  return (
    <div className="entry-container">
      <Checkbox />
      <p>{title}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Weekend Bingo!</h1>
      {entries.map(entry => (
        <Entry title={entry} />
      ))}
    </div>
  );
}

export default App;
