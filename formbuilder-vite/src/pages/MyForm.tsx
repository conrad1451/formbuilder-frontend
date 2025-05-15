import React, { useState } from "react";
import { useSession } from "@descope/react-sdk";

interface WebFormProps {
  onSubmit: (formData: { myName: string }) => Promise<void>;
}

const WebForm: React.FC<WebFormProps> = ({ onSubmit }) => {
  const [myName, setText] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await onSubmit({ myName });
      setText("");
    } catch (error) {
      console.error("Error submitting form:", error);
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
      <button type="submit">Submit data to Notion</button>{" "}
      {/* Changed button text */}
    </form>
  );
};

interface ApiResponse {
  message: string;
  // ... other properties
}

const FormToNotion: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { session } = useSession();

  const handleFormSubmit = async (formData: { myName: string }) => {
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const BASE_URL =
        import.meta.env.VITE_TEST_BSS_DATABASE ||
        import.meta.env.VITE_TEST_BSS_DATABASE_LOCAL;
      const sessionToken = session?.jwt;

      // const response = await fetch(`${BASE_URL}/targetnotion`, { // Changed endpoint to /targetnotion
      const response = await fetch(`${BASE_URL}/submitformhere`, {
        // Changed endpoint to /targetnotion
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`, // Send JWT in Authorization header
        },
        body: JSON.stringify(formData), // Send form data in the body
      });

      if (!response.ok) {
        if (response.status >= 400 && response.status < 600) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Server error");
        }
        throw new Error("Failed to submit to Notion"); // Changed error message
      }

      const result: ApiResponse = await response.json();
      console.log("Data sent to Notion successfully:", result);
      setSuccessMessage("Data sent to Notion successfully!"); // Changed success message
    } catch (error) {
      console.error("Error in MyFormContainer (Notion):", error);
      setErrorMessage("Failed to send data to Notion. Please try again."); // Changed error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <WebForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default FormToNotion;
