import React, { useState } from 'react';

function EntryForm({ onAddEntry }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '' && content.trim() ==='') return;

        const newEntry = {
            id: Date.now(),
            title,
            content,
            date: new Date().toLocaleDateString()
        };

        onAddEntry(newEntry);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="entry-form">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">Add Entry</button>
        </form>
    );
}

export default EntryForm;