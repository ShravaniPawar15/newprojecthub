import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MainScreen from "../Mainscreen/mainscreen";
function Profilescreen() {
  const [name, setName] =React.useState("");
  const [email, setEmail] = React.useState("");
  
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");


  // const dispatch = React.useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const userUpdate = useSelector((state) => state.userUpdate);
  // const { loading, error, success } = userUpdate;

//   useEffect(() => {
//     if (!userInfo) {
//       history.push("/");
//     } else {
//       setName(userInfo.name);
//       setEmail(userInfo.email);
//       setPic(userInfo.pic);
//     }
//   }, [history, userInfo]);

  // const postDetails = (pics) => {
  //   setPicMessage(null);
  //   if (pics.type === "image/jpeg" || pics.type === "image/png") {
  //     const data = new FormData();
  //     data.append("file", pics);
  //     data.append("upload_preset", "notezipper");
  //     data.append("cloud_name", "piyushproj");
  //     fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPic(data.url.toString());
  //         console.log(pic);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     return setPicMessage("Please Select an Image");
  //   }
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   dispatch(updateProfile({ name, email, password }));
  // };

  



  

  
  

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

     
      <div className="gradient__bg">
        <div className="shape" />
        <div className="shape" />
      </div >
      <div className="gradient__bg" style={{  color: "#ffffff" }} >
        <Col md={6}>
        <form className="gradient__bg"  method="POST">
          <h3 style={{"margin":"20px"}}>Update Profile</h3>
          <Form.Group controlId="name">
                 <Form.Label style={{color:"#ffffff","margin":"5px"}}>Name</Form.Label>
                 <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  style={{"margin":"10px"}}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
                 <Form.Label  style={{"margin":"5px"}} >Email Address</Form.Label>
                 <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  style={{"margin":"10px"}}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
       </Form.Group>

       <Form.Group controlId="password">
                <Form.Label style={{"margin":"5px"}}>Password</Form.Label>
                 <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  style={{"margin":"10px"}}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label style={{"margin":"5px"}}>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  style={{"margin":"10px"}}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
         
              {/* <Form.Group controlId="pic">
                 <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                  // onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group> */}

          
          <button class="btn btn-light" type="button" style={{marginLeft:"10px",marginRight:"10px", marginTop:"10px"}} >Update</button>
        </form>
        </Col>
      </div>

    </>);
}


  // return (
   




     
  //     <div style={{color: "red"}}>
  //       <Row >
  //         <Col md={6}>
  //           <Form >
  //             {/* {loading && <Loading />}
  //             {success && (
  //               <ErrorMessage variant="success">
  //                 Updated Successfully
  //               </ErrorMessage>
  //             )} */}
  //             {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
  //             <Form.Group controlId="name">
  //               <Form.Label style={{color:"#ffffff"}}>Name</Form.Label>
  //               <Form.Control
  //                 type="text"
  //                 placeholder="Enter Name"
  //                 // value={name}
  //                 // onChange={(e) => setName(e.target.value)}
  //               ></Form.Control>
  //             </Form.Group>
  //             <Form.Group controlId="email">
  //               <Form.Label>Email Address</Form.Label>
  //               <Form.Control
  //                 type="email"
  //                 placeholder="Enter Email"
  //                 // value={email}
  //                 // onChange={(e) => setEmail(e.target.value)}
  //               ></Form.Control>
  //             </Form.Group>
  //             <Form.Group controlId="password">
  //               <Form.Label>Password</Form.Label>
  //               <Form.Control
  //                 type="password"
  //                 placeholder="Enter Password"
  //                 // value={password}
  //                 // onChange={(e) => setPassword(e.target.value)}
  //               ></Form.Control>
  //             </Form.Group>
  //             <Form.Group controlId="confirmPassword">
  //               <Form.Label>Confirm Password</Form.Label>
  //               <Form.Control
  //                 type="password"
  //                 placeholder="Confirm Password"
  //                 // value={confirmPassword}
  //                 // onChange={(e) => setConfirmPassword(e.target.value)}
  //               ></Form.Control>
  //             </Form.Group>{" "}
  //             {/* {picMessage && (
  //               <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
  //             )} */}
  //             <Form.Group controlId="pic">
  //               <Form.Label>Change Profile Picture</Form.Label>
  //               <Form.File
  //                 // onChange={(e) => postDetails(e.target.files[0])}
  //                 id="custom-file"
  //                 type="image/png"
  //                 label="Upload Profile Picture"
  //                 custom
  //               />
  //             </Form.Group>
  //             <Button type="submit" varient="primary">
  //               Update
  //             </Button>
  //           </Form>
  //         </Col>
  //         {/* <Col
  //           style={{
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <img src={pic} 
  //           // alt={name} 
  //           className="profilePic" />
  //         </Col> */}
  //       </Row>
  //     </div>
   
  // );


export default Profilescreen;