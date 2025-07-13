import React from 'react';

function JournalList({ entries }) {
    return (
        <div className="journal-entry">
            <h2>{entry.title}</h2>
            <small>{entry.date}</small>
            <p>{entry.content}</p>
        </div>
    );
}
export default JournalList;
