import {EventEmitter} from "events";
import dispatcher from "../dispatchers/dispatcher";

class ContractStore extends EventEmitter{
	
	constructor(){
		super();
		this.contractlist = {};
		this.singlecontract = {};
		this.pdf = {};
		this.reports = {};
		this.listapproval = {};
	}

	_getContractDetailsList(){
      return this.contractlist || {};
	}
	_getApprovalsList(){
      return this.listapproval || {};
	}
	_getSingleContractDetails(){
      return this.singlecontract || {};
	}

	_getPdf(){
      return this.pdf || {};
	}

	_getReports(){
		return this.reports || {};
	}
	
	
	_handleActions(action){
		switch(action.type){
			case 'ContractList':{
                this.contractlist = action.data;
                this.emit('change', 'ContractList');
				break;
			}
			case 'ListApprovals':{
                this.listapproval = action.data;
                this.emit('change', 'ListApprovals');
				break;
			}
			case 'SingleContract':{
                this.singlecontract = action.data;
                this.emit('change', 'SingleContract');
				break;
			}
			case 'PDF':{
                this.pdf = action.data;
                this.emit('change', 'PDF');
				break;
			}
			case 'Reports':{
                this.reports = action.data;
                this.emit('change', 'Reports');
				break;
			}

			case 'SnackBar':{
				this.emit('change', 'SnackBar', action.string);
				break;
			}

			case 'Loader':{
				this.emit('change', 'Loader', action.showLoader);
				break;
			}
			
			

			
		}
	}
}

const contractStore = new ContractStore;
dispatcher.register(contractStore._handleActions.bind(contractStore));
export default contractStore;