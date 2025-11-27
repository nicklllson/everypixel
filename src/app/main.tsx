import { createRoot } from 'react-dom/client';
import { App } from './app';
import './index.scss';

const rootComponent = document.getElementById('root');

if (!rootComponent) {
  throw new Error('Not have element with id root');
}

createRoot(rootComponent).render(<App />);
