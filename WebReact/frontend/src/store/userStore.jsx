import {EventEmitter} from "events";
import dispatcher from "../../src/dispatcher/dispatcher";

class UserStore extends EventEmitter{
	
	constructor(){
		super();
		this.userlist = {};
		this.singleuser = {};
		this.roleslist = {};
		this.singlerole = {};
		this.orgunitlist = {};
        this.singleorgunit = {};
        this.userroleslist = {};
        this.teamdetails = {};
	}

	_getUserDetailsList(){
      return this.userlist || {};
	}

	_getTeamDetailsList(){
      return this.teamdetails || {};
	}

	_getSingleUser(){
      return this.singleuser || {};
	}

	_getOrgUnitList(){
      return this.orgunitlist || {};
	}

	_getSingleOrgunit(){
      return this.singleorgunit || {};
	}

	_getSingleRole(){
      return this.singlerole || {};
	}

	_getRolesList(){
		return this.roleslist || {};
	}

	_getUserRolesList(){
		return this.userroleslist || {};
	}
	
	_handleActions(action){
		switch(action.type){
			case 'UserList':{
                this.userlist = action.data;
                this.emit('change', 'UserList');
				break;
			}
			case 'SingleUser':{
                this.singleuser = action.data;
                this.emit('change', 'SingleUser');
				break;
			}
			case 'SingleRole':{
                this.singlerole = action.data;
                this.emit('change', 'SingleRole');
				break;
			}
			
			case 'RolesList':{
                this.roleslist = action.data;
                this.emit('change', 'RolesList');
				break;
			}
			case 'UserRolesList':{
                this.userroleslist = action.data;
                this.emit('change', 'UserRolesList');
				break;
			}
			case 'OrgUnitList':{
                this.orgunitlist = action.data;
                this.emit('change', 'OrgUnitList');
				break;
			}
			case 'TeamDetails':{
                this.teamdetails = action.data;
                this.emit('change', 'TeamDetails');
				break;
			}

			
			case 'SingleOrgUnit':{
                this.singleorgunit = action.data;
                this.emit('change', 'SingleOrgUnit');
				break;
			}

			


			
			
			
			
		}
	}
}

const userStore = new UserStore;
dispatcher.register(userStore._handleActions.bind(userStore));
export default userStore;