import React, { useState } from 'react'; //GEmini
import { AuthProvider, useDescope, useSession } from '@descope/react-sdk'   

const sdk = descopeSdk({ projectId: 'YOUR_PROJECT_ID' }); // Replace with your project ID

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [session, setSession] = useState<DescopeSession | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      await sdk.otp.signUp.email(email);
      setMessage('Please check your email for the OTP.');
    } catch (error: any) {
      setMessage(`Signup failed: ${error.message || 'An unknown error occurred.'}`);
    }
  };

  const getSession = () => {
    const currentSession = sdk.getSession();
    setSession(currentSession);
  };

  return (
    <div>
      <h2>Sign Up with Email OTP</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      {message && <p>{message}</p>}
      <div>
        <button onClick={getSession}>Get Session</button>
        {session ? (
          <p>Session Token: {sdk.getSessionToken()}</p>
        ) : (
          <p>No active session.</p>
        )}
      </div>
    </div>
  );
}

export default SignUpForm;