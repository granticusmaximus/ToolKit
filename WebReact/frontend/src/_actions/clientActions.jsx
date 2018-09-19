import Api from '../api.jsx';
import AuthApi from '../authApi.jsx';
import { browserHistory } from 'react-router';
import dispatcher from "../dispatchers/dispatcher";


export function _tokenGenerate(data){
	dispatcher.dispatch({
	    type:'Loader',
	    showLoader: true 
	})
	
	let url = "/oauth/token"
	
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	AuthApi._callAPI(actualurl, 'POST', data , (type,dt) => {
		if(type == 'success'){
			localStorage.setItem('accessToken', dt.access_token);
				
			dispatcher.dispatch({
                type: 'AccessToken',
                data: dt,
            })  

			dispatcher.dispatch({
			    type:'Loader',
			    showLoader: false 
			})
			dispatcher.dispatch({
			    type:'SnackBar',
			    string: dt.response
			})
			
			 browserHistory.push('/dashboard');
			 window.location.href='/dashboard';
			
		}
	});
}



export function _createClientDetails(data){
	dispatcher.dispatch({
	    type:'Loader',
	    showLoader: true 
	})
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	/*let url = "/clients/create";*/
	let url = "/clients/create?access_token=" + token;
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

export function _updateClientDetails(data){
	dispatcher.dispatch({
	    type:'Loader',
	    showLoader: true 
	})
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	/*let url = "/clients/create";*/
	let url = "/clients/update?access_token=" + token;
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

export function _getClientList(data){
	let token = localStorage.getItem('accessToken');
	/*let url = "/clients/list";*/
	let url = "/clients/list?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'ClientList',
                data: dt,
            })  
              dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			 
		}
		
	});

}

export function _getSingleClient(data){
	let token = localStorage.getItem('accessToken'); 
	/*let url = "/clients/read";*/
	let url = "/clients/read?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'SingleClient',
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

export function _deleteClient(data){
    let token = localStorage.getItem('accessToken');
	/*let url = '/forms/delete?name=' + data.name;*/
	let url = '/clients/delete?id=' + data.id + "&access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	
	Api._callAPI( actualurl, 'DELETE', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'FormList',
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