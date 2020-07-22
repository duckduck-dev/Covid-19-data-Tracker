import React from 'react';
import FetchCase from './FetchCase';

class OverallCases extends React.Component{

            render() {
                  return(<div>
                        <FetchCase  ref={this.Ref} Mild={this.props.DataSet.mild} Critical={this.props.DataSet.critical} Total={this.props.DataSet.total}/>               
                  </div>
            );
            }   
}



export default OverallCases;