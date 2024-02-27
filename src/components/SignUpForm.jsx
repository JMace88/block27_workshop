import { useState } from 'react';
import axios from 'axios';

function SignUpForm({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = await fetch(
        'https://fsa-jwt-practice.herokuapp.com/signup',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      // const {data} = await axios.post('url')
const response = await result.json()
      setToken(response.token);
      console.log(response);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            // name='username'
            // type='text'
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            // name='password'
            // type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
export default SignUpForm;
