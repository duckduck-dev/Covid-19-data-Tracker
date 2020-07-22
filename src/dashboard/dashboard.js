import React from 'react';
import '../styles/main.css';

class Dashboard extends React.Component {
      render() {
            return(
                  <div>
                        <iframe className="hereMap" height="500" width="500" src="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" title="dashboard"/>
                  </div>
            );
      }
}


export default Dashboard;