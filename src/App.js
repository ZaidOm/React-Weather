import React from 'react';

const api = {
  key: "285481f6b049e1d8fd708e647ffd5e95",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
