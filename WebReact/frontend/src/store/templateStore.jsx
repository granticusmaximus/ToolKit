import {EventEmitter} from "events";
import dispatcher from "../../src/dispatcher/dispatcher";

class TemplateStore extends EventEmitter{
	
	constructor(){
		super();
		this.clientlist = {};
		this.formlist = {};
		this.organizationlist = {};
		this.templatelist = {};
		this.singletemplate = {};
		this.singleform = {};
	}

	_getFormDetailsList(){
      return this.formlist || {};
	}
	_getOrganizionDetailsList(){
      return this.organizationlist || {};
	}
	_getTemplateDetailsList(){
      return this.templatelist || {};
	}

	_getSingleTemplate(){
		return this.singletemplate || {};
	}
	_getSingleForm(){
		return this.singleform || {};
	}
	
	_handleActions(action){
		switch(action.type){
			case 'FormList':{
                this.formlist = action.data;
                this.emit('change', 'FormList');
				break;
			}
			case 'OrganizationList':{
                this.organizationlist = action.data;
                this.emit('change', 'OrganizationList');
				break;
			}
			case 'TemplateList':{
                this.templatelist = action.data;
                this.emit('change', 'TemplateList');
				break;
			}
			case 'SingleTemplate':{
                this.singletemplate = action.data;
                this.emit('change', 'SingleTemplate');
				break;
			}
			case 'SingleForm':{
                this.singleform = action.data;
                this.emit('change', 'SingleForm');
				break;
			}
			
		}
	}
}

const templateStore = new TemplateStore;
dispatcher.register(templateStore._handleActions.bind(templateStore));
export default templateStore;