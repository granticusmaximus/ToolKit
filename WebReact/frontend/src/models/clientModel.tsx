export interface UserModelState {
    cid: number;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    businessName: string;
    businessAddress: string;
    city: string;
    state: string;
    zip: number;
    createdat?: any;
    updatedat?: any;
  }
  
  export interface UserModelStateVM {
    cid: number;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    businessName: string;
    businessAddress: string;
    city: string;
    state: string;
    zip: number;
    createdat?: any;
    updatedat?: any;
  }
  
  export const UserModelStateVMInitial: UserModelStateVM = {
    cid: 0,
    fname: "",
    lname: "",
    email: "",
    phone: "",
    businessName: "",
    businessAddress: "",
    city: "",
    state: "",
    zip: 0
  };
  