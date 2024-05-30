// import React, { useState, useEffect } from 'react';
// import '../styles/patient_search.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import { useMemo } from 'react';
// import { MaterialReactTable } from 'material-react-table';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// const PatientSearch = ({ onPatientSelect }) => {
//   const [activeTab, setActiveTab] = useState('search');
//   const [newPatientData, setNewPatientData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     height: '',
//     weight: '',
//     doctorName: '',
//     medicalReport: null,
//   });
//   const [patients, setPatients] = useState(
//     JSON.parse(localStorage.getItem('patients')) || []
//   );
//   const [originalPatients, setOriginalPatients] = useState(
//     JSON.parse(localStorage.getItem('patients')) || []
//   );

//   useEffect(() => {
//     localStorage.setItem('patients', JSON.stringify(patients));
//   }, [patients]);

//   const generateRandomId = () => {
//     return Math.floor(100000 + Math.random() * 900000);
//   };

//   const handleCreatePatient = () => {
//     const newPatientId = generateRandomId();
//     const newPatient = { ...newPatientData, id: newPatientId.toString() };
//     setPatients([...patients, newPatient]);
//     setOriginalPatients([...originalPatients, newPatient]);
//     setNewPatientData({
//       name: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       height: '',
//       weight: '',
//       doctorName: '',
//       medicalReport: null,
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       medicalReport: file,
//     }));
//   };

//   const columns = useMemo(
//     () => [
//       {
//         header: 'ID',
//         accessorKey: 'id',
//         filterVariant: 'text',
//       },
//       {
//         header: 'Name',
//         accessorKey: 'name',
//         filterVariant: 'text',
//       },
//       {
//         header: 'Age',
//         accessorKey: 'age',
//         filterVariant: 'range',
//         filterFn: 'between',
//       },
//       {
//         header: 'Gender',
//         accessorKey: 'gender',
//         filterVariant: 'select',
//         filterSelectOptions: ['male', 'female', 'other'],
//       },
//       {
//         header: 'Blood Group',
//         accessorKey: 'bloodGroup',
//         filterVariant: 'text',
//       },
//       {
//         header: 'Height',
//         accessorKey: 'height',
//         filterVariant: 'range',
//         filterFn: 'between',
//       },
//       {
//         header: 'Weight',
//         accessorKey: 'weight',
//         filterVariant: 'range',
//         filterFn: 'between',
//       },
//       {
//         header: 'Doctor Name',
//         accessorKey: 'doctorName',
//         filterVariant: 'text',
//       },
//     ],
//     []
//   );

//   const table = useMemo(() => (
//     <MaterialReactTable
//       columns={columns}
//       data={patients}
//       initialState={{ showColumnFilters: false }}
//     />
//   ), [columns, patients]);

