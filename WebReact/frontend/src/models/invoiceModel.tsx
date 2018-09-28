export interface InvoiceModelState {
    iid: number;
    clientID: number;
    amountDue: string;
    dueDate: number;
    comments: string;
    createdat?: any;
    updatedat?: any;
  }
  
  export interface InvoiceModelStateVM {
    iid: number;
    clientID: number;
    amountDue: string;
    dueDate: number;
    comments: string;
    createdat?: any;
    updatedat?: any;
  }
  
  export const InvoiceModelStateVMInitial: InvoiceModelStateVM = {
    iid: 0,
    clientID: 0,
    amountDue: "",
    dueDate: 0,
    comments: ""
  };
  