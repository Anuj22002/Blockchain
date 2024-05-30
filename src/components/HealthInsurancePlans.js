// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const HealthInsurancePlans = () => {
//   const [plans, setPlans] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchInsurancePlans = async () => {
//       try {
//         const response = await axios.get('https://chrio.api.stoplight.io/npi/plans', {
//           params: {
//             state: 'CA', // Change this to your desired state
//           },
//         });
//         setPlans(response.data.plans);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching insurance plans:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchInsurancePlans();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Active Health Insurance Plans</h2>
//       <ul>
//         {plans.map((plan) => (
//           <li key={plan.plan_id}>
//             <h3>{plan.plan_name}</h3>
//             <p>Plan Type: {plan.plan_type_code}</p>
//             <p>Network: {plan.network_name}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HealthInsurancePlans;