// import { signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// import { auth, db } from './firebase';
// import { useNavigate } from 'react-router-dom';
// import "../styles/login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errMsg, setErrMsg] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       setErrMsg('Fill all fields');
//       return;
//     }
//     setErrMsg('');

//     signInWithEmailAndPassword(auth, formData.email, formData.password)
//       .then((res) => {
//         const user = res.user;
//         const userRef = db.collection('users').doc(user.uid);
//         userRef.get().then((doc) => {
//           const role = doc.data().role;
//           if (role === 'doctor') {
//             navigate('/DoctorHomePage');
//           } else if (role === 'patient') {
//             navigate('/PatientHomePage');
//           }
//         });
//       })
//       .catch((err) => {
//         setErrMsg(err.message);
//       })

//     setFormData({
//       email: '',
//       password: '',
//     });
//   };

//   const handleClear = () => {
//     setFormData({
//       email: '',
//       password: '',
//     });
//     setErrMsg('');
//   };
//   return (
//     <div className="container my-5">
//       <div className="row justify-content-center">
//         <div className="col-md-5">
//           <div className="registration-container p-4 border rounded shadow">
//             <h2 className="text-center mb-4 login_heading">Login</h2>
//             <form onSubmit={handleSubmit}>
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
              
              // <div className="mb-1 d-flex justify-content-around mt-3">
              //   <button type="submit" className="Login_button p-2">Login</button>
              //   <button type="button" className="Clear_button p-2" onClick={handleClear}>Clear</button>
              // </div>
//               <div className="text-center">
//                 <b className='text-center text-danger'>{errMsg}</b>
//               <p>Don't have an account? <a href="/registrationForm" className='Register_link'>Register</a></p>
//             </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




//.............................................

// import { signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// import { auth } from './firebase';
// import { useNavigate } from 'react-router-dom';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { TextField, Button } from '@mui/material'; // Import Material-UI components
// import "../styles/login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errMsg, setErrMsg] = useState('');
//   const [emailClicked, setEmailClicked] = useState(false);
//   const [passwordClicked, setPasswordClicked] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleEmailClick = () => {
//     setEmailClicked(true);
//   };

//   const handlePasswordClick = () => {
//     setPasswordClicked(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       setErrMsg('Fill all fields');
//       return;
//     }
//     setErrMsg('');

//     signInWithEmailAndPassword(auth, formData.email, formData.password)
//       .then((res) => {
//         const user = res.user;
//         const db = getFirestore(); // Initialize Firestore instance
//         const userRef = doc(db, 'users', user.uid); // Get user document reference
//         getDoc(userRef).then((doc) => {
//           if (doc.exists()) {
//             const role = doc.data().role;
//             console.log(role);
//             if (role === 'doctor') {
//               navigate('/DoctorHomePage');
//             } else if (role === 'patient') {
//               navigate('/PatientHomePage');
//             }
//           } else {
//             setErrMsg('User role not found');
//           }
//         });
//       })
//       .catch((err) => {
//         setErrMsg(err.message);
//       })

//     setFormData({
//       email: '',
//       password: '',
//     });
//     setEmailClicked(false);
//     setPasswordClicked(false);
//   };

//   const handleClear = () => {
//     setFormData({
//       email: '',
//       password: '',
//     });
//     setErrMsg('');
//   };

//   return (
//     <div className="container my-5" style={{ fontFamily: 'Josefin Sans' }}>
//       <div className="row justify-content-center">
//         <div className="col-md-5">
//           <div className="registration-container p-4">
//             <h2 className="text-center mb-4 login_heading">Login</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <TextField
//                   id="email"
//                   name="email"
//                   label="Email Address"
//                   variant="standard"
//                   value={formData.email}
//                   onChange={handleChange}
//                   onClick={handleEmailClick}
//                   required
//                   className={emailClicked ? "form-control clicked" : "form-control"}
//                   InputLabelProps={{
//                     style: { fontFamily: 'Space Grotesk' } // Change font of placeholder
//                   }}
//                   style={{ marginBottom: '15px' }} // Add margin to input fields
//                 />
//               </div>
//               <div className="mb-3">
//                 <TextField
//                   type="password"
//                   id="password"
//                   name="password"
//                   label="Password"
//                   variant="standard"
//                   value={formData.password}
//                   onChange={handleChange}
//                   onClick={handlePasswordClick}
//                   required
//                   className={passwordClicked ? "form-control clicked" : "form-control"}
//                   InputLabelProps={{
//                     style: { fontFamily: 'Space Grotesk' } // Change font of placeholder
//                   }}
//                   style={{ marginBottom: '15px' }} // Add margin to input fields
//                 />
//               </div>
              
//               <div className="mb-1 d-flex justify-content-around mt-3">
//                 <button type="submit" className="Login_button p-2">Login</button>
//                 <button type="button" className="Clear_button p-2" onClick={handleClear}>Clear</button>
//               </div>
//               <div className="text-center">
//                 <b className='text-center text-danger'>{errMsg}</b>
//                 <p>Don't have an account? <a href="/registrationForm" className='Register_link'>Register</a></p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




//......................................................................................

import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import "../styles/login.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#ff8a00',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
            '& .MuiInputBase-input': {
              fontFamily: "'Space Grotesk', sans-serif",
            },
            '& .MuiInputBase-input::placeholder': {
              fontFamily: "'Space Grotesk', sans-serif",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
            '& .MuiInputBase-input': {
              fontFamily: "'Space Grotesk', sans-serif",
            },
            '& .MuiInputBase-input::placeholder': {
              fontFamily: "'josephine sans', sans-serif",
            },
          },
        },
      },
    },
  });

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', });
  const [errMsg, setErrMsg] = useState('');
  const outerTheme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrMsg('Fill all fields');
      return;
    }
    setErrMsg('');

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        const user = res.user;
        const db = getFirestore(); // Initialize Firestore instance
        const userRef = doc(db, 'users', user.uid); // Get user document reference
        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            const role = doc.data().role;
            console.log(role);
            if (role === 'doctor') {
              navigate('/DoctorHomePage');
            } else if (role === 'patient') {
              navigate('/PatientHomePage');
            }
          } else {
            setErrMsg('User role not found');
          }
        });
      })
      .catch((err) => {
        setErrMsg(err.message);
      })

    setFormData({
      email: '',
      password: '',
    });
  };

  const handleClear = () => {
    setFormData({
      email: '',
      password: '',
    });
    setErrMsg('');
  };
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="registration-container p-4">
            <h2 className="text-center mb-4 login_heading">Login</h2>
            <form onSubmit={handleSubmit}>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                      style: { fontFamily: 'Space Grotesk' } // Change font of placeholder
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
                      style: { fontFamily: 'Space Grotesk' } // Change font of placeholder
                    }}
                  />
                </Box>
              </ThemeProvider>
              <div className="mb-1 d-flex justify-content-around mt-3">
                <button type="submit" className="Login_button p-2">
                  Login
                </button>
                <button type="button" className="Clear_button p-2" onClick={handleClear}>
                  Clear
                </button>
              </div>
              <div className="text-center">
                <b className='text-center text-danger'>{errMsg}</b>
                <p>
                  Don't have an account? <a href="/registrationForm" className='Register_link'>Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;