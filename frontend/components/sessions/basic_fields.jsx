import React from 'react';

const BasicFields = ({state, handleChange, handleSubmit}) => {
  return(
    <div className="session-form-container">
      <h3>Welcome to Finterest</h3>
      <br />
      <form className="session-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:
          <input type="text"
            value={state.email}
            onChange={handleChange('email')}
          />
        </label>
        <br />
        <label htmlFor="password">Password:
          <input type="password"
            value={state.password}
            onChange={handleChange('password')}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BasicFields;
