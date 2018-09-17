export interface UserModelState {
    uid: number;
    fname: string;
    lname: string;
    email: string;
    isActive: boolean;
    isAdmin: boolean;
    createdat?: any;
    updatedat?: any;
  }
  
  export interface UserModelStateVM {
    uid: number;
    fname: string;
    lname: string;
    email: string;
    isActive: boolean;
    isAdmin: boolean;
    createdat?: any;
    updatedat?: any;
  }
  
  export const UserModelStateVMInitial: UserModelStateVM = {
    uid: 0,
    fname: "",
    lname: "",
    email: "",
    isActive: true,
    isAdmin: false,
    createdat: "",
    updatedat: ""
  };
  