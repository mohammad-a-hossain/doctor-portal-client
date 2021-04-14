import React from 'react'
import { Link } from 'react-router-dom';


 const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link ms-5 active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-5" to="/Login">Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-5" to="/##">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white ms-5" to="/dashboard">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white ms-5" to="/##">Review</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white ms-5" to="/##">Blog</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white ms-5" to="/##">Contact us</Link>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
            
      
    )
}
export default Navigation