import React from 'react';
import '../styles/main.css';

class Graphs extends React.Component {
      render() {
            return(
                  <div style={{background:'whitesmoke'}}>
                  <iframe style={{margin:'0'}} className="hereMap"  title ="graph" src="https://ourworldindata.org/coronavirus-data-explorer?zoomToSelection=true&deathsMetric=true&dailyFreq=true&aligned=true&smoothing=0&country=IND&pickerMetric=location&pickerSort=asc"></iframe>
                  </div>
            );
      }
      
}



export default Graphs