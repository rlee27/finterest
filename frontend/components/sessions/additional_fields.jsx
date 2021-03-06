import React from 'react';

const AdditionalFields = ({state, handleChange, handleSubmit, renderErrors}) => {
  return(
    <div className="session-form-container">
      <h3>Welcome to Finterest</h3>
      <br />
      {renderErrors()}
      <form className="session-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="session-label">Full Name
          <input type="text"
            value={state.name}
            onChange={handleChange('name')}
          />
        </label>
        <br />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdditionalFields;
