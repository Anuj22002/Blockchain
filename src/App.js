// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NewsBoard from './components/NewsDashboard';
// import RegistrationForm from './components/RegistrationForm';
// import { useEffect, useState } from 'react';
// import { auth, db } from './components/firebase';
// import Login from './components/Login';
// import PatientSearch from './components/PatientSearch';
// import Vaccination from './components/vaccination';
// import Registration_form_vaccination from './components/registration_form_vaccination';
// import PrescriptionManagementPage from './components/PrescriptionManagementPage';
// import DoctorHomePage from './components/DoctorHomePage';
// import PatientHomePage from './components/PatientHomePage';

// function App() {
//   const [userName, setUserName] = useState('');
//   const [userRole, setUserRole] = useState('');

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserName(user.displayName);
//         const userRef = db.collection('users').doc(user.uid);
//         userRef.get().then((doc) => {
//           const role = doc.data().role;
//           setUserRole(role);
//         });
//       } else {
//         setUserName('');
//         setUserRole('');
//       }
//       console.log(user);
//     });

//     return unsubscribe;
//   }, []);
//   return (
//     <>
//       <Navbar name={userName} />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/newsBoard" element={<NewsBoard />} />
//           <Route path="/registrationForm" element={<RegistrationForm />} />
//           <Route path="/DoctorHomePage" element={userRole === 'doctor' ? <DoctorHomePage /> : <div>Unauthorized</div>} />
//           <Route path="/PatientHomePage" element={userRole === 'patient' ? <PatientHomePage /> : <div>Unauthorized</div>} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/registration/:vaccinationId" element={<Registration_form_vaccination />} />
//           <Route path="/vaccination" element={<Vaccination />} />
//           <Route path="/record" element={<PatientSearch />} />
//           <Route path="/prescription" element={<PrescriptionManagementPage />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;





//.........................................

// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NewsBoard from './components/NewsDashboard';
// import RegistrationForm from './components/RegistrationForm';
// import { useEffect, useState } from 'react';
// import { auth } from './components/firebase';
// import Login from './components/Login';
// import PatientSearch from './components/PatientSearch';
// import Vaccination from './components/vaccination';
// import BloodReportForm from './components/BloodReportForm';
// // import DentalForm from './components/DentalForm';
// import EyeReportForm from './components/EyeReportForm';
// import CardiologyForm from './components/CardiologyForm';
// // import AllergiesForm from './components/AllergiesForm';
// // import PatientProfilePage from './components/PatientProfilePage';
// import Registration_form_vaccination from './components/registration_form_vaccination';
// import PrescriptionManagementPage from './components/PrescriptionManagementPage';
// import DoctorHomePage from './components/DoctorHomePage';
// import PatientHomePage from './components/PatientHomePage';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
// // import BookAppointment from './components/BookAppointment'; // Import BookAppointment component
// // import ViewAppointment from './components/ViewAppointment'; // Import ViewAppointment component

// function App() {
//   const [userName, setUserName] = useState('');
//   const [userRole, setUserRole] = useState('');

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserName(user.displayName);
//         const db = getFirestore();
//         const userRef = doc(db, 'users', user.uid);
//         getDoc(userRef).then((doc) => {
//           if (doc.exists()) {
//             const role = doc.data().role;
//             setUserRole(role);
//           } else {
//             console.log('User role not found');
//           }
//         });
//       } else {
//         setUserName('');
//         setUserRole('');
//       }
//       console.log(user);
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <BrowserRouter>
//       <Navbar userName={userName} userRole={userRole} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/newsBoard" element={<NewsBoard />} />
//         <Route path="/registrationForm" element={<RegistrationForm />} />
//         <Route path="/DoctorHomePage" element={userRole === 'doctor' ? <DoctorHomePage /> : <Home />} />
//         <Route path="/PatientHomePage" element={userRole === 'patient' ? <PatientHomePage /> : <Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/registration/:vaccinationId" element={<Registration_form_vaccination />} />
//         <Route path="/vaccination" element={<Vaccination />} />
//         <Route path="/bloodReportForm" element={<BloodReportForm />} />
//         <Route path="/eyeReportForm" element={<EyeReportForm />} />
//         <Route path="/CardiologyForm" element={<CardiologyForm />} />
//         {/* <Route path="/dentalForm" element={<DentalForm />} />
        
//         <Route path="/allergiesForm" element={<AllergiesForm />} /> */}
//         {/* <Route path="/patientProfilePage" element={<PatientProfilePage />} /> */}
//         <Route path="/record" element={<PatientSearch />} />
//         <Route path="/prescription" element={<PrescriptionManagementPage />} />
//         {/* <Route path="/book-appointment" element={<BookAppointment />} />
//         <Route path="/view-appointment" element={<ViewAppointment />} /> */}

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsBoard from './components/NewsDashboard';
import RegistrationForm from './components/RegistrationForm';
import { useEffect, useState } from 'react';
import { auth } from './components/firebase';
import Login from './components/Login';
import PatientSearch from './components/PatientSearch';
import Vaccination from './components/vaccination';
import CardiologyForm from './components/CardiologyForm';
import BloodReportForm from './components/BloodReportForm';
// import DentalForm from './components/DentalForm';
import EyeReportForm from './components/EyeReportForm';
import AllergiesForm from './components/AllergiesForm';
import PatientProfilePage from './components/PatientProfilePage';
import DoctorProfilePage from './components/DoctorProfilePage';
import Registration_form_vaccination from './components/registration_form_vaccination';
import PrescriptionManagementPage from './components/PrescriptionManagementPage';
import DoctorHomePage from './components/DoctorHomePage';
import PatientHomePage from './components/PatientHomePage';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import BookAppointment from './components/BookAppointment'; // Import BookAppointment component
import ViewAppointment from './components/ViewAppointment'; // Import ViewAppointment component

function App() {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  const handleDoctorSelect = (doctorId) => {
    setSelectedDoctorId(doctorId);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        const db = getFirestore();
        const userRef = doc(db, 'users', user.uid);
        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            const role = doc.data().role;
            setUserRole(role);
          } else {
            console.log('User role not found');
          }
        });
      } else {
        setUserName('');
        setUserRole('');
      }
      console.log(user);
    });


    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Navbar userName={userName} userRole={userRole} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsBoard" element={<NewsBoard />} />
        <Route path="/registrationForm" element={<RegistrationForm />} />
        <Route path="/DoctorHomePage" element={userRole === 'doctor' ? <DoctorHomePage /> : <Home />} />
        <Route path="/PatientHomePage" element={userRole === 'patient' ? <PatientHomePage /> : <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration/:vaccinationId" element={<Registration_form_vaccination />} />
        <Route path="/vaccination" element={<Vaccination />} />
        <Route path="/cardiologyForm" element={<CardiologyForm />} />
        <Route path="/bloodReportForm" element={<BloodReportForm />} />
        {/* <Route path="/dentalForm" element={<DentalForm />} /> */}
        <Route path="/eyeReportForm" element={<EyeReportForm />} />
        <Route path="/allergiesForm" element={<AllergiesForm />} />
        <Route path="/doctorProfilePage" element={<DoctorProfilePage />} />
        <Route path="/patientProfilePage" element={<PatientProfilePage />} />
        <Route path="/record" element={<PatientSearch />} />
        <Route path="/prescription" element={<PrescriptionManagementPage />} />
        <Route path="/book-appointment" element={<BookAppointment userRole={userRole} onDoctorSelect={handleDoctorSelect} />} />

        <Route path="/view-appointment" element={<ViewAppointment doctorId={selectedDoctorId} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;