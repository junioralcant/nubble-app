import {UserModel} from '@domain';

export type SearchHistoryService = {
  userList: UserModel[];
  addUser: (user: UserModel) => void;
  removeUser: (userId: UserModel['id']) => void;
  clearUserList: () => void;
};
