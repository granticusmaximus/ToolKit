import Api from '../api.jsx';
import { browserHistory } from 'react-router';
import dispatcher from "../../src/dispatcher/dispatcher";


export function _createUserDetails(data){
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	let url = "/users/create?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI(actualurl, 'POST', data, (type,dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
			    type:'Loader',
			    showLoader: false 
			})
			dispatcher.dispatch({
			    type:'SnackBar',
			    string: dt.response
			})
			/*browserHistory.push('/previewclientdetails');*/
		}
	});
}

export function _UpdateUserDetails(data){
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	let url = "/users/update?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI(actualurl, 'POST', data, (type,dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
			    type:'Loader',
			    showLoader: false 
			})
			dispatcher.dispatch({
			    type:'SnackBar',
			    string: dt.response
			})
			/*browserHistory.push('/previewclientdetails');*/
		}
	});
}



export function _getSingleUser(data){
	let token = localStorage.getItem('accessToken'); 
	
	let url = "/users/read?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'SingleUser',
                data: dt,
            })  

              if(dt.responseCode == 1){

	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				return;
			}
			
	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			
		}
		
	});

}




export function _getUsersList(data){
	let token = localStorage.getItem('accessToken');
	let url = "/users/list?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'UserList',
                data: dt,
            })  
              dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			 
		}
		
	});

}

export function _getUserRolesList(data){
	let token = localStorage.getItem('accessToken');
	let url = "/users/role?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'UserRolesList',
                data: dt,
            })  
              dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			 
		}
		
	});

}



export function _deleteUser(data){
    let token = localStorage.getItem('accessToken');
	/*let url = '/forms/delete?name=' + data.name;*/
	let url = '/users/delete?id=' + data.id + "&access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	
	Api._callAPI( actualurl, 'DELETE', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'UserList',
                data: dt,
            })  

              if(dt.responseCode == 1){

	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				return;
			}
			
	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			
			window.location.reload();
			
		}
		
	});

}

export function _assignRoleToUser(data){
	let token = localStorage.getItem('accessToken');
	let url = "/users/updaterole?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'AssignRole',
                data: dt,
            })  
              dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			 
		}
		
	});

}

export function _createRoles(data){
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	let url = "/roles/create?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI(actualurl, 'POST', data, (type,dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
			    type:'Loader',
			    showLoader: false 
			})
			dispatcher.dispatch({
			    type:'SnackBar',
			    string: dt.response
			})
			/*browserHistory.push('/previewclientdetails');*/
		}
	});
}

export function _getRolesList(data){
	let token = localStorage.getItem('accessToken');
	let url = "/roles/list?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'RolesList',
                data: dt,
            })  
              dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			 
		}
		
	});

}

export function _getSingleRole(data){
	let token = localStorage.getItem('accessToken'); 
	
	let url = "/roles/read?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'SingleRole',
                data: dt,
            })  

              if(dt.responseCode == 1){

	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				return;
			}
			
	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			
		}
		
	});

}

export function _deleteRole(data){
    let token = localStorage.getItem('accessToken');
	/*let url = '/forms/delete?name=' + data.name;*/
	let url = '/roles/delete?id=' + data.id + "&access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	
	Api._callAPI( actualurl, 'DELETE', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'RolesList',
                data: dt,
            })  

              if(dt.responseCode == 1){

	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				return;
			}
			
	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			
			window.location.reload();
			
		}
		
	});

}

export function _createOrgUnitDetails(data){
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	let url = "/organizationunits/create?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI(actualurl, 'POST', data, (type,dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
			    type:'Loader',
			    showLoader: false 
			})
			dispatcher.dispatch({
			    type:'SnackBar',
			    string: dt.response
			})
			/*browserHistory.push('/previewclientdetails');*/
		}
	});
}
export function _getSingleOrgUnit(data){
	let token = localStorage.getItem('accessToken'); 
	
	let url = "/organizationunits/read?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'SingleOrgUnit',
                data: dt,
            })  

              if(dt.responseCode == 1){

	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				return;
			}
			
	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			
		}
		
	});

}
export function _getOrgUnitList(data){
	let token = localStorage.getItem('accessToken');
	let url = "/organizationunits/list?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'OrgUnitList',
                data: dt,
            })  
              dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			 
		}
		
	});

}
export function _deleteOrgUnit(data){
    let token = localStorage.getItem('accessToken');
	/*let url = '/forms/delete?name=' + data.name;*/
	let url = '/organizationunits/delete?id=' + data.id + "&access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	
	Api._callAPI( actualurl, 'DELETE', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'OrgUnitList',
                data: dt,
            })  

              if(dt.responseCode == 1){

	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				return;
			}
			
	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			
			window.location.reload();
		
		}
		
	});

}


export function _assignUsersToTeams(data){
	let token = localStorage.getItem('accessToken');
	let url = "/users/updateorganizationunit?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'AssignUserToTeam',
                data: dt,
            })  
              dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			 
		}
		
	});

}

export function _assignManagerToUser(data){
	let token = localStorage.getItem('accessToken');
	let url = "/users/updatemanager?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'AssignManagerToUser',
                data: dt,
            })  
              dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			 
		}
		
	});

}



export function _previewTeamDetails(data){
	let token = localStorage.getItem('accessToken');
	let orgUnitId = localStorage.getItem('TeamId');
	let url = "/organizationunits/listusers?id=" + orgUnitId +"&access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'TeamDetails',
                data: dt,
            })  
              dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			 
		}
		
	});

}