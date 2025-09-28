import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    // Gọi API và cập nhật kết quả
    console.log('Tìm kiếm với từ khóa:', query);
    // Thiết lập kết quả mẫu
    setResults(['Kết quả 1', 'Kết quả 2']);
  };

  return (
    <div className="App">
      <h1>Từ Khóa Tìm Kiếm</h1>
      <SearchBar onSearch={handleSearch} />
      <Results results={results} />
    </div>
  );
}

export default App;