import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"; // Importing the necessary icons
import { IoLocationSharp, IoMail, IoCall, IoPrint } from "react-icons/io5";
import "../styles/footer.css"; // Import your custom CSS for hover effects

// const Footer = () => {
//   useEffect(() => {
//     ScrollReveal({
//       reset: true,
//       distance: '60px',
//       durationIn: 2500,
//       delay: 400,
//     });

    // ScrollReveal().reveal('.get_connected_heading', { delay: 700, origin: 'left' });
    // ScrollReveal().reveal('.social_links_icons', { delay: 700, origin: 'right' });
    // ScrollReveal().reveal('.EHRMS_platform_heading', { delay: 700, origin: 'left' });
    // ScrollReveal().reveal('.discover_our_new_features_heading', { delay: 700, origin: 'top' });
    // ScrollReveal().reveal('.discover_our_new_features_content', { delay: 700, origin: 'bottom' });
    // ScrollReveal().reveal('.Contact_us_heading', { delay: 700, origin: 'right' });
//   }, []);


  // return (
//     <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
//       <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mt-5">
//         <div className="me-5 d-none d-lg-block get_connected_heading">
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div className='social_links_icons'>
//           <a href="#!" className="me-4 text-reset ">
//             <FaFacebookF color="secondary" className="icon-hover" />
//           </a>
//           <a href="#!" className="me-4 text-reset">
//             <FaTwitter color="secondary" className="icon-hover" />
//           </a>
//           <a href="#!" className="me-4 text-reset">
//             <FaGoogle color="secondary" className="icon-hover" />
//           </a>
//           <a href="#!" className="me-4 text-reset">
//             <FaInstagram color="secondary" className="icon-hover" />
//           </a>
//           <a href="#!" className="me-4 text-reset">
//             <FaLinkedin color="secondary" className="icon-hover" />
//           </a>
//           <a href="#!" className="me-4 text-reset">
//             <FaGithub color="secondary" className="icon-hover" />
//           </a>
//         </div>
//       </section>

//       <section className="">
//         <MDBContainer className="text-center text-md-start mt-5">
//           <MDBRow className="mt-3">
//             <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-md-0 mb-4 EHRMS_platform_heading">
//               <h4 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
//                 EHRMS platform
//               </h4>

//               <p>
//                 Welcome to our EHRMS platform. Manage health records efficiently
//                 and securely and get feature like Patient Records Management,
//                 Appointment Scheduling, Active Vaccinations, Prescription
//                 Management ,etc
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
//               <section className="bg-gray-100 dark:bg-gray-800">
//                 <div
//                   className="container grid items-center justify-center gap-4 px-4 text-center md:px-6"
//                   style={{ maxWidth: "800px" }}
//                 >
//                   {/* Adjusted maxWidth here */}
//                   <div className="space-y-3">
//                     <h4 className="text-3xl font-bold tracking-tighter md:text-4xl/tight discover_our_new_features_heading">
//                       Discover Our New Features
//                     </h4>
//                     <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 py-2 mb-0 discover_our_new_features_content">
//                       Explore the latest innovations in healthcare technology.
//                     </p>
//                   </div>
//                   <div className="mx-auto w-full max-w-sm space-y-2">
//                     <p className="text-xs text-gray-500 dark:text-gray-400 discover_our_new_features_content">
//                       Subscribe to our newsletter for updates and promotions.
//                     </p>
//                   </div>
//                 </div>
//               </section>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 Contact_us_heading">
//               <h4 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
//                 Contact Us
//               <script src="https://cdn.lordicon.com/lordicon.js"></script>
// <lord-icon
//     src="https://cdn.lordicon.com/srsgifqc.json"
//     trigger="morph"
//     state="morph-phone-ring-finish"
//     style={{ width: "30px", height: "30px", paddingLeft: "10px" , paddingTop: "5px"  }} >
// </lord-icon>
//               </h4>
//               <p className="mb-3">
//                 <IoLocationSharp
//                   color="secondary"
//                   size={25}
//                   className="me-2 icon-hover"
//                 />
//                 Nagpur, NY 10012, India
//               </p>
//               <p className="mb-3">
//                 <IoMail
//                   color="secondary"
//                   size={25}
//                   className="me-3 icon-hover"
//                 />
//                 info@example.com
//               </p>
//               <p className="mb-3">
//                 <IoCall
//                   color="secondary"
//                   size={25}
//                   className="me-3 icon-hover"
//                 />{" "}
//                 + 01 234 567 88
//               </p>
//               <p className="mb-3">
//                 <IoPrint
//                   color="secondary"
//                   size={25}
//                   className="me-3 icon-hover"
//                 />{" "}
//                 + 01 234 567 89
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

      // <div
      //   className="text-center p-4 fixed-bottom"
      //   style={{ backgroundColor: "grey" }}
      // >
      //   © {new Date().getFullYear()} Copyright:
      //   <span className="text-reset fw-bold">EHRMS.com</span>
      // </div>
    // </MDBFooter>
//   );
// };

// export default Footer;
