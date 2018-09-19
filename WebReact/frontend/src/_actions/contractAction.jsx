import Api from '../api';
import dispatcher from "../dispatchers/dispatcher";

export function _createContractDetails(data){
	dispatcher.dispatch({
	    type:'Loader',
	    showLoader: true 
	})
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	/*let url = "/contracts/create";*/
	let url = "/contracts/create?access_token=" + token;
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
			
		}
	});
}

export function _approveContract(data){
	dispatcher.dispatch({
	    type:'Loader',
	    showLoader: true 
	})
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	/*let url = "/contracts/create";*/
	let url = "/contracts/approve?access_token=" + token;
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
			
		}
	});
}

export function _rejectContract(data){
	dispatcher.dispatch({
	    type:'Loader',
	    showLoader: true 
	})
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	/*let url = "/contracts/create";*/
	let url = "/contracts/reject?access_token=" + token;
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
			
		}
	});
}




export function _updateContractDetails(data){
	dispatcher.dispatch({
	    type:'Loader',
	    showLoader: true 
	})
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	/*let url = "/contracts/create";*/
	let url = "/contracts/update?access_token=" + token;
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
			
		}
	});
}
export function _getListApprovals(data){
	let token = localStorage.getItem('accessToken');
	/*let url = "/contracts/list";*/
	let url = "/contracts/listapprovals?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'ListApprovals',
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

export function _getReports(data){
	let token = localStorage.getItem('accessToken');
	
	let url = "/reports/agentsdashboard?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	/*let actualurl = "http://www.mocky.io/v2/5a5f81a22e000080260a84c2"*/
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'Reports',
                data: dt,
            })  
		}
		
	});

}




export function _getSingleContract(data){
	let token = localStorage.getItem('accessToken');
	/*let url = "/contracts/read";*/
	let url = "/contracts/read?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	

	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'SingleContract',
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



export function _deleteContract(data){
	let token = localStorage.getItem('accessToken');
	/*let url = '/contracts/delete?name=' + data.name;*/
	let url = '/contracts/delete?id=' + data.id + "&access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'DELETE', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'ContractList',
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