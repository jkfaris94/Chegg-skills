export interface User {
  // write your solution here
  id: number;
  firstName: string;
  lastName?: string;
  email?: string;
}

// Update the function below
export function formatUserData(user: User): string{
  let formatedUser = `User ${user.id}: ${user.firstName}`;

  if (user.lastName) {
    formatedUser += ` ${user.lastName}`;
  }
  if (user.email) {
    formatedUser += ` - ${user.email}`;
  }

  return formatedUser;
}
