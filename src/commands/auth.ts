type LoginArgs = {
  username: string;
  password: string;
  department: string;
};
const login = ({ username, password, department }: LoginArgs) => {};

export const auth = {
  login: login
};
