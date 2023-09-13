import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElem = document.getElementById('root');
const root = createRoot(rootElem!);

root.render(
  <StrictMode>
    <h1>Hello World</h1>
  </StrictMode>
);
