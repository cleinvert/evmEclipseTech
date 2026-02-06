// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders evmEclipse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/evmEclipse/i);
    expect(titleElement).toBeInTheDocument();
});
