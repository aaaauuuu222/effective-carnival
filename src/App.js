import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopPage from './jsx/topPage.jsx';
// 他のコンポーネントもここにインポートします
// 例: import SeventhGrader from './jsx/seventhGrader.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<TopPage />} />
          {/* 他のコンポーネントに対するルートもここに追加 */}
          {
          
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
