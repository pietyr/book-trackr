import React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/main.scss';
import Library from './Library';

function App() {
  return (
    <div>
      <h1>Library</h1>
      <Library />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
