import {EventEmitter} from "events";
import dispatcher from "../../src/dispatcher/dispatcher";

class ClientStore extends EventEmitter{
	
	constructor(){
		super();
		this.clientlist = {};
		this.singleclient = {};
		this.accesstoken  = {};
	}

	_getClientDeatilsList(){
      return this.clientlist || {};
	}

	_getSingleClientDetails(){
      return this.singleclient || {};
	}

	_AccessToken(){
		return this.accesstoken || {};
	}
	
	_handleActions(action){
		switch(action.type){
			case 'ClientList':{
                this.clientlist = action.data;
                this.emit('change', 'ClientList');
				break;
			}
			case 'SingleClient':{
                this.singleclient = action.data;
                this.emit('change', 'SingleClient');
				break;
			}
			case 'AccessToken':{
                this.accesstoken = action.data;
                this.emit('change', 'AccessToken');
				break;
			}
			
			
		}
	}
}

const clientStore = new ClientStore;
dispatcher.register(clientStore._handleActions.bind(clientStore));
export default clientStore;