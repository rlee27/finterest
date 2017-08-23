import React from 'react';

const BasicFields = ({state, handleChange, handleSubmit}) => {
  const renderErrors = () => {
    return(
      <ul>
        {state.errors.map((error, i) => {
          return <li key={`error-${i}`}>{error}</li>;
        })}
      </ul>
    );
  };

  return(
    <div className="session-form-container">
      <h3>Welcome to Finterest</h3>
      <br />
      {renderErrors()}
      <form className="session-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="session-label">Email
          <input type="text"
            value={state.email}
            onChange={handleChange('email')}
          />
        </label>
        <br />
        <label htmlFor="password" className="session-label">Password
          <input type="password"
            value={state.password}
            onChange={handleChange('password')}
          />
        </label>
        <br />
        <button className="submit-button">Continue</button>
      </form>
    </div>
  );
};

export default BasicFields;
