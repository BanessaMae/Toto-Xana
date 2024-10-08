import React from 'react';
import ReactDOM from 'react-dom/client'; // Измененный импорт
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Создаем корневой элемент
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Element with id 'root' not found.");
}