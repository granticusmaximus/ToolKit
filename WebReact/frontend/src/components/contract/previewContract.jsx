import React from 'react';
import { Link } from 'react-router';
import { Document } from 'react-pdf/build/entry.webpack';
import * as ContractAction from '../../actions/contractAction.jsx';
import ContractStore from '../../store/contractStore.jsx';
import * as UserAction from '../../actions/userAction.jsx';
import UserStore from '../../store/userStore.jsx';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';

class PreviewContract extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           singlecontract: {
            contract: {},
           },
           numPages: null,
           pageNumber: 1,
           pdf: '',
           userroleslist:{
                user: {
                role: {
                    permission: [],
                },
            }
            },
        };
     this._contractStoreChange = this._contractStoreChange.bind(this);
     this._userStoreChange = this._userStoreChange.bind(this);
     this._getSingleContract = this._getSingleContract.bind(this);
     this.download = this.download.bind(this);
    }

    componentWillMount() {
      ContractStore.on('change', this._contractStoreChange);
      UserStore.on('change', this._userStoreChange);
     }

    componentWillUnmount() {
        ContractStore.removeListener('change', this._contractStoreChange);
        UserStore.removeListener('change', this._userStoreChange);
     }
   
    componentDidMount() {
       UserAction._getUserRolesList();
    }

   _contractStoreChange(type){
        if(type == 'ContractList'){
        let contractlist = ContractStore._getContractDetailsList() || {};
        this.setState({contractlist});
      }
      if(type == 'SingleContract'){
        let singlecontract = ContractStore._getSingleContractDetails() || {};
        this.setState({singlecontract});
        
      }
      if(type == 'PDF'){
        let pdf = ContractStore._getPdf() || {};
        console.log(pdf);
        this.setState({pdf});
        
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

    _getSingleContract(name){
      let singlecontract = this.state.singlecontract;  
      let data = {
          id : singlecontract.contract.id,
        };
        ContractAction._getSingleContract(data);
    }

    
  download() {
        let singlecontract = this.state.singlecontract; 
        let data = singlecontract.contract.html;
        let token = localStorage.getItem("accessToken");
        ContractAction._generatePDF(data,function(data){
        var wnd = window.open("http://172.104.167.150:9082/contracts/downloadpdf?filename="+data.filename+"&access_token=" + token, "_blank");
        
        });   
       
        
    }

   
  handleEdit(data){
    localStorage.setItem('edit_data',JSON.stringify(data));
    localStorage.setItem('operation','edit');

  }


render() {
    let singlecontract = this.state.singlecontract;
    const { pageNumber, numPages } = this.state;
    let roleslist = this.state.userroleslist.user.role.permission || {};
    console.log('roleslist',roleslist);
    
        return (
            <div>
                 <div className="sidebar-overlay" id="sidebar-overlay"></div>
                <div className="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle"></div>
                <div className="mobile-menu-handle"></div>
                <div className="content_block">
                    <div className="title-block">
                        <div className="row">
                            <div className="col-md-12 d-flex align-items-center">
                                <h5 className="title mr-auto"> Preview Contract </h5>
                                {
                                    roleslist.map((roles)=>{
                                        if(roles.moduleName == "Contracts" && roles.permissionName == "Update"){
                                            return(
                                               <Link to="/tabcontract" onClick={() => this.handleEdit(singlecontract.contract) }  className="btn btn-primary btn-lg rounded-s mb-0">  Edit </Link>
                                            
                                            )
                                          }     
                                        })
                                 }    
                                 {
                                    roleslist.map((roles)=>{
                                        if(roles.moduleName == "Contracts" && roles.permissionName == "Read"){
                                            return(
                                               <button onClick={this.download}  className="btn btn-primary btn-lg rounded-s mb-0 ml-2 mr-2">Export as PDF</button>
                                            
                                            )
                                          }     
                                        })
                                 }        
                                
                               
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                       <div className="col-md-12">

                    <div className="tab-content">
                        <div className="tab-pane active" id="cont_preview" role="tabpanel"> 
                            <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                        <div className="col-xl-12">
                            <div className="card sameheight-item">
                                <div className="card-block">
                                    <ul className="nav nav-tabs nav-tabs-bordered">
                                        <li className="nav-item">
                                            <a href="#contractPrev" className="nav-link active" data-target="#contractPrev" data-toggle="tab" aria-controls="contractPrev" role="tab">Contract Preview</a>
                                        </li>
                                        
                                    </ul>
                                    
                                    <div className="tab-content tabs-bordered">
                                        <div className="tab-pane active p-4" id="contractPrev">
                                            <div className="row">
                                                <div className="col-md-4">
                                                     <div className="form-group d-flex">
                                                        <label className="form-control-label text-xs-right"> Contract Title: </label>
                                                        <div className="ml-2">{singlecontract.contract.title}</div>
                                                    </div>

                                                    <div className="form-group d-flex">
                                                        <label className="form-control-label text-xs-right"> Contract Name: </label>
                                                        <div className="ml-2">{singlecontract.contract.name}</div>
                                                    </div>

                                                    <div className="form-group d-flex">
                                                        <label className=" form-control-label text-xs-right"> Contract ID: </label>
                                                        <div className="ml-2">{singlecontract.contract.contractId}</div>
                                                    </div>
                                                    <div className="form-group d-flex">
                                                        <label className=" form-control-label text-xs-right"> Contract Version: </label>
                                                        <div className="ml-2"></div>
                                                    </div>
                                                </div>
                                                {/*<div className="col-md-4">
                                                    <div className="form-group d-flex justify-content-center">
                                                        <a href="" className="item-actions-toggle-btn">
                                                            Attachments
                                                            <i className="fa fa-paperclip"></i> 
                                                            <sup>
                                                                <span className="counter">
                                                                    <b>3</b>
                                                                </span>
                                                            </sup>
                                                        </a>
                                                    </div>
                                                </div>*/}
                                                
                                            </div>
                                            <div className="row" >
                                                <div id="divToPrint"  className="col-md-10 m-auto pt-5 pb-5">
                                                    <h4>Contract Preview</h4>
                                                    <div  dangerouslySetInnerHTML={{__html: singlecontract.contract.html}} ></div>
                                                       
                                                   </div>
                                            </div>
                                        </div>
                                                                                
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                         </div>
                                </div>      
                            </div>

                        </div>
                        
                    </div>
                        </div>
                    </div>
                   </div> 
                
            </div>
        )
    }
}

export default PreviewContract;
