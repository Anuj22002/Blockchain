import React, { useState,useEffect } from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Web3 from 'web3';
import EyeReportContract from './contracts/EyeReportContract.json';


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

const EyeReportForm = () => {
const [web3, setWeb3] = useState(null);
const [contract, setContract] = useState(null);
const [accounts, setAccounts] = useState([]);

  const outerTheme = useTheme();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [visionType, setVisionType] = useState("");
  const [eyeCondition, setEyeCondition] = useState("");
  const [lensNo, setLensNo] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  // Additional state variables
  const [powerRight, setPowerRight] = useState("");
  const [powerLeft, setPowerLeft] = useState("");
  const [axisRight, setAxisRight] = useState("");
  const [axisLeft, setAxisLeft] = useState("");
  const [cylindricalPowerRight, setCylindricalPowerRight] = useState("");
  const [cylindricalPowerLeft, setCylindricalPowerLeft] = useState("");
  const [pdRight, setPdRight] = useState("");
  const [pdLeft, setPdLeft] = useState("");
  const [sphericalPowerRight, setSphericalPowerRight] = useState("");
  const [sphericalPowerLeft, setSphericalPowerLeft] = useState("");

  useEffect(() => {
    const initWeb3 = async () => {
      const web3 = new Web3('http://127.0.0.1:7545'); // Connect to Ganache RPC
      setWeb3(web3);

      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = EyeReportContract.networks[networkId];
      const contract = new web3.eth.Contract(
        EyeReportContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContract(contract);
    };

    initWeb3();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contract) return;

    try {
      // Format parameters as arrays if needed
      const formattedEyeCondition = ["eyeCondition1", "eyeCondition2"];
      const formattedOtherDetails = ["otherDetails1", "otherDetails2"];

      // Use the contract methods to send data to the smart contract
      await contract.methods.createReport(
        name,
        age,
        gender,
        visionType,
        formattedEyeCondition,
        lensNo,
        formattedOtherDetails,
        powerRight,
        powerLeft,
        axisRight,
        axisLeft,
        cylindricalPowerRight,
        cylindricalPowerLeft,
        pdRight,
        pdLeft,
        sphericalPowerRight,
        sphericalPowerLeft
      ).send({ from: accounts[0], gas: 5000000, gasPrice: '0' });
    
  
    // Clear the form fields after submission
    setName("");
    setAge("");
    setGender("");
    setVisionType("");
    setEyeCondition("");
    setLensNo("");
    setOtherDetails("");
    // Clear additional fields
    setPowerRight("");
    setPowerLeft("");
    setAxisRight("");
    setAxisLeft("");
    setCylindricalPowerRight("");
    setCylindricalPowerLeft("");
    setPdRight("");
    setPdLeft("");
    setSphericalPowerRight("");
    setSphericalPowerLeft("");
    }
    catch (error) {
        console.error('Failed to submit eye report:', error);
      }
  };
  
    // Store the eye report data in local storage
    
    

return (
    <div className="container my-5">
      <div className="registration-container p-4">
        <h2 className="text-center mb-4 login_heading">Eye Report Form</h2>
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
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
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
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
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
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                }}
                required
              >
                <MenuItem value="">Select Gender</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
              <TextField
                label="Vision Type"
                value={visionType}
                onChange={(e) => setVisionType(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                }}
                required
              />
              <TextField
                label="Eye Condition"
                value={eyeCondition}
                onChange={(e) => setEyeCondition(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                }}
                required
              />
              <TextField
                label="Lens Number"
                value={lensNo}
                onChange={(e) => setLensNo(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                }}
                required
              />
              <TextField
                label="Other Details"
                value={otherDetails}
                onChange={(e) => setOtherDetails(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                }}
                required
              />
            </Box>
            {/* Additional inputs divided into columns */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Power - Right"
                  value={powerRight}
                  onChange={(e) => setPowerRight(e.target.value)}
                  variant="standard"
                  margin="dense"
                  InputLabelProps={{
                    style: { fontFamily: "Space Grotesk" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Power - Left"
                  value={powerLeft}
                  onChange={(e) => setPowerLeft(e.target.value)}
                  variant="standard"
                  margin="dense"
                  InputLabelProps={{
                    style: { fontFamily: "Space Grotesk" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Axis - Right"
                  value={axisRight}
                  onChange={(e) => setAxisRight(e.target.value)}
                  variant="standard"
                  margin="dense"
                  InputLabelProps={{
                    style: { fontFamily: "Space Grotesk" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Axis - Left"
                  value={axisLeft}
                  onChange={(e) => setAxisLeft(e.target.value)}
                  variant="standard"
                  margin="dense"
                  InputLabelProps={{
                    style: { fontFamily: "Space Grotesk" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Cylindrical Power - Right"
                  value={cylindricalPowerRight}
                  onChange={(e) => setCylindricalPowerRight(e.target.value)}
                  variant="standard"
                  margin="dense"
                  InputLabelProps={{
                    style: { fontFamily: "Space Grotesk" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Cylindrical Power - Left"
                  value={cylindricalPowerLeft}
                  onChange={(e) => setCylindricalPowerLeft(e.target.value)}
                  variant="standard"
                  margin="dense"
                  InputLabelProps={{
                    style: { fontFamily: "Space Grotesk" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="PD - Right"
                  value={pdRight}
                  onChange={(e) => setPdRight(e.target.value)}
                  variant="standard"
                  margin="dense"
                  InputLabelProps={{
                    style: { fontFamily: "Space Grotesk" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="PD - Left"
                  value={pdLeft}
                  onChange={(e) => setPdLeft(e.target.value)}
                  variant="standard"
                  margin="dense"
                  InputLabelProps={{
                    style: { fontFamily: "Space Grotesk" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Spherical Power - Right"
                  value={sphericalPowerRight}
                  onChange={(e) => setSphericalPowerRight(e.target.value)}
                  variant="standard"
                  margin="dense"
                  InputLabelProps={{
                    style: { fontFamily: "Space Grotesk" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Spherical Power - Left"
                  value={sphericalPowerLeft}
                  onChange={(e) => setSphericalPowerLeft(e.target.value)}
                  variant="standard"
                  margin="dense"
                  InputLabelProps={{
                    style: { fontFamily: "Space Grotesk" },
                  }}
                />
              </Grid>
            </Grid>
            <div className="mb-1 text-center mt-3">
              <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#ff8a00" }}>
                Submit
              </Button>
            </div>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
};

export default EyeReportForm;