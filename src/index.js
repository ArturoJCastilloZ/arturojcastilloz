import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './containers/container';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);

