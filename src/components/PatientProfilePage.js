import React, { useState } from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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
            "--TextField-brandBorderFocusedColor": "#ff8a00",
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

const PatientProfilePage = () => {
  const outerTheme = useTheme();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileData = {
      name,
      age,
      gender,
      address,
      city,
      state,
      country,
      phoneNumber,
    };

    try {
      // Get the authenticated user
      const auth = getAuth();
      const currentUser = auth.currentUser;

      // Get the Firestore instance
      const firestore = getFirestore();

      // Create a new document in the "profiles" collection
      const profileRef = doc(firestore, "users", currentUser.uid);  //............................................."USERS......................................"
      await setDoc(profileRef, profileData);

      console.log("Profile data saved successfully");
      // Clear form fields
      setName("");
      setAge("");
      setGender("");
      setAddress("");
      setCity("");
      setState("");
      setCountry("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error saving profile data: ", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="registration-container p-4">
        <h2 className="text-center mb-4 login_heading">Profile</h2>
        <form onSubmit={handleSubmit}>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                variant="standard"
                margin="dense"
              />
              <TextField
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                variant="standard"
                margin="dense"
              />
              <TextField
                select
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                variant="standard"
                margin="dense"
              >
                <MenuItem value="">Select Gender</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
              <TextField
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                variant="standard"
                margin="dense"
              />
              <TextField
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                variant="standard"
                margin="dense"
              />
              <TextField
                label="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                variant="standard"
                margin="dense"
              />
              <TextField
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                variant="standard"
                margin="dense"
              />
              <TextField
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                variant="standard"
                margin="dense"
              />
            </Box>
            <div className="mb-1 text-center mt-3">
              <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#ff8a00" }}>
                Save
              </Button>
            </div>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
};

export default PatientProfilePage;