import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './signin.css';
import logo from '../../../assets/images/logo.png'; 
import ShareYourStory from '../../../assets/images/ShareYourStory.png'
import { setUsername, setPassword, resetForm } from '../../../redux/actions/signinActions';
import Footer from '../../footer/footer';

const Signin: React.FC = () => {
  const { username, password } = useSelector((state: any) => state.signin);
  const dispatch = useDispatch();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(event.target.value));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
    dispatch(resetForm());
  };

  return (<>
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <img src={logo} alt="Logo" className="logo" />
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Sign In</button>
      </form>
      <div className="signin-right">
      <img src={ShareYourStory} alt="Logo" className="logo" />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Signin;
