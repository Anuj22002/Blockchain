// import React, { useState } from 'react';
// import { FaPrescriptionBottleAlt, FaTruckMoving, FaCommentDots } from 'react-icons/fa';
// import "../styles/PrescriptionManagementPage.css"

// const PrescriptionManagementPage = () => {
//   const [activeTab, setActiveTab] = useState('prescription');

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'prescription':
//         return (
//           <div>
//             <h2 >Prescription Management</h2>
//             <div>
//               <h3>Current Prescriptions</h3>
//               <ul>
//                 <li>Medication 1 (Dosage)</li>
//                 <li>Medication 2 (Dosage)</li>
//                 {/* Add more prescriptions here */}
//               </ul>
//             </div>
//             <div>
//               <h3>Request a New Prescription</h3>
//               {/* Add a form or other UI for requesting a new prescription */}
//               <form>
//                 <div>
//                   <label htmlFor="medication">Medication:</label>
//                   <input type="text" id="medication" name="medication" />
//                 </div>
//                 <div>
//                   <label htmlFor="dosage">Dosage:</label>
//                   <input type="text" id="dosage" name="dosage" />
//                 </div>
//                 <div>
//                   <label htmlFor="instructions">Instructions:</label>
//                   <textarea id="instructions" name="instructions"></textarea>
//                 </div>
//                 <button type="submit">Request Prescription</button>
//               </form>
//             </div>
//           </div>
//         );
//       case 'delivery':
//         return (
//           <div>
//             <h2>Delivery Tracking</h2>
//             <div>
//               <h3>Current Deliveries</h3>
//               <ul>
//                 <li>
//                   <h4>Medication 1</h4>
//                   <p>Estimated Delivery Date: [Date]</p>
//                   <p>Status: [Status]</p>
//                 </li>
//                 <li>
//                   <h4>Medication 2</h4>
//                   <p>Estimated Delivery Date: [Date]</p>
//                   <p>Status: [Status]</p>
//                 </li>
//                 {/* Add more deliveries here */}
//               </ul>
//             </div>
//             <div>
//               <h3>Track a Delivery</h3>
//               {/* Add a form or other UI for tracking a delivery */}
//               <form>
//                 <div>
//                   <label htmlFor="deliveryId">Delivery ID:</label>
//                   <input type="text" id="deliveryId" name="deliveryId"
//                    />
//                 </div>
//                 <button type="submit">Track Delivery</button>
//               </form>
//             </div>
//           </div>
//         );
//       case 'communication':
//         return (
//           <div>
//             <h2>Patient Communication</h2>
//             <div>
//               <h3>Recent Messages</h3>
//               <ul>
//                 <li>
//                   <h4>Subject: [Subject]</h4>
//                   <p>Sender: [Sender]</p>
//                   <p>Date: [Date]</p>
//                   <p>Message: [Message]</p>
//                 </li>
//                 {/* Add more messages here */}
//               </ul>
//             </div>
//             <div>
//               <h3>Send a New Message</h3>
//               {/* Add a form or other UI for sending a new message */}
//               <form>
//                 <div>
//                   <label htmlFor="recipient">Recipient:</label>
//                   <input type="text" id="recipient" name="recipient" />
//                 </div>
//                 <div>
//                   <label htmlFor="subject">Subject:</label>
//                   <input type="text" id="subject" name="subject" />
//                 </div>
//                 <div>
//                   <label htmlFor="message">Message:</label>
//                   <textarea id="message" name="message"></textarea>
//                 </div>
//                 <button type="submit">Send Message</button>
//               </form>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h1 className="heading-container">Prescription Management</h1>
//       <div className="tab-buttons">
//         <button
//           className={`tab-button ${activeTab === 'prescription' ? 'active' : ''}`}
//           onClick={() => setActiveTab('prescription')}
//         >
//           <FaPrescriptionBottleAlt className="icon" /> Prescription
//         </button>
//         <button
//           className={`tab-button ${activeTab === 'delivery' ? 'active' : ''}`}
//           onClick={() => setActiveTab('delivery')}
//         >
//           <FaTruckMoving className="icon" /> Delivery Tracking
//         </button>
//         <button
//           className={`tab-button ${activeTab === 'communication' ? 'active' : ''}`}
//           onClick={() => setActiveTab('communication')}
//         >
//           <FaCommentDots className="icon" /> Patient Communication
//         </button>
//       </div>
//       <div className="tab-content">{renderTabContent()}</div>
//     </div>
//   );
// };

