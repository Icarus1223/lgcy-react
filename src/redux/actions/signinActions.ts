export const setUsername = (username: string) => {
  return {
    type: 'SET_USERNAME',
    payload: username,
  };
};

export const setPassword = (password: string) => {
  return {
    type: 'SET_PASSWORD',
    payload: password,
  };
};

export const resetForm = () => {
  return {
    type: 'RESET_FORM',
  };
};
