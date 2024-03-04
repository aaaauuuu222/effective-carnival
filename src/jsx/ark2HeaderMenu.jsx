import React from 'react';

const Ark2HeaderMenu = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>TOP</li>
          <li style={liStyle}>恐竜</li>
          <li style={liStyle}>資源</li>
          <li style={liStyle}>クラフト系</li>
        </ul>
      </nav>
    </header>
  );
};

// スタイル定義
const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: '#333',
  color: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  paddingLeft: 0,
  marginLeft: 0,
};

const navStyle = {
  maxWidth: '960px',
  margin: '0 auto',
  padding: '1rem 0'
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  margin: 0,
  padding: 0
};

const liStyle = {
  cursor: 'pointer'
};


export default Ark2HeaderMenu;
