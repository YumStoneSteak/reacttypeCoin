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
