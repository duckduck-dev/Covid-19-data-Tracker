import React from 'react';
import axios from 'axios';
//import OverallCases from './ShowAllCase';
import CountUp from 'react-countup';
import '../styles/main.css';
import img1 from './images/11.png';
import img2 from './images/12.png';
import img3 from './images/13.jpg';
import img4 from './images/14.jpg';
import img5 from './images/03.png';


class Home extends React.Component {
      state = {OverAllData : [], summary : [], mild : 100000, total:100000, critical:10000};

      componentDidMount = async () =>  {
            const request1 =  await axios.get('https://covid19-update-api.herokuapp.com/api/v1/cases/active') ;
            //const request2 = await axios.get('https://api.covid19api.com/summary');
            const OverAllData = await request1.data.activeCases;
            //const summary = await request2.data.Countries;
            this.setState({OverAllData});
            this.setState({mild : OverAllData.mild, total : OverAllData.total, critical : OverAllData.critical});
      }


      render() {
            return(
                  <React.Fragment>                       
                  <div className="jumbotron  jumbotron-fluid bg-grey jumbo"  style={{paddingTop: '30px'}}>
                  <div className="col px-md-3">
                  <h1 className="text-dark display-5">What is Covid19?</h1>
                  <p className="text-primarylead">COVID-19 is a new strain of coronavirus that has not been previously identified in humans. The COVID-19 is the cause of an outbreak of respiratory illness first detected in Wuhan, Hubei province, China.
                  Since December 2019, cases have been identified in a growing number of countries. The District’s surveillance data can be found here.</p>
                  <a style={{background:'#333339', color:'white'}} className="btn  btn-lg" href="https://coronavirus.jhu.edu/covid-19-basics/understanding-covid-19" role="button">Explore</a>
                  </div>
                  </div>
                  <div  style={{paddingBottom: '70px', paddingTop:'50px'}} className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                              <div className="grid">
                              <p className="Identifier">Active</p> 
                              <div className='mainDiv'>
                              <CountUp  style={{color: '#e9ecef'}}
                              className="mediaScr"
                              start={1000000}
                              end={this.state.total}
                              duration={1.75}
                              useEasing={true}
                              useGrouping={true}
                              separator=","
                              decimals={0}
                              decimal=","   />
                              </div>  
                              </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="grid">
                              <p className="Identifier2">Mild</p> 
                              <div  className="mainDiv">
                              <CountUp style={{color: '#e9ecef'}}
                              className="mediaScr"
                              start={1000000}
                              end={this.state.mild}
                              duration={1.75}
                              useEasing={true}
                              useGrouping={true}
                              separator=","
                              decimals={0}
                              decimal=","   />
                              </div>
                              </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="grid">
                              <p className="Identifier3">Critical</p> 
                              <div className="mainDiv">
                              <CountUp style={{color: '#e9ecef'}}
                              className="mediaScr2"
                              start={10000}
                              end={this.state.critical}
                              duration={1.75}
                              useEasing={true}
                              useGrouping={true}
                              separator=","
                              decimals={0}
                              decimal=","  />
                              </div>
                              </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="grid">
                              <p className="Identifier3">Helpline</p> 
                              <div className="mainDiv">
                              <CountUp style={{color: '#e9ecef'}}
                              className="mediaScr2"
                              start={10}
                              end={1075}
                              duration={2.75}
                              useEasing={true}
                              useGrouping={true}
                              separator=""
                              decimals={0}
                              decimal=","  />
                              </div>
                              </div>
                        </div>
                  </div>

                  <div className="container-lg my-3 ">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel"  data-interval="3700">
                  <div class="carousel-inner ">
                    <div class="carousel-item active fluid" >
                      <img  src={img5} alt="First slide"  className="img-fluid img" />
                    </div>
                    <div className="carousel-item" >
                      <img   src={img1} alt="Second slide" className="img-fluid img"/>
                    </div>
                    <div className="carousel-item" >
                      <img    src={img2} alt="Third slide" className="img-fluid img"/>
                    </div>
                        <div className="carousel-item" >
                        <img    src={img4} alt="Third slide" className="img-fluid img"/>
                        </div>
                        <div className="carousel-item" >
                        <img    src={img3} alt="Third slide" className="img-fluid img"/>
                  </div>
                  </div>
                </div>
                  </div>

                 </React.Fragment>
            );
      }
}


    

export default Home;