// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import React, { useState } from 'react';
// import { auth, db } from './firebase';
// import { useNavigate } from 'react-router-dom';
// import "../styles/registration_form.css";

// const RegistrationForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: '',
//   });
//   const [errMsg, setErrMsg] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const val = type === 'checkbox' ? checked : value;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: val
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.role) {
//       setErrMsg('Fill all fields');
//       return;
//     }
//     setErrMsg('');
//     if (formData.password !== formData.confirmPassword) {
//       setErrMsg('Password and confirm password fields do not match');
//       return;
//     }

//     createUserWithEmailAndPassword(auth, formData.email, formData.password)
//       .then((res) => {
//         const user = res.user;
//         updateProfile(user, {
//           displayName: formData.name
//         });
//         const userRef = db.collection('users').doc(user.uid);
//         userRef.set({ role: formData.role });
//         navigate('/Login');
//       })
//       .catch((err) => {
//         setErrMsg(err.message);
//       })

//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       role: '',
//     });
//   };

//   const handleClear = () => {
//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       role: '',
//     });
//     setErrMsg('');
//   };
//   return (
//     <div className="container my-5">
//       <div className="row justify-content-center">
//         <div className="col-md-5">
//           <div className="registration-container p-4 border rounded shadow">
//             <h2 className="text-center mb-4 registration_heading">Registration</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-1">
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-1">
//                 <label htmlFor="email" className="form-label">Email Address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-1">
//                 <label htmlFor="password" className="form-label">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-1">
//                 <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="mb-1">
//       <label htmlFor="role" className="form-label">Role</label>
//       <select
//         id="role"
//         name="role"
//         value={formData.role}
//         onChange={handleChange}
//         required
//       >
//         <option value="">Select a role</option>
//         <option value="doctor">Doctor</option>
//         <option value="patient">Patient</option>
//       </select>
//     </div>

//               <div className="mb-1 d-flex justify-content-around mt-3">
//                 <button type="submit" className="register_button p-2">Register</button>
//                 <button type="button" className="Clear_button p-2" onClick={handleClear}>Clear Form</button>
//               </div>
//               <div className="text-center">
//                 <b className='text-center text-danger'>{errMsg}</b>
//               <p>Already have an account? <a href="/login">Log in</a></p>
//             </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

//.................................................

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { app, auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import "../styles/registration_form.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#FFA500",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
            "& .MuiInputBase-input": {
              fontFamily: "'Space Grotesk', sans-serif",
            },
            "& .MuiInputBase-input::placeholder": {
              fontFamily: "'Space Grotesk', sans-serif",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
            "& .MuiInputBase-input": {
              fontFamily: "'Space Grotesk', sans-serif",
            },
            "& .MuiInputBase-input::placeholder": {
              fontFamily: "'josephine sans', sans-serif",
            },
          },
        },
      },
    },
  });

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const outerTheme = useTheme();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.role
    ) {
      setErrMsg("Fill all fields");
      return;
    }
    setErrMsg("");
    if (formData.password !== formData.confirmPassword) {
      setErrMsg("Password and confirm password fields do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: formData.name,
        });
        const db = getFirestore(app); // Initialize Firestore instance
        const userRef = doc(db, "users", user.uid); // Get user document reference
        setDoc(userRef, { role: formData.role }); // Store user role in Firestore
        navigate("/Login");
      })
      .catch((err) => {
        setErrMsg(err.message);
      });

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    });
    setErrMsg("");
  };
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="registration-container p-4">
            <h2 className="text-center mb-4 registration_heading">
              Registration
            </h2>
            <form onSubmit={handleSubmit}>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    // required
                    variant="standard"
                    margin="dense"
                    InputLabelProps={{
                      style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                    }}
                  />
                  <TextField
                    label="Email Address"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    // required
                    variant="standard"
                    margin="dense"
                    InputLabelProps={{
                      style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                    }}
                  />
                  <TextField
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    // required
                    variant="standard"
                    margin="dense"
                    InputLabelProps={{
                      style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                    }}
                  />
                  <TextField
                    label="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    // required
                    variant="standard"
                    margin="dense"
                    InputLabelProps={{
                      style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                    }}
                  />
                  <FormControl variant="standard">
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                      labelId="role-label"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      // required
                      margin="dense"
                      InputLabelProps={{
                        style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                      }}
                    >
                      <MenuItem value="">Select a role</MenuItem>
                      <MenuItem
                        value="doctor"
                        className="role_dropdown_item role_doctor"
                      >
                        Doctor
                      </MenuItem>
                      <MenuItem
                        value="patient"
                        className="role_dropdown_item role_patient"
                      >
                        Patient
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </ThemeProvider>
              <div className="mb-1 d-flex justify-content-around mt-3">
                <button type="submit" className="register_button p-2">
                  Register
                </button>
                <button
                  type="button"
                  className="Clear_button p-2"
                  onClick={handleClear}
                >
                  Clear Form
                </button>
              </div>
              <div className="text-center">
                <b className="text-center text-danger">{errMsg}</b>
                <p>
                  Already have an account? <a href="/login">Log in</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
