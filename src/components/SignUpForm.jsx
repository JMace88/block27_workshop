import { useState } from 'react';
import axios from 'axios';

function SignUpForm({setToken}) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try { 
        const result = await axios.post('https://fsa-jwt-practice.herokuapp.com/signup')
        setToken(result.token)
        console.log(result)
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
