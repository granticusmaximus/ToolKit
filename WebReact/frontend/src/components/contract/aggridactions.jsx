import React, {Component} from "react";
import { Link } from 'react-router-dom';
import * as TemplateAction from '../../actions/templateAction.jsx';
import TemplateStore from '../../store/templateStore.jsx';
import * as ClientAction from '../../actions/clientAction.jsx';
import ClientStore from '../../store/clientStore.jsx';
import * as ContractAction from '../../actions/contractAction.jsx';
import ContractStore from '../../store/contractStore.jsx';
import * as UserAction from '../../actions/userAction.jsx';
import UserStore from '../../store/userStore.jsx';

export default class ClickableRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cell: {
                row: this.props.value,
                col: this.props.colDef.headerName
            },
            clientdetails:  [],
            userroleslist:{
                user: {
                role: {
                    permission: [],
                },
            }
            },
        };

        this.clicked = this.clicked.bind(this); 
        this._templateStoreChange = this._templateStoreChange.bind(this);
       this._contractStoreChange = this._contractStoreChange.bind(this);
       this._clientStoreChange = this._clientStoreChange.bind(this);
       this._handleContractSelection = this._handleContractSelection.bind(this);
       this._getSingleContract = this._getSingleContract.bind(this);
       this._userStoreChange = this._userStoreChange.bind(this);
        
    }

     componentWillMount() {
      TemplateStore.on('change', this._templateStoreChange);
      ContractStore.on('change', this._contractStoreChange);
      ClientStore.on('change', this._clientStoreChange);
      UserStore.on('change', this._userStoreChange);
     }

    componentWillUnmount() {
        TemplateStore.removeListener('change', this._templateStoreChange);
        ContractStore.removeListener('change', this._contractStoreChange);
        ClientStore.removeListener('change', this._clientStoreChange);
        UserStore.removeListener('change', this._userStoreChange);
     }

    componentDidMount() {
       ContractAction._getContractList();
       UserAction._getUserRolesList();
    }

     _templateStoreChange(type){
        if(type == 'OrganizationList'){
            let organizationlist = TemplateStore._getOrganizionDetailsList() || {};
            this.setState({organizationlist});
        }
        if(type == 'TemplateList'){
            let templatelist = TemplateStore._getTemplateDetailsList() || {};
            this.setState({templatelist});
          }
        }

    _clientStoreChange(type){
        if(type == 'ClientList'){
        let clientdetails = ClientStore._getClientDeatilsList() || {};
        this.setState({clientdetails});
      }
    }

    _contractStoreChange(type){
        if(type == 'ContractList'){
        let contractlist = ContractStore._getContractDetailsList() || {};
        this.setState({contractlist});
      }
    }
    _userStoreChange(type){
        if(type == 'UserList'){
        let userdetails = UserStore._getUserDetailsList() || {};
        this.setState({userdetails});
    }
    if(type == 'RolesList'){
        let roleslist = UserStore._getRolesList() || {};
        this.setState({roleslist});
    }

    if(type == 'UserRolesList'){
        let userroleslist = UserStore._getUserRolesList() || {};
        this.setState({userroleslist});
    }
 }

    
    clicked() {
        let data = {
          id : this.state.cell.row,
        };
        ContractAction._approveContract(data);
    }

    _handleContractSelection(name){
      let data = {
          id : this.state.cell.row,
        };
        console.log("data",data);
       ContractAction._deleteContract(data);
    }

    _getSingleContract(id){

      let data = {
          id : this.state.cell.row,
        };
        ContractAction._getSingleContract(data);
    }

    render() {
          let roleslist = this.state.userroleslist.user.role.permission || {};
          
          return (
            <div>
            {/*<button  onClick={this.clicked} className="btn btn-info">Edit</button>*/}
                {/*<a href="" className="">
                            <i className="fa fa-paperclip"></i> 
                            
                        </a>*/}
                        {
                          roleslist.map((roles)=>{
                            if(roles.moduleName == "Contracts" && roles.permissionName == "Read"){
                              return(
                              <Link to="/previewContract" className=" mr-2" onClick={this._getSingleContract}>
                                  <i className="fa fa-eye"></i> 
                              </Link>
                              
                              )
                                }   
                            })
                         }  
                         
                        

                        {/*<a href="" className=" mr-2">
                            <i className="fa fa-file-text"></i> 
                        </a>
                        <a href="" className=" mr-2">
                            <i className="fa fa-code-fork"></i> 
                        </a>*/}

                        {
                          roleslist.map((roles)=>{
                            if(roles.moduleName == "Contracts" && roles.permissionName == "Delete"){
                              return(
                              <a  className=" mr-5" onClick={this._handleContractSelection}>
                                  <i className="fa fa-trash-o"></i>
                              </a>
                              
                              )
                                }   
                            })
                         }  

                         {
                                roleslist.map((roles)=>{
                                    if(roles.moduleName == "Contracts" && roles.permissionName == "Approve"){
                                        
                                        return(
                                          <button  onClick={this.clicked} className="btn btn-primary">Approve</button>
                                        )
                                      }     
                                    })
                            }

                        

                </div>
          );
    }
}