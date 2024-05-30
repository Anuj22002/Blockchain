import React, { useMemo, useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { getFirestore, collection, query, getDocs, addDoc, doc, getDoc } from 'firebase/firestore';
import "../styles/book_appointment.css";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const BookAppointment = ({ userRole, onDoctorSelect }) => {
  const [doctorAppointments, setDoctorAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [patient, setPatient] = useState(null);

  const fetchDoctorProfiles = async () => {
    try {
      const db = getFirestore();
      const doctorProfilesQuery = query(collection(db, 'doctor_profiles'));
      const doctorProfilesSnapshot = await getDocs(doctorProfilesQuery);
      const doctorProfiles = doctorProfilesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDoctorAppointments(doctorProfiles);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctorProfiles();
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, 'profiles', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setPatient(userData);
        }
      }
    });
  }, []);


  const handleBookAppointment = async (rowData) => {
    const { id, name, specialization, phoneNumber } = rowData;
    console.log(rowData);

    try {
      const db = getFirestore();
      const appointmentsRef = collection(db, 'appointments');
      const appointmentData = {
        doctorId: id,
        doctorName: name,
        doctorSpecialization: specialization,
        doctorPhoneNumber: phoneNumber,
        patientDetails: patient, // Use an empty object if patient is null or undefined
      };
      await addDoc(appointmentsRef, appointmentData);
      alert('Appointment booked successfully!');
    } catch (error) {
      setError(error);
      alert('Error booking appointment');
    }
  };

  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        filterVariant: 'text',
      },
      {
        header: 'Doctor Name',
        accessorKey: 'name',
        filterVariant: 'text',
      },
      {
        header: 'Specialization',
        accessorKey: 'specialization',
        filterVariant: 'text',
      },
      {
        header: 'Phone Number',
        accessorKey: 'phoneNumber',
        filterVariant: 'text',
      },
      {
        header: 'Book Appointment',
        accessorKey: 'bookAppointment',
        Cell: ({ cell }) => (
          <button className='book_appointment_button' onClick={() => { 
            handleBookAppointment(cell.row.original);
            onDoctorSelect(cell.row.original.id); // Pass the selected doctor's ID to the parent component
          }}>
            Book Appointment
          </button>
        ),
      },
    ],
    []
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="mt-4 mb-3 text-center mb-5 mt-3 book_appointment_heading">
        Book Appointment
      </h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MaterialReactTable
          columns={columns}
          data={doctorAppointments}
          initialState={{ showColumnFilters: false }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default BookAppointment;