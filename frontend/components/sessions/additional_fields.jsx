import React from 'react';

const AdditionalFields = ({state, handleChange, handleSubmit}) => {
  return(
    <div className="session-form-container">
      <h3>Welcome to Finterest</h3>
      <br />
      <form className="session-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:
          <input type="text"
            value={state.name}
            onChange={handleChange('name')}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AdditionalFields;
