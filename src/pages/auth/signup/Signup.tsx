import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateUsername,
  updateDateOfBirth,
  updateNumber,
  updateEmail,
  updateName,
} from '../../../redux/actions/signupAction';

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const { username, dateOfBirth, number, email, name } = useSelector(
    (state: any) => state.signup
  );

  const handleInputChange = (
    e:any,
    inputName: string
  ) => {
    const { value } = e.target;
    switch (inputName) {
      case 'username':
        dispatch(updateUsername(value));
        break;
      case 'dateOfBirth':
        dispatch(updateDateOfBirth(value));
        break;
      case 'number':
        dispatch(updateNumber(value));
        break;
      case 'email':
        dispatch(updateEmail(value));
        break;
      case 'name':
        dispatch(updateName(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //form submission data
    const formData = {
        username,
        dateOfBirth,
        number,
        email,
        name,
      };
    
      console.log(formData);
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => handleInputChange(e, 'dateOfBirth')}
          />
        </label>
        <br />
        <label>
          Number:
          <input
            type="tel"
            value={number}
            onChange={(e) => handleInputChange(e, 'number')}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => handleInputChange(e, 'email')}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
