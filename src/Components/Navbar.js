import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export class Navbar extends Component {

  
  render() {
    let {title,refr}=this.props
    const refreshh=()=>{
      this.setState({i : 1});
      setTimeout(()=>{
        refr(1);
      },200)
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News Category
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" onClick={refreshh} /* key='technology' */ category='technology' to='/technology' >Technology</Link></li>
            <li><Link className="dropdown-item" onClick={refreshh} /* key='science' */ category='science' to='/science' >Science</Link></li>
            <li><Link className="dropdown-item" onClick={refreshh} /* key='entertainment' */ category='entertainment' to='/entertainment'>Entertainment</Link></li>
            <li><Link className="dropdown-item" onClick={refreshh} /* key='general' */ category='general' to='/general'>General</Link></li>
            <li><Link className="dropdown-item" onClick={refreshh} /* key='sports' */ category='sports' to='/sports'>Sports</Link></li>
            <li><Link className="dropdown-item" onClick={refreshh} /* key='business' */ category='business' to='/business'>Business</Link></li>
            <li><Link className="dropdown-item" onClick={refreshh} /* key='health' */ category='health' to='/health'>Health</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" /* key='sources' */ category='sources' to='/sources'>Sources</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
    )
  }
}

export default Navbar
