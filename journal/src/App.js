import React, { useState } from 'react';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim()) {
      setEntries([...entries, {
        id: Date.now(),
        text: newEntry,
        date: new Date().toLocaleDateString()
      }]);
      setNewEntry('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addEntry();
    }
  };

  return (
    <div className="App">
      <h1>My Journal</h1>
      
      <div className="entry-form">
        <input
          type="text"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Write your journal entry..."
          className="entry-input"
        />
        <button onClick={addEntry} className="add-button">
          Add Entry
        </button>
      </div>

      <div className="journal-list">
        {entries.map(entry => (
          <div key={entry.id} className="journal-entry">
            <div className="entry-date">{entry.date}</div>
            <div className="entry-text">{entry.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
