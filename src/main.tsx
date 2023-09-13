import '@/globals.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './providers/theme-provider';
import HomePage from '@/pages/home/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

const rootElem = document.getElementById('root');
const root = createRoot(rootElem!);

root.render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="jest-test-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
