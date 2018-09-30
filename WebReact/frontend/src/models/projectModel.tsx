export interface ProjectModelState {
    pid: number;
    clientID: number;
    userID: number
    dueDate: string;
    comments: string;
    attribute: string;
    priority: string;
    createdat?: any;
    updatedat?: any;
  }
  
  export interface ProjectModelStateVM {
    pid: number;
    clientID: number;
    userID: number
    dueDate: string;
    comments: string;
    attribute: string;
    priority: string;
    createdat?: any;
    updatedat?: any;
  }
  
  export const ProjecgModelStateVMInitial: ProjectModelStateVM = {
    pid: 0,
    clientID: 0,
    userID: 0,
    dueDate: "",
    comments: "",
    attribute: "",
    priority: ""
  };
  