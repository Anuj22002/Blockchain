import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box';
import Web3 from 'web3';
import CardiologyContract from './contracts/CardiologyContract.json';

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

const CardiologyForm = () => {
  const outerTheme = useTheme();

  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [pDuration, setPDuration] = useState("");
  const [prInterval, setPrInterval] = useState("");
  const [qrsDuration, setQrsDuration] = useState("");
  const [qtInterval, setQtInterval] = useState("");
  const [qtcInterval, setQtcInterval] = useState("");
  const [pqrsTAxis, setPqrsTAxis] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");

  useEffect(() => {
    const initWeb3 = async () => {
      const web3 = new Web3('http://127.0.0.1:7545'); // Connect to Ganache RPC
      setWeb3(web3);

      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = CardiologyContract.networks[networkId];
      const contract = new web3.eth.Contract(
        CardiologyContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContract(contract);
    };

    initWeb3();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contract) return;
  
    await contract.methods
      .addPatient(
        name,
        parseInt(age),
        gender,
        parseInt(heartRate),
        parseInt(pDuration),
        parseInt(prInterval),
        parseInt(qrsDuration),
        parseInt(qtInterval),
        parseInt(qtcInterval),
        bloodPressure,
        pqrsTAxis
      )
      .send({ from: accounts[0], gas: 5000000, gasPrice: '0' });
  
    // Clear the form fields after submission
    setName("");
    setAge("");
    setGender("");
    setHeartRate("");
    setPDuration("");
    setPrInterval("");
    setQrsDuration("");
    setQtInterval("");
    setQtcInterval("");
    setBloodPressure("");
    setPqrsTAxis("");
  };
  

  return (
    <div className="container my-5">
      <div className="registration-container p-4">
        <h2 className="text-center mb-4 login_heading">Cardiology Form</h2>
        <form onSubmit={handleSubmit}>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" },
                }}
                required
              />
              <TextField
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" },
                }}
                required
              />
              <TextField
                select
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" },
                }}
                required
              >
                <MenuItem value="">Select Gender</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
              <TextField
                label="Heart Rate"
                value={heartRate}
                onChange={(e) => setHeartRate(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" },
                }}
                required
              />
              <TextField
                label="P Duration"
                value={pDuration}
                onChange={(e) => setPDuration(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" },
                }}
                required
              />
              <TextField
                label="PR Interval"
                value={prInterval}
                onChange={(e) => setPrInterval(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" },
                }}
                required
              />
              <TextField
                label="QRS Duration"
                value={qrsDuration}
                onChange={(e) => setQrsDuration(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" },
                }}
                required
              />
              <TextField
                label="QT Interval"
                value={qtInterval}
                onChange={(e) => setQtInterval(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                style: { fontFamily: "Space Grotesk" },
                }}
                required
                />
                <TextField
                label="QTc Interval"
                value={qtcInterval}
                onChange={(e) => setQtcInterval(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                style: { fontFamily: "Space Grotesk" },
                }}
                required
                />
                <TextField
                label="P,QRS,T Axis"
                value={pqrsTAxis}
                onChange={(e) => setPqrsTAxis(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                style: { fontFamily: "Space Grotesk" },
                }}
                required
                />
                <TextField
                label="Blood Pressure"
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                style: { fontFamily: "Space Grotesk" },
                }}
                required
                />
                <div className="mb-1 text-center mt-3">
                <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#ff8a00" }}>
                Submit
                </Button>
                </div>
                </Box>
                </ThemeProvider>
                </form>
                </div>
                </div>
                );
                };

 export default CardiologyForm;
