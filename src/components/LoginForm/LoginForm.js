import React from 'react';
import useFormField from '../../hooks/useFormField';
import './LoginForm.styles.css';

const LoginForm = (props) => {
  const [username, onChangeUsername, isUsernameValid] = useFormField('');
  const [password, onChangePassword, isPasswordValid] = useFormField('');

  const shouldDisableButton = !isUsernameValid || !isPasswordValid || !username || !password;
  return (
    <div className="login-form">
      <input type="text" className={!isUsernameValid ? 'error' : ''} value={username} onChange={onChangeUsername} />
      <input type="password" className={!isPasswordValid ? 'error' : ''} value={password} onChange={onChangePassword} />
      <button className={shouldDisableButton ? 'disabled' : ''}>Submit</button>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
