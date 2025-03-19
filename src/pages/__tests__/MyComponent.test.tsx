import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyLogin from '../TestLogin2';

describe('MyLogin Component', () => {
    let fetchSpy: jest.SpyInstance; //declare fetchSpy.
    beforeEach(() => {
        // Mock the fetch function using jest.spyOn
        fetchSpy = jest.spyOn(global, 'fetch');
        fetchSpy.mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ message: 'Login successful' }),
        } as Response); //Type assertion.
    });

    afterEach(() => {
        fetchSpy.mockRestore(); // Restore the original fetch function
    });

    it('renders the form elements', () => {
    render(<MyLogin />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('submits the form with correct data', async () => {
    render(<MyLogin />);
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'testuser', password: 'testpassword' }),
      });
    });

    await waitFor(() => {
      expect(screen.getByText(/Login successful/i)).toBeInTheDocument();
    });
  });

    it('displays error message on failed login', async () => {
      fetchSpy.mockResolvedValueOnce({
        ok: false,
        json: () => Promise.resolve({ message: 'Invalid credentials' }),
      } as Response); 

    render(<MyLogin />);
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
    });
  });

  it('displays modal message on user not found', async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ message: 'User does not exist' }),
    } as Response);

    render(<MyLogin />);
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'nonexistentuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'anypassword' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/User does not exist/i)).toBeInTheDocument();
    });

    await waitFor(() => {
        expect(screen.queryByText(/User does not exist/i)).not.toBeInTheDocument();
    }); // 3.5 seconds, to account for the setTimeout delay.

    // }, 3500); // 3.5 seconds, to account for the setTimeout delay.

  });

  it('displays modal message on wrong password', async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ message: 'Wrong password' }),
    } as Response);

    render(<MyLogin />);
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Wrong password/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText(/Wrong password/i)).not.toBeInTheDocument();
    });
    // }, 3500);
  });

  it('handles network errors', async () => {
    fetchSpy.mockRejectedValue(new Error('Network error'));

    render(<MyLogin />);
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Network error during login/i)).toBeInTheDocument();
    });
  });
});