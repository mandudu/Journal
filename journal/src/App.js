import React, { useState } from 'react';
import EntryForm from './components/EntryForm';
import JournalList from './components/JournalList';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);

  // 🔥 Summarize journal entry using Fireworks.ai API
  const summarizeEntry = async (entry) => {
    try {
      const response = await fetch("https://api.fireworks.ai/inference/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_FIREWORKS_API_KEY}`,
        },
        body: JSON.stringify({
          model: "accounts/fireworks/models/llama-v2-7b-chat",
          prompt: `Summarize this journal entry:\nTitle: ${entry.title}\nContent: ${entry.content}`,
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      return data.choices?.[0]?.text?.trim() || 'Summary failed';
      
    } catch (err) {
      console.log("API Key:", process.env.REACT_APP_FIREWORKS_API_KEY);
      console.error('🔥 Summary failed:', err);
      return 'Summary failed';
    }
  };

  // Add new entry (with summary)
  const addEntry = async (newEntry) => {
    const summary = await summarizeEntry(newEntry);
    const entryWithSummary = {
      ...newEntry,
      summary,
    };
    setEntries([entryWithSummary, ...entries]);
  };

  // Delete an entry by ID
  const deleteEntry = (id) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
  };

  return (
    <div className="app">
      <h1>📝 My Journal</h1>
      <EntryForm onAddEntry={addEntry} />
      <JournalList entries={entries} onDelete={deleteEntry} />
      
      
    </div>
  );
}

export default App;
