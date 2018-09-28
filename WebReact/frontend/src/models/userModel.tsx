export interface UserModelState {
    uid: number;
    username: string;
    fname: string;
    lname: string;
    email: string;
    isActive: boolean;
    isAdmin: boolean;
    created_on?: any;
    last_login?: any;
  }
  
  export interface UserModelStateVM {
    uid: number;
    username: string;
    fname: string;
    lname: string;
    email: string;
    isActive: boolean;
    isAdmin: boolean;
    created_on?: any;
    last_login?: any;
  }
  
  export const UserModelStateVMInitial: UserModelStateVM = {
    uid: 0,
    username: "",
    fname: "",
    lname: "",
    email: "",
    isActive: true,
    isAdmin: false,
    created_on: "",
    last_login: ""
  };
  