import React, { useState, useEffect } from 'react';
import { DescopeClient, UserResponse, AuthenticationResponse } from '@descope/web-js-sdk';

interface DescopeAuthComponentProps {
  projectId: string;
}
const DescopeAuthComponent: React.FC<DescopeAuthComponentProps> = ({ projectId }) => {
    const [user, setUser] = useState<UserResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const descopeClient = new DescopeClient({ projectId });
  
      const sessionToken = localStorage.getItem('descope_session');
      const refreshToken = localStorage.getItem('descope_refresh');
  
      if (sessionToken && refreshToken) {
        descopeClient
          .validateSession(sessionToken, refreshToken)
          .then((response: AuthenticationResponse) => { // Type response
            setUser(response.user);
          })
          .catch((err: any) => { // Type err (or DescopeError if available)
            setError(err);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(false); // No tokens, not logged in.
      }
    }, [projectId]);
  
    const handleLogin = async (loginId: string, password: string) => {
      setLoading(true);
      setError(null);
      try {
        const descopeClient = new DescopeClient({ projectId });
        const response: AuthenticationResponse = await descopeClient.loginPassword(loginId, password); // Type response
  
        localStorage.setItem('descope_session', response.sessionJwt);
        localStorage.setItem('descope_refresh', response.refreshJwt);
  
        setUser(response.user);
      } catch (err: any) { // Type err (or DescopeError if available)
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
    const handleLogout = () => {
      localStorage.removeItem('descope_session');
      localStorage.removeItem('descope_refresh');
      setUser(null);
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (user) {
      return (
        <div>
          <h2>Welcome, {user.email}!</h2>
          <button onClick={handleLogout}>Logout</button>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      );
    }
  
    return (
      <div>
        <h2>Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(e.target.loginId.value, e.target.password.value);
          }}
        >
          <label>
            Login ID:
            <input type="text" name="loginId" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
export default DescopeAuthComponent;