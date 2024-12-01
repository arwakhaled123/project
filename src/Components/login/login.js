import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './login.css';

function LoginPage () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    };
  return (
    <><div className='parent' >
      <div className='col-md-6 left-side'>
      </div>
      <div className=" right-side">
        <div className="head">
          <h2 className="text-3xl font-bold mb-4"> <em>Welcome</em> Back!
            <p>Login To Get Start</p>
          </h2>
        </div>
        <form >
          <div className="mb-4 email">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 mr-2 ico" />
              <input
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4 password">
            <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400 ico" />
              <input
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none" onClick={() => setShowPassword(!showPassword)}>
                <path d="M19 12.8335C20.3082 11.3317 21 10 21 10C21 10 17.3636 3 11 3C10.6588 3 10.3254 3.02013 10 3.05822C9.6578 3.09828 9.3244 3.15822 9 3.23552" stroke="#9F9595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11 7C11.3506 7 11.6872 7.06015 12 7.17071C12.8524 7.47199 13.528 8.1476 13.8293 9C13.9398 9.3128 14 9.6494 14 10" stroke="#9F9595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 1L20 19" stroke="#9F9595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11 13C10.6494 13 10.3128 12.9398 10 12.8293C9.14763 12.528 8.47201 11.8524 8.17073 11C8.11389 10.8392 8.07037 10.6721 8.0415 10.5" stroke="#9F9595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.14701 7C2.83877 7.34451 2.56234 7.68241 2.31864 8C1.45286 9.1282 1 10 1 10C1 10 4.63636 17 11 17C11.3412 17 11.6746 16.9799 12 16.9418" stroke="#9F9595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <br />
              <a href="" class="f-pass">Forgot password</a>
            </div>
          </div>
          <div className="btn">
            <button
              className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
              type="submit"
              onClick={handleSubmit}

            >
              Sign In
            </button>
          </div>
        </form>
        <div class="SU-div">
          <p class="SU-sentence">Don’t have an account? <Link to="/sign" class="SU">SignUp</Link></p>
        </div>
      </div>
    </div></>
  );
}

export default LoginPage;