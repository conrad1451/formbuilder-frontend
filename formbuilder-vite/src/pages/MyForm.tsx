import React, { useState } from 'react';

interface WebFormProps {
  onSubmit: (formData: { myName: string }) => Promise<void>;
}

const WebForm: React.FC<WebFormProps> = ({ onSubmit }) => {
    const [myName, setText] = useState('');
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        await onSubmit({ myName });
        setText(''); // Clear the form after successful submission
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (e.g., show an error message)
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter text:
          <input
            type="text"
            value={myName}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  };
interface ApiResponse {
    // Define the structure of your API response here
    message: string;
    // ... other properties
  }

const MyFormContainer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFormSubmit = async (formData: { myName: string }) => {
    setLoading(true);
    setErrorMessage(null); // Clear previous errors
    setSuccessMessage(null); // Clear previous success messages

    try {
        const BASE_URL = import.meta.env.VITE_TEST_BSS_DATABASE || import.meta.env.VITE_TEST_BSS_DATABASE_LOCAL;
        const response = await fetch(`${BASE_URL}/submitformhere`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status >= 400 && response.status < 600) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Server error');
        }
        throw new Error('Failed to submit form');
      }

      const result: ApiResponse = await response.json();
      console.log('Form submission successful:', result);
      setSuccessMessage('Form submitted successfully!');
    } catch (error) {
      console.error('Error in MyFormContainer:', error);
      setErrorMessage('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <WebForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default MyFormContainer;