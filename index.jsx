// File: App.jsx
// Project: Daily Journal App
// Description: A minimalist React app to write, store, and display daily journal entries

import { useState } from 'react';

  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');

  const addEntry = () => {
    if (text.trim() !== '') {
      setEntries([{ id: Date.now(), content: text }, ...entries]);
      setText('');
    }
  };a

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">📝 Daily Journal</h1>
      <textarea
        className="w-full p-3 border border-gray-300 rounded mb-4"
        rows={4}
        placeholder="Write your thoughts here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={addEntry}
      >
        Add Entry
      </button>

      <div className="mt-6 space-y-4">
        {entries.map(entry => (
          <div key={entry.id} className="p-4 bg-white rounded shadow">
            <p>{entry.content}</p>
            <p className="text-sm text-gray-400 mt-2">{new Date(entry.id).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
README.md

# Daily Journal App

A simple and clean React-based app to record and view your daily journal entries. Great for developing a consistent journaling habit.

## Features
- Add daily journal entries
- Automatically timestamped
- Clean UI with Tailwind CSS

## Tech Stack
- React
- Tailwind CSS

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/daily-journal-app.git
cd daily-journal-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Use the app
Open in browser:
```
http://localhost:5173
```

## License
MIT
*/
