import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
//import axios from 'axios';
//import { Link } from 'react-router';
import * as ContractAction from '../../_actions/contractAction';
import ContractStore from '../../store/contractStore.jsx';

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          reports: {
            chartslist: {
                charts: []
            },
          }, 
          contractlist:[],
        };
        this._contractStoreChange = this._contractStoreChange.bind(this);
    }

    componentWillMount() {
      
      ContractStore.on('change', this._contractStoreChange);
     
     }

    componentWillUnmount() {
        
        ContractStore.removeListener('change', this._contractStoreChange);
        
               
    }

    componentDidMount() {
      ContractAction._getReports();
    }

    
    _contractStoreChange(type){
        if(type == 'ContractList'){
        let contractlist = ContractStore._getContractDetailsList() || {};
        this.setState({contractlist});
      }
       
      if(type == 'Reports'){
        let reports = ContractStore._getReports() || {};
        this.setState({reports});
        console.log("reports response", reports.chartslist.charts);
      }
    }

render() {
    let contractlist = this.state.contractlist;    
    console.log("no.of contracts", contractlist.totalContracts);
    let barchartdata = this.state.reports.chartslist.charts[0] || {};
    let areachartdata = this.state.reports.chartslist.charts[1] || {};
    let datacolumnchart = this.state.reports.chartslist.charts[2] || {};
    let datapiechart = this.state.reports.chartslist.charts[3] || {};
    
    const config = {
        chart: {
             type: datapiechart.chart && datapiechart.chart.type
            },
            title: {
                text: datapiechart.title && datapiechart.title.text
            },
           credits: {
                enabled: false
            },
            series:
              [{data:datapiechart.seriesPie && datapiechart.seriesPie.series,
                name:"clients"
              }]
            };

    const config2 = {
        chart: {
             type: areachartdata.chart && areachartdata.chart.type
            },
            title: {
                text: areachartdata.title && areachartdata.title.text
            },
           credits: {
                enabled: false
            },
            xAxis: {
                categories: areachartdata.xAxis && areachartdata.xAxis.categories
            },
            series: areachartdata.series
            };
    const config3 = {
        chart: {
             type: barchartdata.chart && barchartdata.chart.type
            },
            title: {
                text: barchartdata.title && barchartdata.title.text
            },
           credits: {
                enabled: false
            },
            xAxis: {
                categories: barchartdata.xAxis && barchartdata.xAxis.categories
            },
            series: barchartdata.series
            };
    const config4 = {
        chart: {
             type: datacolumnchart.chart && datacolumnchart.chart.type
            },
            title: {
                text: datacolumnchart.title && datacolumnchart.title.text
            },
           credits: {
                enabled: false
            },
            xAxis: {
                categories: datacolumnchart.xAxis && datacolumnchart.xAxis.categories
            },
            series: datacolumnchart.series
            };        

            
    
        return (
            <div > 
                <div class="sidebar-overlay" id="sidebar-overlay"></div>
                <div class="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle"></div>
                <div class="mobile-menu-handle"></div>
                <aside className="content_block">
            <div className="title_block">
                <div className="row">
                        <div className="col-md-6"> <h4> Reports </h4>   </div>
                        
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 mb-3">
                    <div className="card">
                                              
                        <div className="card-body">
                            
                            <div style={{fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: '18px'}}>
                               <div>Contract Value</div> <br/>
                               <div style={{textAlign: 'center'}}>
                               <h5>1547</h5>
                               </div>
                            </div>
                            
                        </div>      
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                                              
                        <div className="card-body">
                            
                            <div style={{fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: '18px'}}>
                               <div>Total No.of Contracts</div> <br/>
                               <div style={{textAlign: 'center'}}>
                               <h5>{contractlist.totalContracts}</h5>
                               </div>
                            </div>
                            
                        </div>      
                    </div>
                </div>
                 <div className="col-md-3 mb-3">
                    <div className="card">
                                              
                        <div className="card-body">
                            
                            <div style={{fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: '18px'}}>
                               <div>Month Ending Contracts</div> <br/>
                               <div style={{textAlign: 'center'}}>
                               <h5>0</h5>
                               </div>
                            </div>
                            
                        </div>      
                    </div>
                </div>
                 <div className="col-md-3 mb-3">
                    <div className="card">
                                              
                        <div className="card-body">
                            
                            <div style={{fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: '18px'}}>
                               <div>Commission Value</div> <br/>
                               <div style={{textAlign: 'center'}}>
                               <h5>14</h5>
                               </div>
                            </div>
                            
                        </div>      
                    </div>
                </div>
                
                
                


                <div className="col-md-6 mb-3">
                    <div className="card">
                                              
                        <div className="card-body">
                            
                            <figure>
                                <ReactHighcharts config={config3}></ReactHighcharts>
                            </figure>
                            
                        </div>      
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card">
                                              
                        <div className="card-body">
                            
                            <figure>
                              <ReactHighcharts config={config2}></ReactHighcharts>
                            </figure>
                            
                        </div>      
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card">
                                              
                        <div className="card-body">
                            
                            <figure>
                               <ReactHighcharts config={config4}></ReactHighcharts>
                            </figure>
                            
                        </div>      
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="card">
                                           
                        <div className="card-body">
                            
                            <figure>
                              <ReactHighcharts config={config}></ReactHighcharts>
                            </figure>
                            
                        </div>      
                    </div>
                </div>
                
            </div>

        </aside>
             </div>
        )
    }
}

export default Report;