// export default PrescriptionManagementPage;


// // import React, { useState, useEffect } from 'react';
// // import { FaPrescriptionBottleAlt, FaTruckMoving, FaCommentDots } from 'react-icons/fa';
// // import { getPrescriptions, requestPrescription, getDeliveries, trackDelivery, getMessages, sendMessage } from './api';
// // import '../styles/PrescriptionManagementPage.css';

// // const PrescriptionManagementPage = () => {
// //   const [activeTab, setActiveTab] = useState('prescription');
// //   const [prescriptions, setPrescriptions] = useState([]);
// //   const [deliveries, setDeliveries] = useState([]);
// //   const [messages, setMessages] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const fetchedPrescriptions = await getPrescriptions();
// //         setPrescriptions(fetchedPrescriptions);

// //         const fetchedDeliveries = await getDeliveries();
// //         setDeliveries(fetchedDeliveries);

// //         const fetchedMessages = await getMessages();
// //         setMessages(fetchedMessages);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handlePrescriptionRequest = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData(e.target);
// //     const prescription = {
// //       medication: formData.get('medication'),
// //       dosage: formData.get('dosage'),
// //       instructions: formData.get('instructions'),
// //     };

// //     try {
// //       const newPrescription = await requestPrescription(prescription);
// //       setPrescriptions([...prescriptions, newPrescription]);
// //     } catch (error) {
// //       console.error('Error requesting prescription:', error);
// //     }
// //   };

// //   const handleDeliveryTracking = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData(e.target);
// //     const deliveryId = formData.get('deliveryId');

// //     try {
// //       const deliveryStatus = await trackDelivery(deliveryId);
// //       // Update the delivery status in the deliveries array
// //       const updatedDeliveries = deliveries.map((delivery) =>
// //         delivery.id === deliveryId ? { ...delivery, status: deliveryStatus } : delivery
// //       );
// //       setDeliveries(updatedDeliveries);
// //     } catch (error) {
// //       console.error('Error tracking delivery:', error);
// //     }
// //   };

// //   const handleMessageSend = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData(e.target);
// //     const message = {
// //       recipient: formData.get('recipient'),
// //       subject: formData.get('subject'),
// //       content: formData.get('message'),
// //     };

// //     try {
// //       const newMessage = await sendMessage(message);
// //       setMessages([...messages, newMessage]);
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //     }
// //   };

// //   const renderTabContent = () => {
// //     switch (activeTab) {
// //       case 'prescription':
// //         return (
// //           <div>
// //             <h2>Prescription Management</h2>
// //             <div>
// //               <h3>Current Prescriptions</h3>
// //               <ul>
// //                 {prescriptions.map((prescription) => (
// //                   <li key={prescription.id}>
// //                     {prescription.medication} ({prescription.dosage})
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div>
// //               <h3>Request a New Prescription</h3>
// //               <form onSubmit={handlePrescriptionRequest}>
// //                 <div>
// //                   <label htmlFor="medication">Medication:</label>
// //                   <input type="text" id="medication" name="medication" />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="dosage">Dosage:</label>
// //                   <input type="text" id="dosage" name="dosage" />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="instructions">Instructions:</label>
// //                   <textarea id="instructions" name="instructions"></textarea>
// //                 </div>
// //                 <button type="submit">Request Prescription</button>
// //               </form>
// //             </div>
// //           </div>
// //         );
// //       case 'delivery':
// //         return (
// //           <div>
// //             <h2>Delivery Tracking</h2>
// //             <div>
// //               <h3>Current Deliveries</h3>
// //               <ul>
// //                 {deliveries.map((delivery) => (
// //                   <li key={delivery.id}>
// //                     <h4>{delivery.medication}</h4>
// //                     <p>Estimated Delivery Date: {delivery.estimatedDeliveryDate}</p>
// //                     <p>Status: {delivery.status}</p>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div>
// //               <h3>Track a Delivery</h3>
// //               <form onSubmit={handleDeliveryTracking}>
// //                 <div>
// //                   <label htmlFor="deliveryId">Delivery ID:</label>
// //                   <input type="text" id="deliveryId" name="deliveryId" />
// //                 </div>
// //                 <button type="submit">Track Delivery</button>
// //               </form>
// //             </div>
// //           </div>
// //         );
// //       case 'communication':
// //         return (
// //           <div>
// //             <h2>Patient Communication</h2>
// //             <div>
// //               <h3>Recent Messages</h3>
// //               <ul>
// //                 {messages.map((message) => (
// //                   <li key={message.id}>
// //                     <h4>Subject: {message.subject}</h4>
// //                     <p>Sender: {message.sender}</p>
// //                     <p>Date: {message.date}</p>
// //                     <p>Message: {message.content}</p>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div>
// //               <h3>Send a New Message</h3>
// //               <form onSubmit={handleMessageSend}>
// //                 <div>
// //                   <label htmlFor="recipient">Recipient:</label>
// //                   <input type="text" id="recipient" name="recipient" />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="subject">Subject:</label>
// //                   <input type="text" id="subject" name="subject" />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="message">Message:</label>
// //                   <textarea id="message" name="message"></textarea>
// //                 </div>
// //                 <button type="submit">Send Message</button>
// //               </form>
// //             </div>
// //           </div>
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1 className="heading-container">Prescription Management</h1>
// //       <div className="tab-buttons">
// //         <button
// //           className={`tab-button ${activeTab === 'prescription' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('prescription')}
// //         >
// //           <FaPrescriptionBottleAlt className="icon" /> Prescription
// //         </button>
// //         <button
// //           className={`tab-button ${activeTab === 'delivery' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('delivery')}
// //         >
// //           <FaTruckMoving className="icon" /> Delivery Tracking
// //         </button>
// //         <button
// //           className={`tab-button ${activeTab === 'communication' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('communication')}
// //         >
// //           <FaCommentDots className="icon" /> Patient Communication
// //         </button>
// //       </div>
// //       <div className="tab-content">{renderTabContent()}</div>
// //     </div>
// //   );
// // };

