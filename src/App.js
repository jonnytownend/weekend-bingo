import React, { useState } from 'react'
import './App.css';

import { Entry } from './components/entry/entry.component'
import { Counter } from './components/counter/counter.component'
import { initialState } from './state/initial-state'

const App = () => {
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

  const handleClear = () => {
    const newEntries = entries.map(entry => {
      return {
        ...entry,
        isStarred: false,
        isChecked: false,
      }
    })
    setEntries(newEntries)
  }

  return (
    <div className="App">
      <div className="bingo-board">
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
        <div className="clear-button-container">
          <div className="clear-button" onClick={handleClear}>Clear</div>
        </div>
      </div>
      <div className="instructions">
        <p>✅ Use the checkboxes to keep track of activities mentioned in weekly catchups.</p>
        <p>⭐ Star an activitiy that you think is likely to come up. Extra points if you get a starred item!</p>
      </div>
    </div>
  );
}

export default App
