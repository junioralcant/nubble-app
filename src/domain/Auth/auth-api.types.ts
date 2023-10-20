import {UserAPI} from '../User/user-api.types';

export type AuthCredentialsAPI = {
  auth: {
    type: string; //'bearer';
    token: string; // 'NA.GCfDf81QRs0q4VxyFSEvWs8kZ-DoZnl5zKLn8UDY8ntedjZCPgxVxfFijlQy';
  };
  user: UserAPI;
};

export type SignUpDataAPIModel = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export type FieldIsAvailableAPIModel = {
  message: string;
  isAvailable: boolean;
};
