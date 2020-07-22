import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/main.css';

const NavBar = () => {
      return (
            <div className="nvB">
      <nav className="navbar navbar-expand-lg navbar-light" style={{background:'rgb(240,128,128)'}}>   
                  <Link to="/"><a className=" font-weight-bold navbar-brand  text-white"  href="/" ><span><i className='fab fa-google-wallet' style={{fontSize:'48px',color:'#333339'}}></i></span></a></Link>
                       <div className="Icon"> <button  style={{background:'rgb(240,128,128)'}} className="navbar-toggler text-dark toggleIcon" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                        </button></div>
                        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                              <div  className="navbar-nav">
                                    <Link to="/dashboards" className="bar active"><li className="nav-link  active font-weight-bold Nvbar" >Dashboard<span className="sr-only">(current)</span></li></Link>
                                    <Link to="/graphs" className="bar"><li  className="nav-item nav-link  font-weight-bold Nvbar">Graphs <span className="sr-only">(current)</span></li></Link>
                                    <Link to="/maps" className="bar"><li  className="nav-item nav-link  font-weight-bold  Nvbar" > Maps <span className="sr-only">(current)</span></li></Link>
                              </div>
                         </div>
                  </nav>
            </div>
      );
}

export default NavBar;