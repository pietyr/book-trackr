import React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/main.scss';
import Home from './pages/Home';

function App() {
  return <Home />;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
