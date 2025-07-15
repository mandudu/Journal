import React from 'react';

// JournalEntry displays a single journal object with optional summary and delete button
function JournalEntry({ entry, onDelete }) {
  return (
    <div className="journal-entry">
      <h2>{entry.title}</h2>
      <small>{entry.date}</small>
      <p>{entry.content}</p>

      {/* Conditionally show summary if available */}
      {entry.summary && (
        <div className="summary">
          <strong>Summary:</strong>
          <p>{entry.summary}</p>
        </div>
      )}

      {/* Trigger delete function when button is clicked */}
      <button onClick={() => onDelete(entry.id)}>Delete</button>
    </div>
  );
}

export default JournalEntry;

/**
Key Concepts:
- Stateless "presentational component"
- Receives data and functions via props
- Conditional rendering for the summary section
- Event handling with props
*/
