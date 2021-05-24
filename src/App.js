import React, { useState } from 'react'
import './App.css';

const entries = [
  "Black Backed Seagul",
  "Lord of the Rings",
  "Wated a film / binge-watched a series",
  "Went for a drink / meal",
  "Took photos",
  "Played games",
  "Pirate ships",
  "Went for a walk",
  "Met with friends",
  "Beach or park",
  "DIY / Made something",
  "Horses / pets",
  "Baked",
  "Music",
  "Epic fail!",
]

const initialState = entries.map((entry, index) => (
  {
    title: entry,
    isChecked: false,
    isStarred: false,
    id: index,
  }
))

const Checkbox = ({checked, onClick}) => {
  return (
    <div className={`checkbox ${checked ? 'checked' : ''}`} onClick={onClick} />
  )
}

const Star = ({checked, onClick}) => {
  return (
    <div className="star-container" onClick={onClick}>
      {checked && <div className="star checked">★</div>}
      {!checked && <div className="star">☆</div>}
    </div>
  )
}

const Entry = ({title, checked, starred, onChecked, onStarred}) => {
  return (
    <div className="entry-container">
      <Checkbox checked={checked} onClick={onChecked} />
      <p>{title}</p>
      <div className="spacer" />
      <Star checked={starred} onClick={onStarred} />
    </div>
  )
}

const Counter = ({count, total}) => {
  return (
    <div>
      {count !== total && <h3>{`${count} out of ${total}`}</h3>}
      {count === total && <h3>Full house! 🥳</h3>}
    </div>
  )
}

function App() {
  const [entries, setEntries] = useState(initialState)

  const handleCheckboxChange = (id) => {
    const newEntries = entries.map(entry => {
      if (entry.id === id) {
        return {
          ...entry,
          isChecked: !entry.isChecked,
        }
      } else {
        return entry
      }
    })
    setEntries(newEntries)
  }

  const handleStarChange = (id) => {
    const newEntries = entries.map(entry => {
      const starred = entry.id === id ? !entry.isStarred : false
      return {
        ...entry,
        isStarred: starred,
      }
    })
    setEntries(newEntries)
  }

  return (
    <div className="App">
      <h1>🙌 Weekend Bingo! 🙌</h1>
      <div className="entries-container">
        {entries.map(entry => (
          <Entry
            title={entry.title}
            checked={entry.isChecked}
            starred={entry.isStarred}
            onChecked={() => handleCheckboxChange(entry.id)}
            onStarred={() => handleStarChange(entry.id)}
          />
        ))}
      </div>
      <Counter
        count={entries.map(entry => entry.isChecked ? 1 : 0).reduce((acc, count) => acc + count, 0)}
        total={entries.length}
      />
      {entries.find(entry=> entry.isStarred && entry.isChecked) && (
        <h4>Your starred topic has been mentioned! 🎉</h4>
      )}
    </div>
  );
}

export default App;
