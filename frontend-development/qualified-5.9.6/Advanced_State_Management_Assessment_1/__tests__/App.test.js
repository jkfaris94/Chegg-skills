import React from 'react';
import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';
import { MemoryRouter } from 'react-router-dom';

describe('Features', () => {
  describe('Contacts', () => {
    test('the list of contacts displays to the page', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      const currentStatsEl = container.querySelector("#current-stats");
      expect(currentStatsEl.textContent).toMatch(/.*25\s?Contacts/i);

      const contactsEl = container.querySelector("#contacts");
      expect(contactsEl.textContent).toMatch(/Coffey May/i);
      expect(contactsEl.textContent).toMatch(/Oronoko/i);
      expect(contactsEl.textContent).toMatch(/pat\_leach\@comvoy\.com/i);
    });

    test('searching narrows the list', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      const input = screen.getByPlaceholderText('Search by name...');
      fireEvent.change(input, { target: { value: 'p' } });

      const contactsEl = container.querySelector("#contacts");
      expect(contactsEl.textContent).not.toMatch(/Coffey May/i);
      expect(contactsEl.textContent).toMatch(/Chapman Wallace/i);
      expect(contactsEl.textContent).toMatch(/Pat Leach/i);
      
      fireEvent.change(input, { target: { value: 'pa' } });
      expect(contactsEl.textContent).not.toMatch(/Coffey May/i);
      expect(contactsEl.textContent).not.toMatch(/Chapman Wallace/i);
      expect(contactsEl.textContent).toMatch(/Pat Leach/i);
    });
  });
  
  describe('Tasks', () => {
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
      expect(currentStatsEl.textContent).toMatch(/.*4\s?Tasks Complete/i);

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
      expect(currentStatsEl.textContent).toMatch(/.*2\s?Tasks Complete/i);

      expect(task.textContent).toMatch(/Update MOU for Phormula/i);
      expect(task.textContent).toMatch(/Mark Complete/i);
    });
  });

  describe('Sales', () => {
    test('clicking an open sale\'s "Close" button marks it as closed', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      const [ _closed, sale ] = container.querySelectorAll(".sale");
      expect(sale.textContent).toMatch(/Comvoy - \$30\,000/i);
      expect(sale.textContent).toMatch(/Close/i);

      const button = sale.querySelector("button");
      fireEvent.click(button);

      const salesTotalEl = container.querySelector(".sales-total");
      expect(salesTotalEl.textContent).toMatch(/\$87\,000/i);

      expect(sale.textContent).toMatch(/Comvoy - \$30\,000/i);
      expect(sale.textContent).toMatch(/Re-open/i);
    });

    test('clicking a closed sale\'s "Re-open" button marks it as open', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      const [ sale ] = container.querySelectorAll(".sale");
      expect(sale.textContent).toMatch(/Hyplex - \$15\,000/i);
      expect(sale.textContent).toMatch(/Re-open/i);

      const button = sale.querySelector("button");
      fireEvent.click(button);

      const salesTotalEl = container.querySelector(".sales-total");
      expect(salesTotalEl.textContent).toMatch(/\$42\,000/i);

      expect(sale.textContent).toMatch(/Hyplex - \$15\,000/i);
      expect(sale.textContent).toMatch(/Close/i);
    });
  });
  
  describe('Calls', () => {
    test('clicking the "Log Call" button with no contact selection shows an error', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      const form = container.querySelector("#new-call-form");
      const submit = form.querySelector("button");
      fireEvent.click(submit);

      const callsEl = container.querySelector("#calls");
      const error = "Please select a contact to log a call from.";
      expect(callsEl.textContent).toMatch(error);
    });

    test('clicking the "Log Call" button with a contact creates a call', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      const form = container.querySelector("#new-call-form");
      const select = screen.getByDisplayValue("-- Choose a Contact --");
      fireEvent.change(select, { target: { value: "3" } });
      const submit = form.querySelector("button");
      fireEvent.click(submit);

      const callsEl = container.querySelector("#calls");
      const text = "Porter Flores of Zentix";
      expect(callsEl.textContent).toMatch(text);
    });
    
    test('clicking the "Create Contract" button creates a new contract', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      const contractInput = screen.getByDisplayValue("0");
      fireEvent.change(contractInput, { target: { value: "99999" } });
      
      const submit = screen.getByText("Create Contract");
      fireEvent.click(submit);

      const [ _first, second ] = container.querySelectorAll(".call");
      expect(second.textContent).toMatch("Contract started!");
      
      const salesEl = container.querySelector("#sales");
      expect(salesEl.textContent).toMatch("$99,999");
    });
  });
});
