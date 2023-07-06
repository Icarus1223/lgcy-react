// initial state interface
interface SignupState {
    username: string;
    dateOfBirth: string;
    number: string;
    email: string;
    name: string;
  }
  
  // actions
  export enum SignupActionType {
    UPDATE_USERNAME = 'UPDATE_USERNAME',
    UPDATE_DATE_OF_BIRTH = 'UPDATE_DATE_OF_BIRTH',
    UPDATE_NUMBER = 'UPDATE_NUMBER',
    UPDATE_EMAIL = 'UPDATE_EMAIL',
    UPDATE_NAME = 'UPDATE_NAME',
  }
  
  interface UpdateUsernameAction {
    type: SignupActionType.UPDATE_USERNAME;
    payload: string;
  }
  
  interface UpdateDateOfBirthAction {
    type: SignupActionType.UPDATE_DATE_OF_BIRTH;
    payload: string;
  }
  
  interface UpdateNumberAction {
    type: SignupActionType.UPDATE_NUMBER;
    payload: string;
  }
  
  interface UpdateEmailAction {
    type: SignupActionType.UPDATE_EMAIL;
    payload: string;
  }
  
  interface UpdateNameAction {
    type: SignupActionType.UPDATE_NAME;
    payload: string;
  }
  
export type SignupAction =
    | UpdateUsernameAction
    | UpdateDateOfBirthAction
    | UpdateNumberAction
    | UpdateEmailAction
    | UpdateNameAction;

    const initialState: SignupState = {
        username: '',
        dateOfBirth: '',
        number: '',
        email: '',
        name: '',
      };
  
  //  reducer
  export const signupReducer = (
    state: SignupState = initialState,
    action: SignupAction
  ): SignupState => {
    switch (action.type) {
      case SignupActionType.UPDATE_USERNAME:
        return { ...state, username: action.payload };
      case SignupActionType.UPDATE_DATE_OF_BIRTH:
        return { ...state, dateOfBirth: action.payload };
      case SignupActionType.UPDATE_NUMBER:
        return { ...state, number: action.payload };
      case SignupActionType.UPDATE_EMAIL:
        return { ...state, email: action.payload };
      case SignupActionType.UPDATE_NAME:
        return { ...state, name: action.payload };
      default:
        return state;
    }
  };
  