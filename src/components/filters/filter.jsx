import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CTA, Brand, Navbar } from '..';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../../containers';
import axios from "axios";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";

function MyForm() {
  
    
    const [Dept, setDept] = React.useState("dept");
    const [Domain, setDomain] = React.useState("Web");
    const [Language, setLanguage] = React.useState("lang");
  
    const [Year, setYear] = React.useState(null);
 

  let minOffset = 0, maxOffset = 75;
  let thisYear = (new Date()).getFullYear();
  let allYears = [];
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x)
  }

  const yearList = allYears.map((x) => { return (<option style={{ color: "#000000" }} key={x}>{x}</option>) });
  

  return (




    <>
      <title>Glassmorphism login Form Tutorial in html css</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
        rel="stylesheet"
      />

      {/* <style
        media="screen"
        dangerouslySetInnerHTML={{
          __html:
            "\n      ,\n:before,\n*:after{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    background-color: #080710;\n}\n.background{\n    width: 430px;\n    height: 520px;\n       transform: translate(-50%,-50%);\n    left: 50%;\n   }\n.background .shape{\n    height: 200px;\n    width: 200px;\n    position:relative;\n    border-radius: 50%;\n}\n.shape:first-child{\n    \n    left: -80px;\n    top: -80px;\n}\n.shape:last-child{\n   \n    right: -30px;\n    bottom: -80px;\n}\nform{\n    height: auto;\n    width: 600px;\n    background-color: rgba(255,255,255,0.13);\n    position:relative;\n    transform: translate(-50%,-50%);\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    backdrop-filter: blur(10px);\n    border: 2px solid rgba(255,255,255,0.1);\n    box-shadow: 0 0 40px rgba(8,7,16,0.6);\n    padding: 50px 35px;\n}\nform *{\n    font-family: 'Poppins',sans-serif;\n    color: #ffffff;\n    letter-spacing: 0.5px;\n    outline: none;\n    border: none;\n}\nform h3{\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 42px;\n    text-align: center;\n}\n\nlabel{\n    display: block;\n    margin-top: 30px;\n    font-size: 16px;\n    font-weight: 500;\n}\ninput{\n    display: block;\n    height: 50px;\n    width: 100%;\n    background-color: rgba(255,255,255,0.07);\n    border-radius: 3px;\n    padding: 0 10px;\n    margin-top: 8px;\n    font-size: 14px;\n    font-weight: 300;\n}\n::placeholder{\n    color: #e5e5e5;\n}\nbutton{\n    margin-top: 50px;\n    width: 100%;\n    background-color: #ffffff;\n    color: #080710;\n    padding: 15px 0;\n    font-size: 18px;\n    font-weight: 600;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.social{\n  margin-top: 30px;\n  display: flex;\n}\n.social div{\n  background: red;\n  width: 150px;\n  border-radius: 3px;\n  padding: 5px 10px 10px 5px;\n  background-color: rgba(255,255,255,0.27);\n  color: #eaf0fb;\n  text-align: center;\n}\n.social div:hover{\n  background-color: rgba(255,255,255,0.47);\n}\n.social .fb{\n  margin-left: 25px;\n}\n.social i{\n  margin-right: 4px;\n}\n\n    ",
        }}
      /> */}
      {/* <div className="gradient__bg">
        <div className="shape" />
        <div className="shape" />
      </div > */}
      <div  style={{  color: "#ffffff" }} >
      
      <form className="gradient__bg" style={{"padding": "50px" }} method="POST">

           <h3>Filters</h3>
          <Row style={{ marginRight: "15px" }}>
          
            <Form.Label>Department</Form.Label>
            <Form.Select onChange={(e) => setDept(e.target.value)} as={Col} aria-label="Default select example" style={{ "margin": "15px", color: "#000000" }} required>
              <option style={{ color: "#000000" }}>Select</option>
              <option value="1" style={{ color: "#000000" }} >CSE</option>
              <option value="2" style={{ color: "#000000" }}>IT</option>
              <option value="3" style={{ color: "#000000" }} >Electronics</option>
              <option value="3" style={{ color: "#000000" }} >Electrical</option>
              <option value="3" style={{ color: "#000000" }} >Mechanical</option>
              <option value="3" style={{ color: "#000000" }} >Civil</option>

            </Form.Select>
           
        
         
          
          
            
            <Form.Label>Domain</Form.Label>
            <Form.Select onChange={(e) => setDomain(e.target.value)} as={Col} aria-label="Default select example" style={{ "margin": "15px", color: "#000000" }} required>
              <option style={{ color: "#000000" }}>Select</option>
              <option value="1" style={{ color: "#000000" }} >Web</option>
              <option value="2" style={{ color: "#000000" }}>Android</option>
              <option value="3" style={{ color: "#000000" }} >Blockchain</option>
            </Form.Select>
            
          
          
            
            <Form.Label color="#fff">Languages Used</Form.Label>
            <Form.Select onChange={(e) => setLanguage(e.target.value)} as={Col} aria-label="Default select example" style={{ margin: "15px" }} required>

              <option style={{ color: "#000000" }}>Select</option>
              <option value="1" style={{ color: "#000000" }}>C</option>
              <option value="2" style={{ color: "#000000" }}>CPP</option>
              <option value="3" style={{ color: "#000000" }}>JAVA</option>
              <option value="3" style={{ color: "#000000" }}>PYTHON</option>
              <option value="3" style={{ color: "#000000" }}>HTML,CSS</option>
              <option value="3" style={{ color: "#000000" }}>REACT JS</option>
            </Form.Select>
           
          
          
            
            <Form.Label style={{ color: "#ffffff" }}>Academic-year</Form.Label>
            <Form.Select onChange={(e) => setYear(e.target.value)} aria-label="Default select example" style={{ "margin": "15px", color: "#000000" }} required >
              {yearList}
              {/* <option style={{ color: "#000000" }}>Select</option>

              <option value="1" style={{ color: "#000000" }}>2019-2020</option>
              <option value="2" style={{ color: "#000000" }}>2020-2021</option>
              <option value="3" style={{ color: "#000000" }}>Three</option> */}

            </Form.Select>
            {/* <button type="submit" style={{"margin":"20px"}}>Apply</button> */}
            <button class="btn btn-light" type="button" style={{marginLeft:"15px",marginRight:"10px", marginTop:"10px"}} >Apply</button>
          
            
          </Row>
          
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
              <Form.Label>Colaborators</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group> */}
      
        </form>
        </div>
     
    </>);
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
export default MyForm;