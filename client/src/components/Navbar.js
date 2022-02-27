import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../App.css';

export default function Navbar() {
  useEffect(() => {
  }, [Location])
  const navigate = useNavigate()
  let location = useLocation();
  const handlelogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid">
    //       <Link className="navbar-brand" to="/">CNote</Link>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
    //       <div>
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link className={`nav-link ${location.pathname === '/'}?'active':""`} aria-current="page" to="/">Home</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className={`nav-link ${location.pathname === '/about'}?'active':""`} to="/about">About</Link>
    //           </li>


    //         </ul>
    //         <form className="d-flex">
    //           {!localStorage.getItem('token') ? 
    //         <div><Link className="btn btn-outline-primary mx-2" to="/login" role="button">Login</Link>
    //         <Link className="btn btn-outline-primary" to="/signup" role="button">Signup</Link></div> : <Link className="btn btn-outline-primary" to="/login" role="button" onClick={handlelogout}>Logout</Link>
    //           }
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
          <Link className="navbar-brand" to="/">CNote</Link>

          {localStorage.getItem('token') &&
            <div className="nav-item">
              <Link aria-current="page" to="/">Home </Link>
            </div>}
            
          <div className="nav-item">
            <Link aria-current="page" to="/about" > About</Link>
          </div>

          <form className="d-flex log-sign">
            {!localStorage.getItem('token') ?
              <div><Link className="btn btn-outline-primary mx-2" to="/login" role="button">Login</Link>
                <Link className="btn btn-outline-primary" to="/signup" role="button">Signup</Link></div> : <Link className="btn btn-outline-primary" to="/login" role="button" onClick={handlelogout}>Logout</Link>
            }
          </form>
        </div>
      </nav>
    </div>
  )
}
