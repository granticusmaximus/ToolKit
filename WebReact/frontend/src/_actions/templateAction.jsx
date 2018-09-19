import Api from '../api.jsx';
import dispatcher from "../../src/dispatcher/dispatcher";



export function _createTemplateDetails(data){
	dispatcher.dispatch({
	    type:'Loader',
	    showLoader: true 
	})
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	/*let url = "/templates/create";*/
	let url = "/templates/create?access_token=" + token;
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


export function _updateTemplateDetails(data){
	dispatcher.dispatch({
	    type:'Loader',
	    showLoader: true 
	})
	data = JSON.stringify(data);
	let token = localStorage.getItem('accessToken');
	/*let url = "/templates/create";*/
	let url = "/templates/update?access_token=" + token;
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


export function _getFormList(data){
	let token = localStorage.getItem('accessToken');
	/*let url = "/forms/list";*/
	let url = "/forms/list?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'FormList',
                data: dt,
            })  

              dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
		}
		
	});

}


export function _deleteForm(data){
    let token = localStorage.getItem('accessToken');
	/*let url = '/forms/delete?name=' + data.name;*/
	let url = '/forms/delete?id=' + data.id + "&access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	
	Api._callAPI( actualurl, 'DELETE', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'FormList',
                data: dt,
            })  

               dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			
			window.location.reload();
			
		}
		
	});

}




export function _getOrganizationList(data){
	let token = localStorage.getItem('accessToken');
	/*let url = '/organizations/list';*/
	let url = "/organizations/list?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'OrganizationList',
                data: dt,
            })  

              if(dt.responseCode == 1){

	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				return;
			}
			if(dt.responseCode == 0){
	    		dispatcher.dispatch({
				    type:'SnackBar',
				    string: dt.response
				})
				
			} 
		}
		
	});

}


export function _getTemplateList(data){
	let token = localStorage.getItem('accessToken');
	/*let url = '/templates/list';*/
	let url = "/templates/list?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'TemplateList',
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

export function _getSingleTemplate(data){
	let token = localStorage.getItem('accessToken');
	/*let url = "/templates/read";*/
	let url = "/templates/read?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'SingleTemplate',
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

export function _getSingleForm(data){
	let token = localStorage.getItem('accessToken');
	/*let url = "/templates/read";*/
	let url = "/forms/read?access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	Api._callAPI( actualurl, 'GET', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'SingleForm',
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


export function _deleteTemplate(data){
	let token = localStorage.getItem('accessToken');
	/*let url = '/templates/delete?name=' + data.name;*/
	let url = '/templates/delete?id=' + data.id + "&access_token=" + token;
	let BASE = "http://172.104.167.150:9082"
	let actualurl = BASE + url;
	
	
	Api._callAPI( actualurl, 'DELETE', data, (type, dt) => {
		if(type == 'success'){
			dispatcher.dispatch({
                type: 'DeleteTemplate',
                name: data.name,
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
