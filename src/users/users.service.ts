import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';

@Injectable()
export class UsersService {
  private users: IUser[] = [
    {
      id: '1',
      username: 'soerjo',
      email: 'ryo@mail.com',
      password: 'soerjo1234',
    },
  ];

  getUser(id: string): IUser {
    return this.users.find((user) => user.id === id);
  }

  getUserByEmail(email: string): IUser | null {
    return this.users.find((user) => user.email === email);
  }

  getUsers(): IUser[] {
    return this.users;
  }
}
