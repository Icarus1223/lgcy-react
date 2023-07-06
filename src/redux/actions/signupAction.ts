import { SignupAction, SignupActionType } from '../../redux/reducers/signupReducer';

export const updateUsername = (username: string): SignupAction => ({
  type: SignupActionType.UPDATE_USERNAME,
  payload: username,
});

export const updateDateOfBirth = (dateOfBirth: string): SignupAction => ({
  type: SignupActionType.UPDATE_DATE_OF_BIRTH,
  payload: dateOfBirth,
});

export const updateNumber = (number: string): SignupAction => ({
  type: SignupActionType.UPDATE_NUMBER,
  payload: number,
});

export const updateEmail = (email: string): SignupAction => ({
  type: SignupActionType.UPDATE_EMAIL,
  payload: email,
});

export const updateName = (name: string): SignupAction => ({
  type: SignupActionType.UPDATE_NAME,
  payload: name,
});
