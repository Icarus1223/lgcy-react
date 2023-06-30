interface SigninState {
    username: string;
    password: string;
  }
  
  const initialState: SigninState = {
    username: '',
    password: '',
  };
  
  const signinReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_USERNAME':
        return { ...state, username: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      case 'RESET_FORM':
        return initialState;
      default:
        return state;
    }
  };
  
  export default signinReducer;
  