import React from 'react';

const FetchCase = ({Total, Mild, Critical}) => {
            return(
                  <React.Fragment>
                        <h3>Total : {Total}</h3>
                        <h3>Mild : {Mild}</h3>
                        <h3>Critical : {Critical}</h3>
                  </React.Fragment>
            );
      }


export default FetchCase;
