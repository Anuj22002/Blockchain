import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box';
import Web3 from 'web3';
import BloodReportContract from './contracts/BloodReportContract.json';

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

const BloodReportForm = () => {
  const outerTheme = useTheme();

  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [haemoglobin, setHaemoglobin] = useState("");
  const [platelet, setPlatelet] = useState("");
  const [WBC, setWBC] = useState("");
  const [RBC, setRBC] = useState("");

  useEffect(() => {
    const initWeb3 = async () => {
      const web3 = new Web3('http://127.0.0.1:7545'); // Connect to Ganache RPC
      setWeb3(web3);

      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = BloodReportContract.networks[networkId];
      const contract = new web3.eth.Contract(
        BloodReportContract.abi,
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
      .createReport(
        name,
        parseInt(age),
        gender,
        bloodGroup,
        haemoglobin,
        platelet,
        WBC,
        RBC
      )
      .send({ from: accounts[0], gas: 5000000, gasPrice: '0' });

    // Clear the form fields after submission
    setName("");
    setAge("");
    setBloodGroup("");
    setGender("");
    setHaemoglobin("");
    setPlatelet("");
    setWBC("");
    setRBC("");
  };

  return (
    <div className="container my-5">
      <div className="registration-container p-4">
        <h2 className="text-center mb-4 login_heading">Blood Report Form</h2>
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
                label="Blood Group"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
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
                label="Haemoglobin"
                value={haemoglobin}
                onChange={(e) => setHaemoglobin(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                }}
                required
              />
              <TextField
                label="Platelet Count"
                value={platelet}
                onChange={(e) => setPlatelet(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                }}
                required
              />
              <TextField
                label="White Blood Cell Count"
                value={WBC}
                onChange={(e) => setWBC(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
                }}
                required
              />
              <TextField
                label="Red Blood Cell Count"
                value={RBC}
                onChange={(e) => setRBC(e.target.value)}
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  style: { fontFamily: "Space Grotesk" }, // Change font of placeholder
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

export default BloodReportForm;
