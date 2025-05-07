import React, { useState } from 'react';
import './loginfunctional.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prev) => [...prev, formData]);
    setFormData({ username: '', password: '' }); 
  };

  return (
    <div className='login-container' style={{ padding: '20px' }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} className='login-form'>
          
          <label>Username: </label>
          <input
          className='login-input'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
    
       
          <label>Password: </label>
          <input
          className='login-input'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
      
        <button  className='login-button ' type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div>
          <h3>Submitted Data</h3>
          <table border="1" cellPadding="10" className='login-table'>
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.username}</td>
                  <td>{data.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
