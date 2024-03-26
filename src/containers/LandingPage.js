import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Button,
} from "react-bootstrap";

function LandingPage() {
  return (
    <Container className="App">
      <header class="masthead">
        <div class="container position-relative">
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <div class="text-center text-black">
                <h1 class="mb-5">Digital Audiometer</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <center>
      <img src="./modern_digital_logo_design.jpg" style={{height:'340px', width:'400px', marginBottom:'60px'}}/>
      </center>

      <footer class="footer bg-light mt-6 py-4">
        <center>
          <div class="container">
            <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
              <ul class="list-inline mb-2">
                <li class="list-inline-item">
                  <a href="#!">About</a>
                </li>
                <li class="list-inline-item">⋅</li>
                <li class="list-inline-item">
                  <a href="#!">Contact</a>
                </li>
                <li class="list-inline-item">⋅</li>
                <li class="list-inline-item">
                  <a href="#!">Terms of Use</a>
                </li>
                <li class="list-inline-item">⋅</li>
                <li class="list-inline-item">
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
              <p class="text-muted small mb-4 mb-lg-0">
                &copy; Digital Audiometer 2023. All Rights Reserved.
              </p>
            </div>
          </div>
        </center>
      </footer>
    </Container>
  );
}

export default LandingPage;
