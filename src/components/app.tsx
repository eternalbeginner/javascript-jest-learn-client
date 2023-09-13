import '@/globals.css';

import { ThemeProvider } from '@/providers/theme-provider';
import { Button } from './ui/button';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="jest-test-theme">
      <Button>Hello There</Button>
    </ThemeProvider>
  );
}
