import React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/main.scss';

function App() {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));