import React, { useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { getFirestore, collection, query, getDocs, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import "../styles/view_appointment.css";


const ViewAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAppointments = async () => {
    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (currentUser) {
        const db = getFirestore();
        const appointmentsQuery = query(
          collection(db, 'appointments'),
          where('doctorId', '==', currentUser.uid)
        );
        const appointmentsSnapshot = await getDocs(appointmentsQuery);
        const appointmentsData = appointmentsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(appointmentsData);
        setLoading(false);
      } else {
        setError('User not authenticated');
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const columns = [
    { header: 'Patient Name', accessorKey: 'patientDetails.name' },
    { header: 'Patient Age', accessorKey: 'patientDetails.age' },
    { header: 'Patient Gender', accessorKey: 'patientDetails.gender' },
    { header: 'Patient Address', accessorKey: 'patientDetails.address' },
    { header: 'Patient City', accessorKey: 'patientDetails.city' },
    { header: 'Patient State', accessorKey: 'patientDetails.state' },
    { header: 'Patient Country', accessorKey: 'patientDetails.country' },
    { header: 'Patient Phone', accessorKey: 'patientDetails.phoneNumber' },
    { header: 'Doctor Name', accessorKey: 'doctorName' },
    { header: 'Doctor Specialization', accessorKey: 'doctorSpecialization' },
    { header: 'Doctor Phone', accessorKey: 'doctorPhoneNumber' },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="mt-4 mb-3 text-center mb-5 mt-3 view_appointment_heading">
        View Appointments
      </h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MaterialReactTable columns={columns} data={appointments} />
      </LocalizationProvider>
    </div>
  );
};

export default ViewAppointment;