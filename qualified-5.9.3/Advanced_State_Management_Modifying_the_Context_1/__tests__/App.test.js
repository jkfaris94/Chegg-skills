import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';
import { MemoryRouter } from 'react-router-dom';

describe('Interactivity functionality', () => {
  test('clicking an incomplete task\'s "Mark Complete" button marks it as complete', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    const [ task ] = container.querySelectorAll(".task");
    expect(task.textContent).toMatch(/Schedule meeting with Mark re: Q4 goals/i);
    expect(task.textContent).toMatch(/Mark Complete/i);
    
    const button = task.querySelector("button");
    fireEvent.click(button);

    const currentStatsEl = container.querySelector("#current-stats");
    expect(currentStatsEl.textContent).toMatch(/4\s?Tasks Completed/i);
    
    expect(task.textContent).toMatch(/Schedule meeting with Mark re: Q4 goals/i);
    expect(task.textContent).toMatch(/Mark Incomplete/i);
  });
  
  test('clicking a complete task\'s "Mark Incomplete" button marks it as incomplete', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    const [ _first, task ] = container.querySelectorAll(".task");
    expect(task.textContent).toMatch(/Update MOU for Phormula/i);
    expect(task.textContent).toMatch(/Mark Incomplete/i);
    
    const button = task.querySelector("button");
    fireEvent.click(button);

    const currentStatsEl = container.querySelector("#current-stats");
    expect(currentStatsEl.textContent).toMatch(/2\s?Tasks Completed/i);
    
    expect(task.textContent).toMatch(/Update MOU for Phormula/i);
    expect(task.textContent).toMatch(/Mark Complete/i);
  });
})
