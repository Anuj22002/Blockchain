// import React from "react";
// import { getAuth, signOut } from "firebase/auth";

// const Navbar = (props) => {
//   function handleLogOut() {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//       })
//       .catch((error) => {
//         // An error happened.
//         console.log(error);
//       });
//   }

//   return (
//     <nav className="navbar navbar-expand-lg bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand text-white " href="/">
//           <span className="badge badge bg-secondary p-2">EHRMS</span>
//         </a>
//         <button
//           className="navbar-toggler bg-white"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active text-white" aria-current="page" href="/">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active text-white" aria-current="page" href="/newsBoard">
//                 News board
//               </a>
//             </li>
// <li className="nav-item dropdown">
//   <a
//     className="nav-link dropdown-toggle text-white"
//     href="/"
//     role="button"
//     data-bs-toggle="dropdown"
//     aria-expanded="false"
//   >
//     Features
//   </a>
//   <ul className="dropdown-menu">
//     <li>
//       <ul className="list-group">
//         <li className="list-group-item">Patient Records Management</li>
//         <li className="list-group-item">Appointment Scheduling</li>
//         <li className="list-group-item">Billing and Invoicing</li>
//         <li className="list-group-item">Prescription Management</li>
//       </ul>
//     </li>
//   </ul>
// </li>
//             <li className="nav-item">
//               <a className="nav-link active text-white" aria-current="page" href="/record">
//                 Record
//               </a>
//             </li>
//           </ul>
//           {props.name ? (
//             <div className="d-flex align-items-center">
//               <h5 className="text-white">Welcome {props.name}</h5>
//               <button type="button" className="btn btn-secondary ms-2" onClick={handleLogOut}>
//                 Log out
//               </button>
//             </div>
//           ) : (
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle text-white"
//                   href="/"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Register
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a className="dropdown-item text-black" href="/login">
//                       Login
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item text-black" href="/registrationForm">
//                       Register
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect } from 'react';
// import React, { useState, useEffect } from "react";
// import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

