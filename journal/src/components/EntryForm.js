import React, { useState } from 'react'; // useState hook for managing form inputs

// EntryForm receives the onAddEntry function from App via props
function EntryForm({ onAddEntry }) {
  // Local state for input fields
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior (page reload)

    // Prevent empty entries
    if (!title.trim() || !content.trim()) return;

    // Create a new journal entry object
    const newEntry = {
      id: Date.now(), // Unique ID using timestamp
      title,
      content,
      date: new Date().toLocaleDateString(), // Current date
    };

    // Pass the entry to App component
    await onAddEntry(newEntry);

    // Reset the form inputs
    setTitle('');
    setContent('');
  };

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title state
      />
      <textarea
        placeholder="Write your journal entry..."
        value={content}
        onChange={(e) => setContent(e.target.value)} // Update content state
      />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default EntryForm;

/**
Key Concepts:
- Local state management with useState
- Controlled inputs (value + onChange)
- "Lifting state up" by passing data to the parent (App.js)
*/
