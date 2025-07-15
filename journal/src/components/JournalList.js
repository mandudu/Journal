import React from 'react';
import JournalEntry from './JournalEntry'; // Import single journal entry component

// JournalList receives the array of entries and a delete function
function JournalList({ entries, onDelete }) {
  return (
    <div className="journal-list">
      {entries.length === 0 ? (
        // Show this if there are no journal entries
        <p>No journal entries yet.</p>
      ) : (
        // Map each entry to a JournalEntry component
        entries.map((entry) => (
          <JournalEntry key={entry.id} entry={entry} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default JournalList;

/**
Key Concepts:
- Mapping an array to components
- Passing props down to child components
- Using a "key" prop helps React track list items efficiently
*/