// import "../styles/navbar.css";
// import EHRHubLogo from "../media/EHR-Hub-Logo-2.png";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState(null);
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserName(user.displayName);
//         const db = getFirestore();
//         const userRef = doc(db, "users", user.uid);
//         getDoc(userRef).then((doc) => {
//           if (doc.exists()) {
//             const role = doc.data().role;
//             setUserRole(role);
//           } else {
//             console.log("User role not found");
//           }
//         });
//       } else {
//         setUserName(null);
//         setUserRole(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogOut = () => {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         setUserName(null);
//         setUserRole(null);
//         navigate("/"); // Redirect user to the home page upon logout
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleHomeClick = () => {
//     if (userRole === "doctor") {
//       navigate("/DoctorHomePage");
//     } else if (userRole === "patient") {
//       navigate("/PatientHomePage");
//     } else {
//       navigate("/");
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-white navbar-container">
//       <div className="container-fluid">
//         <a className="navbar-brand text-white " href="/">
//           <img
//             src={EHRHubLogo}
//             alt="EHR Hub Logo"
//             className="Logo"
//             style={{
//               maxWidth: "100%",
//               height: "50px",
//               paddingLeft: "80px",
//               paddingRight: "40px",
//             }}
//           />
//         </a>
//         <button
//           className="navbar-toggler bg-white"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link px-4 py-3" onClick={handleHomeClick}>
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link px-4 py-3" href="/newsBoard">
//                 News board
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle px-4 py-3"
//                 href="/"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Records
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a
//                     className="dropdown-item"
//                     href="/bloodReportForm"
//                     target="blank"
//                   >
//                     Blood Report
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="/record" target="blank">
//                     General Records
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="dropdown-item"
//                     href="/dentalForm"
//                     target="blank"
//                   >
//                     Dental Form
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="dropdown-item"
//                     href="/eyeReportForm"
//                     target="blank"
//                   >
//                     Eye Reports
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="dropdown-item"
//                     href="/CardiologyForm"
//                     target="blank"
//                   >
//                     Cardiology Reports
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="dropdown-item"
//                     href="/allergiesForm"
//                     target="blank"
//                   >
//                     Allergies
//                   </a>
//                 </li>
//               </ul>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link px-4 py-3" href="#about_us">
//                 About Us
//               </a>
//             </li>

//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle px-4 py-3"
//                 href="/"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Features
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a
//                     className="dropdown-item"
//                     href="#patient_record_management"
//                   >
//                     <lord-icon
//                       src="https://cdn.lordicon.com/xljvqlng.json"
//                       trigger="hover"
//                       style={{
//                         width: "20px",
//                         height: "20px",
//                         paddingRight: "50px",
//                         paddingTop: "2px",
//                       }} // Adjust padding as needed
//                     ></lord-icon>
//                     Patient Records Management
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#appointment_scheduling">
//                     <lord-icon
//                       src="https://cdn.lordicon.com/ogkflacg.json"
//                       trigger="hover"
//                       style={{
//                         width: "20px",
//                         height: "20px",
//                         paddingRight: "50px",
//                         paddingTop: "2px",
//                       }} // Adjust padding as needed
//                     ></lord-icon>
//                     Appointment Scheduling
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="dropdown-item"
//                     href="/vaccination"
//                     target="blank"
//                   >
//                     <script src="https://cdn.lordicon.com/lordicon.js"></script>
//                     <lord-icon
//                       src="https://cdn.lordicon.com/znjhzlev.json"
//                       trigger="hover"
//                       stroke="bold"
//                       colors="primary:#121331,secondary:#000000"
//                       style={{
//                         width: "25px",
//                         height: "25px",
//                         paddingRight: "50px",
//                         paddingTop: "2px",
//                       }} // Adjust padding as needed
//                     ></lord-icon>
//                     Active Vaccinations
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#prescription_management">
//                     <lord-icon
//                       src="https://cdn.lordicon.com/depeqmsz.json"
//                       trigger="hover"
//                       style={{
//                         width: "20px",
//                         height: "20px",
//                         paddingRight: "50px",
//                         paddingTop: "2px",
//                       }} // Adjust padding as needed
//                     ></lord-icon>
//                     Prescription Management
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//           {userName ? (
//             <div className="navbar-nav">
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle welcome_username"
//                   href="/"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Welcome {userName}
//                 </a>
//                 <ul
//                   className="dropdown-menu dropdown-menu-width"
//                   aria-labelledby="navbarDropdown"
//                 >
//                   <li>
//                   <a
//                     className="dropdown-item"
//                     href="/patientProfilePage"
//                     target="blank"
//                   >
//                     Profile
//                   </a>
//                 </li>
//                   <li>
//                     <button className="dropdown-item" onClick={handleLogOut}>
//                       Logout
//                     </button>
//                   </li>
//                 </ul>
//               </li>
//             </div>
//           ) : (
//             <ul className="d-flex p-0" style={{ marginRight: "6rem" }}>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle px-4 py-2"
//                   href="/"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <script src="https://cdn.lordicon.com/lordicon.js"></script>
//                   <lord-icon
//                     src="https://cdn.lordicon.com/hrjifpbq.json"
//                     trigger="in"
//                     delay="1500"
//                     state="in-account"
//                     style={{
//                       width: "30px",
//                       height: "30px",
//                       paddingTop: "10px",
//                       paddingRight: "50px",
//                     }}
//                   ></lord-icon>
//                   Register
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a className="dropdown-item" href="/login">
//                       Login
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="/registrationForm">
//                       Register
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import "../styles/navbar.css";
import EHRHubLogo from "../media/EHR-Hub-Logo-2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        const db = getFirestore();
        const userRef = doc(db, "users", user.uid);
        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            const role = doc.data().role;
            setUserRole(role);
          } else {
            console.log("User role not found");
          }
        });
      } else {
        setUserName(null);
        setUserRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserName(null);
        setUserRole(null);
        navigate("/"); // Redirect user to the home page upon logout
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProfileClick = () => {
    if (userRole === "doctor") {
      navigate("/doctorProfilePage");
    } else if (userRole === "patient") {
      navigate("/patientProfilePage");
    }
  };

  const handleHomeClick = () => {
    if (userRole === "doctor") {
      navigate("/DoctorHomePage");
    } else if (userRole === "patient") {
      navigate("/PatientHomePage");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-container">
      <div className="container-fluid">
        <a className="navbar-brand text-white " href="/">
          <img
            src={EHRHubLogo}
            alt="EHR Hub Logo"
            className="Logo"
            style={{
              maxWidth: "100%",
              height: "50px",
              paddingLeft: "80px",
              paddingRight: "40px",
            }}
          />
        </a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link px-4 py-3" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4 py-3" href="/newsBoard">
                News board
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-4 py-3"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Records
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/bloodReportForm"
                    target="blank"
                  >
                    Blood Report
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/cardiologyForm"
                    target="blank"
                  >
                    Cardiology Report
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/record" target="blank">
                    Add Records
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/dentalForm"
                    target="blank"
                  >
                    Dental Report
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/eyeReportForm"
                    target="blank"
                  >
                    Eye Reports
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/allergiesForm"
                    target="blank"
                  >
                    Allergies
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link px-4 py-3" href="#about_us">
                About Us
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-4 py-3"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Features
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#patient_record_management"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/xljvqlng.json"
                      trigger="hover"
                      style={{
                        width: "20px",
                        height: "20px",
                        paddingRight: "50px",
                        paddingTop: "2px",
                      }} // Adjust padding as needed
                    ></lord-icon>
                    Patient Records Management
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#appointment_scheduling">
                    <lord-icon
                      src="https://cdn.lordicon.com/ogkflacg.json"
                      trigger="hover"
                      style={{
                        width: "20px",
                        height: "20px",
                        paddingRight: "50px",
                        paddingTop: "2px",
                      }} // Adjust padding as needed
                    ></lord-icon>
                    Appointment Scheduling
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/vaccination"
                    target="blank"
                  >
                    <script src="https://cdn.lordicon.com/lordicon.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/znjhzlev.json"
                      trigger="hover"
                      stroke="bold"
                      colors="primary:#121331,secondary:#000000"
                      style={{
                        width: "25px",
                        height: "25px",
                        paddingRight: "50px",
                        paddingTop: "2px",
                      }} // Adjust padding as needed
                    ></lord-icon>
                    Active Vaccinations
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#prescription_management">
                    <lord-icon
                      src="https://cdn.lordicon.com/depeqmsz.json"
                      trigger="hover"
                      style={{
                        width: "20px",
                        height: "20px",
                        paddingRight: "50px",
                        paddingTop: "2px",
                      }} // Adjust padding as needed
                    ></lord-icon>
                    Prescription Management
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {userName ? (
            <div className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle welcome_username"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Welcome {userName}
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-width"
                  aria-labelledby="navbarDropdown"
                >
<li>
                    <a className="dropdown-item" onClick={handleProfileClick} target="blank" style={{cursor:"pointer"}}>
                      Profile
                    </a>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </div>
          ) : (
            <ul className="d-flex p-0" style={{ marginRight: "6rem" }}>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-4 py-2"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/hrjifpbq.json"
                    trigger="in"
                    delay="1500"
                    state="in-account"
                    style={{
                      width: "30px",
                      height: "30px",
                      paddingTop: "10px",
                      paddingRight: "50px",
                    }}
                  ></lord-icon>
                  Register
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/registrationForm">
                      Register
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;