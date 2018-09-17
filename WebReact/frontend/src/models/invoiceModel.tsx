export interface UserModelState {
    iid: number;
    clientID: number;
    amountDue: string;
    dueDate: number;
    comments: string;
    createdat?: any;
    updatedat?: any;
  }
  
  export interface UserModelStateVM {
    iid: number;
    clientID: number;
    amountDue: string;
    dueDate: number;
    comments: string;
    createdat?: any;
    updatedat?: any;
  }
  
  export const UserModelStateVMInitial: UserModelStateVM = {
    iid: 0,
    clientID: 0,
    amountDue: "",
    dueDate: 0,
    comments: ""
  };
  