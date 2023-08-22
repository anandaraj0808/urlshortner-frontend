import React, { useState } from 'react';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    try {
      const response = await fetch('your_backend_url_here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        setShortUrl(data.shortUrl);
      } else {
        console.error('Error shortening URL');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter URL to shorten"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
