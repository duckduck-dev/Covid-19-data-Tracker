import  React from 'react';


class About extends React.Component {

      render() {
            return(
                  <div>
                  <iframe className="hereMap"  src="https://app.developer.here.com/coronavirus/"  style={{frameBorder:"0"}} title="Map"></iframe>
                  </div>
            );

      }

}


export default About;