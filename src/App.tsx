import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { Router } from './Router';

export default function App() {
  return (
    <ThemeProvider>
     <Router />
    </ThemeProvider>
  );
}
