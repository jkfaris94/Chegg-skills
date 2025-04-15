import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';
import { MemoryRouter } from 'react-router-dom';

describe('Display functionality', () => {
  test('displays that 3 tasks have been completed', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const currentStatsEl = container.querySelector("#current-stats");
    expect(currentStatsEl.textContent).toMatch(/3\s?Tasks Completed/i);
  });

  test('displays tasks as either complete or incomplete', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    const [ first, second, third ] = container.querySelectorAll(".task");
    expect(first.textContent).toMatch(/Schedule meeting with Mark re: Q4 goals/i);
    expect(first.textContent).toMatch(/Mark Complete/i);
    
    expect(second.textContent).toMatch(/Update MOU for Phormula/i);
    expect(second.textContent).toMatch(/Mark Incomplete/i);
    
    expect(third.textContent).toMatch(/Set OOO message for next week's vacation/i);
    expect(third.textContent).toMatch(/Mark Incomplete/i);
  });
});

