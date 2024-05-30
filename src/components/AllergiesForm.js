import React, { useState } from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box';

// import "../styles/allergies.css";

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
              padding: "12px", // Add padding to input
            },
            "& .MuiInputBase-root": {
              margin: "8px 0", // Add margin to input
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

const AllergiesForm = () => {
  const outerTheme = useTheme();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [medication, setMedication] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [otherDetails, setOtherDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the medication data
    const medicationData = {
      name,
      age,
      gender,
      medication,
      dosage,
      frequency,
      otherDetails,
    };
    // Store the medication data in local storage
    localStorage.setItem("medicationData", JSON.stringify(medicationData));
    // Clear the form fields after submission
    setName("");
    setAge("");
    setGender("");
    setMedication("");
    setDosage("");
    setFrequency("");
    setOtherDetails("");
  };

  return (
      <div className="container my-5">
      {/* <div className="row justify-content-center"> */}
        {/* <div className="col-md-5"> */}
          <div className="registration-container p-4">
            <h2 className="text-center mb-4 login_heading">Allergies Form</h2>
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
            label="Medication"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            required
            variant="standard"
            margin="dense"
          />
          <TextField
            label="Dosage"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            required
            variant="standard"
            margin="dense"
          />
          <TextField
            label="Frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            required
            variant="standard"
            margin="dense"
          />
          <TextField
            label="Other Details"
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
            required
            variant="standard"
            margin="dense"
          />
          </Box>
          <div className="mb-1 text-center mt-3">
            <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#ff8a00" }}>
              Submit
            </Button>
          </div>
    </ThemeProvider>
        </form>
      </div>
      </div>
    //   </div>
    //   </div>
  );
};

export default AllergiesForm;