//   return (
//     <div className="container mt-4">
//       <ul className="nav nav-tabs mb-3">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'search' ? 'active' : ''}`}
//             onClick={() => setActiveTab('search')}
//           >
//             Search Patients
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'add' ? 'active' : ''}`}
//             onClick={() => setActiveTab('add')}
//           >
//             Add Patient Record
//           </button>
//         </li>
//       </ul>
//       {activeTab === 'search' && (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           {table}
//         </LocalizationProvider>
//       )}
//       {activeTab === 'add' && (
//         <div>
//           {/* Add Patient Record form */}
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={newPatientData.name}
//               onChange={handleInputChange}
//               placeholder="Name"
//             />
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input
//                 type="number"
//                 className="form-control"
//                 name="age"
//                 value={newPatientData.age}
//                 onChange={handleInputChange}
//                 placeholder="Age"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <select
//                 className="form-select"
//                 name="gender"
//                 value={newPatientData.gender}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="bloodGroup"
//                 value={newPatientData.bloodGroup}
//                 onChange={handleInputChange}
//                 placeholder="Blood Group"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="height"
//                 value={newPatientData.height}
//                 onChange={handleInputChange}
//                 placeholder="Height"
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="weight"
//                 value={newPatientData.weight}
//                 onChange={handleInputChange}
//                 placeholder="Weight"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="doctorName"
//                 value={newPatientData.doctorName}
//                 onChange={handleInputChange}
//                 placeholder="Doctor Name"
//               />
//             </div>
//           </div>
//           <div className="mb-3">
//             <input
//               type="file"
//               className="form-control"
//               name="medicalReport"
//               onChange={handleFileInputChange}
//             />
//           </div>
//           <button className="create_patient_button" onClick={handleCreatePatient}>
//             Create Patient
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;


//............................Blockchain one:
// Import necessary modules
// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import PatientRecordContract from './contracts/PatientRecord.json'; // Assuming you've imported the contract ABI
// import '../styles/patient_search.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import { useMemo } from 'react';
// import { MaterialReactTable } from 'material-react-table';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// const PatientSearch = () => {
//   const [activeTab, setActiveTab] = useState('search');
//   const [web3, setWeb3] = useState(null);
//   const [contract, setContract] = useState(null);
//   const [accounts, setAccounts] = useState([]);
//   const [patients, setPatients] = useState([]);
//   const [newPatientData, setNewPatientData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     height: '',
//     weight: '',
//     doctorName: '',
//     medicalReport: '',
//   });

//      const [originalPatients, setOriginalPatients] = useState(
//      JSON.parse(localStorage.getItem('patients')) || []
//    );

//      const generateRandomId = () => {
//      return Math.floor(100000 + Math.random() * 900000);
//    };
   
//   const handleCreatePatient = () => {
//     const newPatientId = generateRandomId();
//     const newPatient = { ...newPatientData, id: newPatientId.toString() };
//     setPatients([...patients, newPatient]);
//     setOriginalPatients([...originalPatients, newPatient]);
//     setNewPatientData({
//       name: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       height: '',
//       weight: '',
//       doctorName: '',
//       medicalReport: null,
//     });
//   };


//   const columns = useMemo(
//     () => [
//       {
//         header: 'ID',
//         accessorKey: 'id',
//         filterVariant: 'text',
//       },
//       {
//         header: 'Name',
//         accessorKey: 'name',
//         filterVariant: 'text',
//       },
//       {
//         header: 'Age',
//         accessorKey: 'age',
//         filterVariant: 'range',
//         filterFn: 'between',
//       },
//       {
//         header: 'Gender',
//         accessorKey: 'gender',
//         filterVariant: 'select',
//         filterSelectOptions: ['male', 'female', 'other'],
//       },
//       {
//         header: 'Blood Group',
//         accessorKey: 'bloodGroup',
//         filterVariant: 'text',
//       },
//       {
//         header: 'Height',
//         accessorKey: 'height',
//         filterVariant: 'range',
//         filterFn: 'between',
//       },
//       {
//         header: 'Weight',
//         accessorKey: 'weight',
//         filterVariant: 'range',
//         filterFn: 'between',
//       },
//       {
//         header: 'Doctor Name',
//         accessorKey: 'doctorName',
//         filterVariant: 'text',
//       },
//     ],
//     []
//   );

//     const table = useMemo(() => (
//     <MaterialReactTable
//       columns={columns}
//       data={patients}
//       initialState={{ showColumnFilters: false }}
//     />
//   ), [columns, patients]);

//   useEffect(() => {
//     const initWeb3 = async () => {
//       const web3 = new Web3('http://127.0.0.1:7545'); // Connect to Ganache RPC
//       setWeb3(web3);

//       const accounts = await web3.eth.getAccounts();
//       setAccounts(accounts);

//       const networkId = await web3.eth.net.getId();
//       const deployedNetwork = PatientRecordContract.networks[networkId];
//       const contract = new web3.eth.Contract(
//         PatientRecordContract.abi,
//         deployedNetwork && deployedNetwork.address
//       );
//       setContract(contract);
//     };

//     initWeb3();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPatientData({ ...newPatientData, [name]: value });
//   };

//   const addPatient = async () => {
//     // Check if any values are null and set them to empty strings
//     const name = newPatientData.name || '';
//     const age = newPatientData.age || '';
//     const gender = newPatientData.gender || '';
//     const bloodGroup = newPatientData.bloodGroup || '';
//     const height = newPatientData.height || '';
//     const weight = newPatientData.weight || '';
//     const doctorName = newPatientData.doctorName || '';
//     const medicalReport = newPatientData.medicalReport || '';

//     // Perform the contract method call with the sanitized values
//     await contract.methods.addPatient(
//         name,
//         age,
//         gender,
//         bloodGroup,
//         height,
//         weight,
//         doctorName,
//         medicalReport
//     ).send({ from: accounts[0] });

//     // Clear the form data after submission
//     setNewPatientData({
//         name: '',
//         age: '',
//         gender: '',
//         bloodGroup: '',
//         height: '',
//         weight: '',
//         doctorName: '',
//         medicalReport: '',
//     });
// };


//   return (
//        <div className="container mt-4">
//       <ul className="nav nav-tabs mb-3">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'search' ? 'active' : ''}`}
//             onClick={() => setActiveTab('search')}
//           >
//             Search Patients
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'add' ? 'active' : ''}`}
//             onClick={() => setActiveTab('add')}
//           >
//             Add Patient Record
//           </button>
//         </li>
//       </ul>
//       {activeTab === 'search' && (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           {table}
//         </LocalizationProvider>
//       )}
//       {activeTab === 'add' && (
//         <div>
//           {/* Add Patient Record form */}
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={newPatientData.name}
//               onChange={handleInputChange}
//               placeholder="Name"
//             />
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input
//                 type="number"
//                 className="form-control"
//                 name="age"
//                 value={newPatientData.age}
//                 onChange={handleInputChange}
//                 placeholder="Age"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <select
//                 className="form-select"
//                 name="gender"
//                 value={newPatientData.gender}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="bloodGroup"
//                 value={newPatientData.bloodGroup}
//                 onChange={handleInputChange}
//                 placeholder="Blood Group"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="height"
//                 value={newPatientData.height}
//                 onChange={handleInputChange}
//                 placeholder="Height"
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="weight"
//                 value={newPatientData.weight}
//                 onChange={handleInputChange}
//                 placeholder="Weight"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="doctorName"
//                 value={newPatientData.doctorName}
//                 onChange={handleInputChange}
//                 placeholder="Doctor Name"
//               />
//             </div>
//           </div>
//           <div className="mb-3">
//             {/* <input
//               type="file"
//               className="form-control"
//               name="medicalReport"
//               onChange={handleFileInputChange}
//             /> */}
//           </div>
//           <button className="create_patient_button" onClick={addPatient}>
//             Create Patient
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;


import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import PatientRecordContract from './contracts/PatientRecordContract.json'; // Assuming you've imported the contract ABI
import '../styles/patient_search.css';
 import '@fortawesome/fontawesome-free/css/all.css';
 import { useMemo } from 'react';
 import { MaterialReactTable } from 'material-react-table';
 import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


const PatientSearch = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [patients, setPatients] = useState([]);
  const [newPatientData, setNewPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodGroup: '',
    height: '',
    weight: '',
    doctorName: '',
    medicalReport: '',
  });
    const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        filterVariant: 'text',
      },
      {
        header: 'Name',
        accessorKey: 'name',
        filterVariant: 'text',
      },
      {
        header: 'Age',
        accessorKey: 'age',
        filterVariant: 'range',
        filterFn: 'between',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
        filterVariant: 'select',
        filterSelectOptions: ['male', 'female', 'other'],
      },
      {
        header: 'Blood Group',
        accessorKey: 'bloodGroup',
        filterVariant: 'text',
      },
      {
        header: 'Height',
        accessorKey: 'height',
        filterVariant: 'range',
        filterFn: 'between',
      },
      {
        header: 'Weight',
        accessorKey: 'weight',
        filterVariant: 'range',
        filterFn: 'between',
      },
      {
        header: 'Doctor Name',
        accessorKey: 'doctorName',
        filterVariant: 'text',
      },
    ],
    []
  );



      const table = useMemo(() => (
    <MaterialReactTable
      columns={columns}
      data={patients}
      initialState={{ showColumnFilters: false }}
    />
  ),[columns, patients]);

  const [contractAddress, setContractAddress] = useState(null);

useEffect(() => {
  const initWeb3 = async () => {
    const web3 = new Web3('http://127.0.0.1:7545'); // Connect to Ganache RPC
    setWeb3(web3);

    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts);

    const networkId = await web3.eth.net.getId();
    const deployedNetwork = PatientRecordContract.networks[networkId];
    const contract = new web3.eth.Contract(
      PatientRecordContract.abi,
      deployedNetwork && deployedNetwork.address
    );
    setContract(contract);
    setContractAddress(deployedNetwork && deployedNetwork.address);
  };

  initWeb3();
}, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatientData({ ...newPatientData, [name]: value });
  };

  const addPatient = async () => {
    if (!contract) return;

    const newPatientId = generateRandomId();
    const newPatient = { ...newPatientData, id: newPatientId.toString() };
    setPatients([...patients, newPatient]);

    await contract.methods
      .addPatient(
        newPatient.name,
        newPatient.age,
        newPatient.gender,
        newPatient.bloodGroup,
        newPatient.height,
        newPatient.weight,
        newPatient.doctorName,
        newPatient.medicalReport
      )
      .send({ from: accounts[0], gas: 5000000, gasPrice: '0' });

    setNewPatientData({
      name: '',
      age: '',
      gender: '',
      bloodGroup: '',
      height: '',
      weight: '',
      doctorName: '',
      medicalReport: '',
    });
  };

  const generateRandomId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            Search Patients
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'add' ? 'active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            Add Patient Record
          </button>
        </li>
      </ul>
      {activeTab === 'search' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {table}
        </LocalizationProvider>
      )}
      {activeTab === 'add' && (
        <div>
          {/* Add Patient Record form */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              value={newPatientData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="number"
                className="form-control"
                name="age"
                value={newPatientData.age}
                onChange={handleInputChange}
                placeholder="Age"
              />
            </div>
            <div className="col-md-6 mb-3">
              <select
                className="form-select"
                name="gender"
                value={newPatientData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="bloodGroup"
                value={newPatientData.bloodGroup}
                onChange={handleInputChange}
                placeholder="Blood Group"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="height"
                value={newPatientData.height}
                onChange={handleInputChange}
                placeholder="Height"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="weight"
                value={newPatientData.weight}
                onChange={handleInputChange}
                placeholder="Weight"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="doctorName"
                value={newPatientData.doctorName}
                onChange={handleInputChange}
                placeholder="Doctor Name"
              />
            </div>
          </div>
          <div className="mb-3">
            {/* <input
              type="file"
              className="form-control"
              name="medicalReport"
              onChange={handleFileInputChange}
            /> */}
          </div>
          <button className="create_patient_button" onClick={addPatient}>
            Create Patient
          </button>
        </div>
      )}
    </div>
  );
};

export default PatientSearch;


//...................................................filter with dropdown.................


// import React, { useState, useEffect } from 'react';
// import '../styles/patient_search.css';
// import '@fortawesome/fontawesome-free/css/all.css';

// const PatientSearch = ({ onPatientSelect }) => {
//   const [activeTab, setActiveTab] = useState('search');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
//   const [originalPatients, setOriginalPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
//   const [newPatientData, setNewPatientData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     height: '',
//     weight: '',
//     doctorName: '',
//     medicalReport: null
//   });

//   // State for filter
//   const [filterColumn, setFilterColumn] = useState('');
//   const [filterOption, setFilterOption] = useState('');
//   const [filterValue, setFilterValue] = useState('');

//   useEffect(() => {
//     // Update local storage when patients state changes
//     localStorage.setItem('patients', JSON.stringify(patients));
//   }, [patients]);

//   const searchPatients = () => {
//     if (searchTerm.trim() === '') {
//       setPatients(originalPatients);
//     } else {
//       const filteredPatients = originalPatients.filter(patient =>
//         patient.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setPatients(filteredPatients);
//     }
//   };

//   const generateRandomId = () => {
//     // Generate a random 6-digit ID
//     return Math.floor(100000 + Math.random() * 900000);
//   };

//   const handleCreatePatient = () => {
//     // Add new patient data to local storage with a random ID
//     const newPatientId = generateRandomId();
//     const newPatient = { ...newPatientData, id: newPatientId.toString() };
//     setPatients([...patients, newPatient]);
//     setOriginalPatients([...originalPatients, newPatient]);
//     setNewPatientData({
//       name: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       height: '',
//       weight: '',
//       doctorName: '',
//       medicalReport: null
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       medicalReport: file
//     }));
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'filterColumn') {
//       setFilterColumn(value);
//       setFilterOption('');
//       setFilterValue('');
//     } else if (name === 'filterOption') {
//       setFilterOption(value);
//     } else if (name === 'filterValue') {
//       setFilterValue(value);
//     }
//   };

//   const handleFilter = () => {
//     if (filterColumn && filterOption && filterValue) {
//       const filteredPatients = originalPatients.filter(patient => {
//         const value = patient[filterColumn].toString().toLowerCase();
//         const filterValueLower = filterValue.toLowerCase();

//         switch (filterOption) {
//           case 'starts':
//             return value.startsWith(filterValueLower);
//           case 'ends':
//             return value.endsWith(filterValueLower);
//           case 'contains':
//             return value.includes(filterValueLower);
//           default:
//             return true;
//         }
//       });
//       setPatients(filteredPatients);
//     } else {
//       setPatients(originalPatients);
//     }
//   };

//   const handleClearFilter = () => {
//     setFilterColumn('');
//     setFilterOption('');
//     setFilterValue('');
//     setPatients(originalPatients);
//   };

//   return (
//     <div className="container mt-4">
//       <ul className="nav nav-tabs mb-3">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'search' ? 'active' : ''}`}
//             onClick={() => setActiveTab('search')}
//           >
//             Search Patients
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'add' ? 'active' : ''}`}
//             onClick={() => setActiveTab('add')}
//           >
//             Add Patient Record
//           </button>
//         </li>
//       </ul>
//       {activeTab === 'search' && (
//         <div>
//           <div className="row">
//             <div className="col-md-8">
//               <input type="text" className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search patients" />
//             </div>
//             <div className="col-md-4">
//               <button className="btn btn-primary w-100" onClick={searchPatients}>Search</button>
//             </div>
//           </div>
//           <div className="row mt-3">
//             <div className="col-md-3">
//               <select className="form-select" name="filterColumn" value={filterColumn} onChange={handleFilterChange}>
//                 <option value="">Select Column</option>
//                 <option value="name">Name</option>
//                 <option value="age">Age</option>
//                 <option value="gender">Gender</option>
//                 <option value="bloodGroup">Blood Group</option>
//                 <option value="height">Height</option>
//                 <option value="weight">Weight</option>
//                 <option value="doctorName">Doctor Name</option>
//               </select>
//             </div>
//             <div className="col-md-3">
//               <select className="form-select" name="filterOption" value={filterOption} onChange={handleFilterChange}>
//                 <option value="">Select Option</option>
//                 <option value="starts">Starts With</option>
//                 <option value="ends">Ends With</option>
//                 <option value="contains">Contains</option>
//               </select>
//             </div>
//             <div className="col-md-4">
//               <input type="text" className="form-control" name="filterValue" value={filterValue} onChange={handleFilterChange} placeholder="Enter value" />
//             </div>
//             <div className="col-md-2">
//               <button className="btn btn-primary" onClick={handleFilter}>Filter</button>
//               <button className="btn btn-secondary ms-2" onClick={handleClearFilter}>Clear</button>
//             </div>
//           </div>
//           <div className="container mt-4" style={{ overflowX: 'auto' }}>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>
//                     Customer Name
//                     <i className="fa-solid fa-filter filter-icon" onClick={() => handleFilterChange({ target: { name: 'filterColumn', value: 'name' } })}></i>
//                   </th>
//                   <th>
//                     Age
//                     <i className="fa-solid fa-filter filter-icon" onClick={() => handleFilterChange({ target: { name: 'filterColumn', value: 'age' } })}></i>
//                   </th>
//                   <th>
//                     Gender
//                     <i className="fa-solid fa-filter filter-icon" onClick={() => handleFilterChange({ target: { name: 'filterColumn', value: 'gender' } })}></i>
//                   </th>
//                   <th>
//                     Blood Group
//                     <i className="fa-solid fa-filter filter-icon" onClick={() => handleFilterChange({ target: { name: 'filterColumn', value: 'bloodGroup' } })}></i>
//                   </th>
//                   <th>
//                     Height
//                     <i className="fa-solid fa-filter filter-icon" onClick={() => handleFilterChange({ target: { name: 'filterColumn', value: 'height' } })}></i>
//                   </th>
//                   <th>
//                     Weight
//                     <i className="fa-solid fa-filter filter-icon" onClick={() => handleFilterChange({ target: { name: 'filterColumn', value: 'weight' } })}></i>
//                   </th>
//                   <th>
//                     Doctor Name
//                     <i className="fa-solid fa-filter filter-icon" onClick={() => handleFilterChange({ target: { name: 'filterColumn', value: 'doctorName' } })}></i>
//                   </th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {patients.map((patient) => (
//                   <tr key={patient.id}>
//                     <td>{patient.id}</td>
//                     <td>{patient.name}</td>
//                     <td>{patient.age}</td>
//                     <td>{patient.gender}</td>
//                     <td>{patient.bloodGroup}</td>
//                     <td>{patient.height}</td>
//                     <td>{patient.weight}</td>
//                     <td>{patient.doctorName}</td>
//                     <td>
//                       <button className="btn btn-primary" onClick={() => onPatientSelect(patient)}>
//                         View Details
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//       {activeTab === 'add' && (
//         <div>
//           {/* Add Patient Record form */}
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={newPatientData.name}
//               onChange={handleInputChange}
//               placeholder="Name"
//             />
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input
//                 type="number"
//                 className="form-control"
//                 name="age"
//                 value={newPatientData.age}
//                 onChange={handleInputChange}
//                 placeholder="Age"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <select
//                 className="form-select"
//                 name="gender"
//                 value={newPatientData.gender}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="bloodGroup"
//                 value={newPatientData.bloodGroup}
//                 onChange={handleInputChange}
//                 placeholder="Blood Group"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="height"
//                 value={newPatientData.height}
//                 onChange={handleInputChange}
//                 placeholder="Height"
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="weight"
//                 value={newPatientData.weight}
//                 onChange={handleInputChange}
//                 placeholder="Weight"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="doctorName"
//                 value={newPatientData.doctorName}
//                 onChange={handleInputChange}
//                 placeholder="Doctor Name"
//               />
//             </div>
//           </div>
//           <div className="mb-3">
//             <input
//               type="file"
//               className="form-control"
//               name="medicalReport"
//               onChange={handleFileInputChange}
//             />
//           </div>
//           <button className="btn btn-success" onClick={handleCreatePatient}>
//             Create Patient
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;



//....................................................table form with view button .............



// import React, { useState, useEffect } from 'react';
// import '../styles/patient_search.css';

// const PatientSearch = ({ onPatientSelect }) => {
//   const [activeTab, setActiveTab] = useState('search');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
//   const [originalPatients, setOriginalPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
//   const [newPatientData, setNewPatientData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     height: '',
//     weight: '',
//     doctorName: '',
//     medicalReport: null
//   });
//   const [selectedPatientId, setSelectedPatientId] = useState(null);
//   const [expandedPatientId, setExpandedPatientId] = useState(null);

//   useEffect(() => {
//     // Update local storage when patients state changes
//     localStorage.setItem('patients', JSON.stringify(patients));
//   }, [patients]);

//   const searchPatients = () => {
//     if (searchTerm.trim() === '') {
//       setPatients(originalPatients);
//     } else {
//       const filteredPatients = originalPatients.filter(patient =>
//         patient.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setPatients(filteredPatients);
//     }
//   };

//   const handleSelectPatient = (patientId) => {
//     // Handle patient selection
//     setSelectedPatientId(patientId);
//     setExpandedPatientId((prevId) => (prevId === patientId ? null : patientId));
//     const selectedPatient = patients.find((patient) => patient.id === patientId);
//     if (selectedPatient) {
//       onPatientSelect(selectedPatient);
//     }
//   };

//   const generateRandomId = () => {
//     // Generate a random 6-digit ID
//     return Math.floor(100000 + Math.random() * 900000);
//   };

//   const handleCreatePatient = () => {
//     // Add new patient data to local storage with a random ID
//     const newPatientId = generateRandomId();
//     const newPatient = { ...newPatientData, id: newPatientId.toString() };
//     setPatients([...patients, newPatient]);
//     setOriginalPatients([...originalPatients, newPatient]);
//     setNewPatientData({
//       name: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       height: '',
//       weight: '',
//       doctorName: '',
//       medicalReport: null
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       medicalReport: file
//     }));
//   };

//   return (
//     <div className="container mt-4">
//       <ul className="nav nav-tabs mb-3">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'search' ? 'active' : ''}`}
//             onClick={() => setActiveTab('search')}
//           >
//             Search Patients
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'add' ? 'active' : ''}`}
//             onClick={() => setActiveTab('add')}
//           >
//             Add Patient Record
//           </button>
//         </li>
//       </ul>
//       {activeTab === 'search' && (
//         <div>
//           <div className="row">
//             <div className="col-md-8">
//               <input type="text" className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search patients" />
//             </div>
//             <div className="col-md-4">
//               <button className="btn btn-primary w-100" onClick={searchPatients}>Search</button>
//             </div>
//           </div>
//           <div className="container mt-4" style={{ overflowX: 'auto' }}>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Customer Name</th>
//                   <th>Age</th>
//                   <th>Gender</th>
//                   {expandedPatientId && (
//                     <>
//                       <th>Blood Group</th>
//                       <th>Height</th>
//                       <th>Weight</th>
//                       <th>Doctor Name</th>
//                     </>
//                   )}
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {patients.map((patient) => (
//                   <React.Fragment key={patient.id}>
//                     <tr>
//                       <td>{patient.id}</td>
//                       <td>{patient.name}</td>
//                       <td>{patient.age}</td>
//                       <td>{patient.gender}</td>
//                       {expandedPatientId === patient.id && (
//                         <>
//                           <td>{patient.bloodGroup}</td>
//                           <td>{patient.height}</td>
//                           <td>{patient.weight}</td>
//                           <td>{patient.doctorName}</td>
//                         </>
//                       )}
//                       <td>
//                         <button className="btn btn-primary" onClick={() => handleSelectPatient(patient.id)}>
//                           {expandedPatientId === patient.id ? 'View Less' : 'View Details'}
//                         </button>
//                       </td>
//                     </tr>
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//       {activeTab === 'add' && (
//         <div>
//           <div className="mb-3">
//             <input type="text" className="form-control" name="name" value={newPatientData.name} onChange={handleInputChange} placeholder="Name" />
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="number" className="form-control" name="age" value={newPatientData.age} onChange={handleInputChange} placeholder="Age" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <select className="form-select" name="gender" value={newPatientData.gender} onChange={handleInputChange}>
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="bloodGroup" value={newPatientData.bloodGroup} onChange={handleInputChange} placeholder="Blood Group" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="height" value={newPatientData.height} onChange={handleInputChange} placeholder="Height" />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="weight" value={newPatientData.weight} onChange={handleInputChange} placeholder="Weight" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="doctorName" value={newPatientData.doctorName} onChange={handleInputChange} placeholder="Doctor Name" />
//             </div>
//           </div>
//           <div className="mb-3">
//             <input type="file" className="form-control" name="medicalReport" onChange={handleFileInputChange} />
//           </div>
//           <button className="btn btn-success" onClick={handleCreatePatient}>Create Patient</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;










// import React, { useState, useEffect } from 'react';
// import '../styles/patient_search.css';

// const PatientSearch = ({ onPatientSelect }) => {
//   const [activeTab, setActiveTab] = useState('search');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
//   const [originalPatients, setOriginalPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
//   const [newPatientData, setNewPatientData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     height: '',
//     weight: '',
//     doctorName: '',
//     medicalReport: null
//   });
//   const [selectedPatientId, setSelectedPatientId] = useState(null);
//   const [expandedPatientId, setExpandedPatientId] = useState(null);

//   useEffect(() => {
//     // Update local storage when patients state changes
//     localStorage.setItem('patients', JSON.stringify(patients));
//   }, [patients]);

//   const searchPatients = () => {
//     if (searchTerm.trim() === '') {
//       setPatients(originalPatients);
//     } else {
//       const filteredPatients = originalPatients.filter(patient =>
//         patient.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setPatients(filteredPatients);
//     }
//   };

//   const handleSelectPatient = (patientId) => {
//     // Handle patient selection
//     setSelectedPatientId(patientId);
//     setExpandedPatientId((prevId) => (prevId === patientId ? null : patientId));
//     const selectedPatient = patients.find((patient) => patient.id === patientId);
//     if (selectedPatient) {
//       onPatientSelect(selectedPatient);
//     }
//   };

//   const generateRandomId = () => {
//     // Generate a random 6-digit ID
//     return Math.floor(100000 + Math.random() * 900000);
//   };

//   const handleCreatePatient = () => {
//     // Add new patient data to local storage with a random ID
//     const newPatientId = generateRandomId();
//     const newPatient = { ...newPatientData, id: newPatientId.toString() };
//     setPatients([...patients, newPatient]);
//     setOriginalPatients([...originalPatients, newPatient]);
//     setNewPatientData({
//       name: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       height: '',
//       weight: '',
//       doctorName: '',
//       medicalReport: null
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       medicalReport: file
//     }));
//   };

//   return (
//     <div className="container mt-4">
//       <ul className="nav nav-tabs mb-3">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'search' ? 'active' : ''}`}
//             onClick={() => setActiveTab('search')}
//           >
//             Search Patients
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'add' ? 'active' : ''}`}
//             onClick={() => setActiveTab('add')}
//           >
//             Add Patient Record
//           </button>
//         </li>
//       </ul>
//       {activeTab === 'search' && (
//         <div>
//           <div className="row">
//             <div className="col-md-8">
//               <input type="text" className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search patients" />
//             </div>
//             <div className="col-md-4">
//               <button className="btn btn-primary w-100" onClick={searchPatients}>Search</button>
//             </div>
//           </div>
//           <div className="row mt-3">
//             {patients.map((patient) => (
//               <div key={patient.id} className="col-md-4 mb-3">
//                 <div className={`card patient_data_card ${expandedPatientId === patient.id ? 'view_less' : ''}`}>
//                   <div className="card-body">
//                     <h3 className="patient_card-title">{patient.name}</h3>
//                     <p className="card-text"><b>ID:</b> {patient.id}</p>
//                     <p className="card-text"><b>Age:</b> {patient.age}</p>
//                     <p className="card-text"><b>Gender:</b> {patient.gender}</p>
//                     {expandedPatientId === patient.id && (
//                       <>
//                         <p className="card-text"><b>Blood Group:</b> {patient.bloodGroup}</p>
//                         <p className="card-text"><b>Height:</b> {patient.height}</p>
//                         <p className="card-text"><b>Weight:</b> {patient.weight}</p>
//                         <p className="card-text"><b>Doctor Name:</b> {patient.doctorName}</p>
//                         {/* Add more fields here */}
//                       </>
//                     )}
//                     <button className="btn btn-primary view_details" onClick={() => handleSelectPatient(patient.id)}>
//                       {expandedPatientId === patient.id ? 'View Less' : 'View Details'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {activeTab === 'add' && (
//         <div>
//           <div className="mb-3">
//             <input type="text" className="form-control" name="name" value={newPatientData.name} onChange={handleInputChange} placeholder="Name" />
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="number" className="form-control" name="age" value={newPatientData.age} onChange={handleInputChange} placeholder="Age" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <select className="form-select" name="gender" value={newPatientData.gender} onChange={handleInputChange}>
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="bloodGroup" value={newPatientData.bloodGroup} onChange={handleInputChange} placeholder="Blood Group" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="height" value={newPatientData.height} onChange={handleInputChange} placeholder="Height" />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="weight" value={newPatientData.weight} onChange={handleInputChange} placeholder="Weight" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="doctorName" value={newPatientData.doctorName} onChange={handleInputChange} placeholder="Doctor Name" />
//             </div>
//           </div>
//           <div className="mb-3">
//             <input type="file" className="form-control" name="medicalReport" onChange={handleFileInputChange} />
//           </div>
//           <button className="btn btn-success" onClick={handleCreatePatient}>Create Patient</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;