import '../styles/vaccination.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import RegistrationForm from './registration_form_vaccination'; 

const Vaccination = () => {
  const [selectedVaccination, setSelectedVaccination] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '60px',
      durationIn: 2500,
      delay: 400,
    });

    ScrollReveal().reveal('.active_vaccinations_heading', { delay: 600, origin: 'top' });
    ScrollReveal().reveal('.vacination-card', { delay: 600, origin: 'bottom' });

  }, []);


  const vaccinations = [
    {
      id: 1,
      name: 'BCG',
      manufacturer: 'Various',
      doses: 'One dose at birth',
      availability: 'Available',
      link: 'https://www.apolloclinic.com/for-patients/services/vaccinations/children/bcg' // Add the link for BCG vaccination
    },
    {
      id: 2,
      name: 'Hepatitis B',
      manufacturer: 'Various',
      doses: '3 doses (0, 1, and 6 months)',
      availability: 'Available',
      link:'https://www.apolloclinic.com/for-patients/services/vaccinations/adult/hepatitis-b'
    },
    {
      id: 3,
      name: 'IPV (Inactivated Poliovirus Vaccine)',
      manufacturer: 'Various',
      doses: '4 doses (2, 4, 6-18 months, and 4-6 years)',
      availability: 'Available',
      link:'https://www.apolloclinic.com/for-patients/services/vaccinations/children/oral-polio-vaccine'
    },
    {
      id: 4,
      name: 'Influenza (Flu)',
      manufacturer: 'Various',
      doses: 'Yearly',
      availability: 'Available',
      link:'https://www.apolloclinic.com/for-patients/services/vaccinations/children/influenza'
    },
    {
      id: 5,
      name: 'Typhoid Conjugate',
      manufacturer: 'Various',
      doses: '1 dose (2 years or older)',
      availability: 'Available',
      link:'https://www.apolloclinic.com/for-patients/services/vaccinations/children/typhoid'
    },
    {
      id: 6,
      name: 'Hepatitis A',
      manufacturer: 'Various',
      doses: '2 doses (6-18 months apart)',
      availability: 'Available',
      link: 'https://www.portea.com/vaccination/hepatitis-a/'
    },
    {
      id: 7,
      name: 'HPV (Human Papillomavirus)',
      manufacturer: 'Various',
      doses: '2 or 3 doses (recommended for girls)',
      availability: 'Available',
      link: 'https://www.apolloclinic.com/for-patients/services/vaccinations/adult/cervical-cancer-prevention-female'
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center my-4 active_vaccinations_heading">Active Vaccinations</h2>
      <div className="row">
        {vaccinations.map(vaccination => (
          <div key={vaccination.id} className="col-md-4 mb-4">
            {/* Pass the vaccination ID to the URL */}
            {vaccination.id === 1 || vaccination.id === 2 || vaccination.id===3 || vaccination.id===4 || vaccination.id===5 || vaccination.id===6||vaccination.id===7? (
              <a href={vaccination.link} target="_blank" className="vaccination-card">
                <div className="vaccination-card-body card-margin square-card shadow text-center mb-4 bg-white rounded">
                  <h5 className="vaccination-card-title">{vaccination.name}</h5>
                  <p className="vaccination-card-text m-0">Manufacturer: {vaccination.manufacturer}</p>
                  <p className="vaccination-card-text m-0">Doses required: {vaccination.doses}</p>
                  <p className="vaccination-card-text m-0">Availability: {vaccination.availability}</p>
                </div>
              </a>
            ) : (
              <Link to={`/registration/${vaccination.id}`} className="vaccination-card">
                <div className="vaccination-card-body card-margin square-card shadow text-center mb-4 bg-white rounded">
                  <h5 className="vaccination-card-title">{vaccination.name}</h5>
                  <p className="vaccination-card-text m-0">Manufacturer: {vaccination.manufacturer}</p>
                  <p className="vaccination-card-text m-0">Doses required: {vaccination.doses}</p>
                  <p className="vaccination-card-text m-0">Availability: {vaccination.availability}</p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
      {/* Render the registration form if a vaccination is selected */}
      {selectedVaccination && <RegistrationForm vaccination={selectedVaccination} />}
    </div>
  );
};

export default Vaccination;