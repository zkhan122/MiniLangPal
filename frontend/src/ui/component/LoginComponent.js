import { useState } from 'react';
import { useUser } from './UserContext';

function LoginComponent() {
  const { login, isLoading } = useUser();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginLoading, setLoginLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);

    try {
      let response = await fetch('/api/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (!response.ok) {
        response = await fetch('/api/admin/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        });
      }

      if (response.ok) {
        const userData = await response.json();
        
        login({
          user_id: userData.user_id,
          username: userData.username,
          name: userData.name,
          email: userData.email,
          role: userData.role
        });
      } else {
        const errorData = await response.json();
        alert('Login failed: ' + errorData.message);
      }
    } catch (error) {
      alert('Login error: ' + error.message);
    } finally {
      setLoginLoading(false);
    }
  };

  if (isLoading) {
    return <div>Validating user session...</div>;
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          required
        />
      </div>
      <button type="submit" disabled={loginLoading}>
        {loginLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

export default LoginComponent;