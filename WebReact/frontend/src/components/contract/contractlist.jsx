import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';
import action from './aggridactions.jsx';
/*import KPIContractValue from '../KPI/kpicontractvalue.jsx';
import KPI2 from '../KPI/kpi2.jsx';*/
import * as TemplateAction from '../../_actions/templateAction';
import TemplateStore from '../../store/templateStore.jsx';
import * as ClientAction from '../../_actions/clientAction';
import ClientStore from '../../store/clientStore.jsx';
import * as ContractAction from '../../_actions/contractAction';
import ContractStore from '../../store/contractStore.jsx';
import * as UserAction from '../../actions/userAction.jsx';
import UserStore from '../../store/userStore.jsx';

class ContractList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           organizationlist: {
              organizations: []
            },
            templatelist: {
              templates: []
            },
            clientdetails: {
              clients: []
            },
            userroleslist:{
                user: {
                role: {
                    permission: [],
                },
            }
            },
            contractlist:[],
            listapproval: [],
            columnDefs: [
            /*{
                headerName: "Contract ID",
                field: "contractId",
                width: 250
            },*/
            {
                headerName: "Client Name",
                field: "clientName",
                width: 250
            },
            {
                headerName: "Contract Name",
                field: "name",
                width: 250
            },
            {
                headerName: "Contract Title",
                field: "title",
                width: 250
            },
            {
                headerName: "Status",
                field: "status",
                width: 150
            },
            /*{
                headerName: "Created Date",
                field: "createdAt",
                width: 50
            },*/
            
            {
                headerName: "Actions",
                field: "id",
                cellRendererFramework: action,
                width: 250
            }
        ],
        };
       this._templateStoreChange = this._templateStoreChange.bind(this);
       this._contractStoreChange = this._contractStoreChange.bind(this);
       this._clientStoreChange = this._clientStoreChange.bind(this);
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
       ContractAction._getListApprovals();
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

    _contractStoreChange(type){
        if(type == 'ContractList'){
        let contractlist = ContractStore._getContractDetailsList() || {};
       
        this.setState({contractlist});
      }
      if(type == 'ListApprovals'){
        let listapproval = ContractStore._getApprovalsList() || {};
        
        this.setState({listapproval});
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

    
render() {
    let roleslist = this.state.userroleslist.user.role.permission || {};
    
    
    let role = roleslist.find((role) => role.moduleName === 'Contracts' && role.permissionName === "Approve");
    //let createList = roleslist.find((role)=> role.moduleName === 'Contracts' && role.permissionName === "Create");

    let rowData = role && this.state.listapproval.contracts || this.state.contractlist.contracts;

   
    
   
    let containerStyle = {
            height: 400
        };
        return (
            <div>
        
            <aside className="content_block">
                <div className="title-block">
                    <div className="row">
                        <div className="col-md-6"> <h4> Contracts List </h4>   </div>
                        <div className="col-md-6"> 
                            
                            {
                                roleslist.map((roles)=>{
                                    if(roles.moduleName == "Contracts" && roles.permissionName == "Create"){
                                        
                                        return(
                                        <Link to="/tabcontract" onClick={()=> localStorage.setItem('operation','add')} className="btn btn-primary pull-right" > <i className="fa fa-plus-circle icon mr-1"></i> Create New Contract </Link>
                                        )
                                      }     
                                    })
                            }
                            
                        </div>
                    </div>
                </div>
                {/*<div className="form-group row">
                   <KPIContractValue />
                   <KPI2 />
                </div>*/}
                
               
                <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header d-flex">
                                    <div className="input-group col-md-3 search_group">
                                        <span className="input-group-addon" id="basic-addon1"><i className="fa fa-search"> </i> </span>
                                        <input className="form-control" placeholder="Search"/>
                                    </div>
                                    
                                    
                                </div>                      
                                <div className="card-body p-0">

                                    { rowData && (<div style={containerStyle} className="ag-theme-material">
                                          <AgGridReact
                                            // properties
                                            rowData={rowData}
                                            columnDefs={this.state.columnDefs}
                                            // events
                                            pagination = {true}
                                            onGridReady={this.onGridReady}
                                            enableSorting
                                            enableFilter>
                                        </AgGridReact>
                                    </div>)}
                                    
                                </div>      
                            </div>
                        </div>
                    </div>
                

                     <div className="modal fade" id="confirm-modal">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">
                                            <i className="fa fa-warning"></i> Alert</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Are you sure want to do this?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Yes</button>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                                    </div>
                                </div>
                               
                            </div>
                            
                        </div>
                        </aside>
                 <div>{this.props.children}</div>
      </div>
        )
    }
}

export default ContractList;