// // export default PrescriptionManagementPage;




// import React, { useState } from 'react';

// const PrescriptionManagementPage = () => {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const fetchPlans = async () => {
//     setLoading(true);
//     setError('');

//     const data = JSON.stringify({
//       filter: {
//         disease_mgmt_programs: [],
//         division: "HealthCare",
//         issuer: "",
//         issuers: [],
//         metal_levels: [],
//         metal_level: "Catastrophic",
//         metal_design_types: [],
//         design_types: [],
//         premium: 0,
//         type: "Indemnity",
//         types: [],
//         deductible: 0,
//         hsa: false,
//         oopc: 0,
//         child_dental_coverage: false,
//         adult_dental_coverage: false,
//         drugs: [],
//         providers: [],
//         quality_rating: 0,
//         simple_choice: false,
//         premium_range: { min: 0, max: 0 },
//         deductible_range: { min: 0, max: 0 }
//       },
//       household: {
//         income: 0,
//         unemployment_received: "Adult",
//         people: [],
//         has_married_couple: false,
//         effective_date: ""
//       },
//       offset: 0,
//       order: "asc",
//       place: {
//         countyfips: "",
//         state: "",
//         zipcode: ""
//       },
//       sort: "premium",
//       year: 0,
//       market: "Individual",
//       aptc_override: 0,
//       csr_override: "CSR73",
//       catastrophic_override: false,
//       suppressed_plan_ids: []
//     });

//     try {
//       const xhr = new XMLHttpRequest();
//       xhr.withCredentials = true;
//       xhr.addEventListener("readystatechange", function () {
//         if (this.readyState === this.DONE) {
//           const response = JSON.parse(this.responseText);
//           setPlans(response.plans);
//           setLoading(false);
//         }
//       });
//       xhr.open("POST", "https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=nBKTxEY569YAfZxEU1mvsAn1Lo0X9eF4&year=2023");

//       xhr.setRequestHeader("content-type", "application/json");
//       xhr.setRequestHeader("apikey", "nBKTxEY569YAfZxEU1mvsAn1Lo0X9eF4");
//       xhr.send(data);
//     } catch (err) {
//       setError('Error fetching plans');
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Health Insurance Management</h1>
//       <button onClick={fetchPlans} disabled={loading}>
//         {loading ? 'Loading...' : 'Fetch Plans'}
//       </button>
//       {error && <p>{error}</p>}
//       {plans.length > 0 && (
//         <ul>
//           {plans.map((plan) => (
//             <li key={plan.id}>{plan.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default PrescriptionManagementPage;