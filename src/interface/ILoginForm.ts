export default interface ILoginForm {
  email: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  password: string;
  passwordConfirm?: string;
  extraError?: string;
  toDo?: string;
}

export const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
