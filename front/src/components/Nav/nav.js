// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
export default function Nav(){
    return(<>
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="#/register">Register</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#/Login">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#/Calculator">Calculator</a>
  </li>
  {/* <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li> */}
</ul></>)
}

