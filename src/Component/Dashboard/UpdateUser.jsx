// // // UpdateUser.jsx
// // import React, { useState, useEffect } from 'react';
// // import './UpdateUser.css';

// // const UpdateUser = ({ user, onClose, onSave }) => {
// //   const [userData, setUserData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     password: '************',
// //     status: 'Active',
// //   });
// //   const [showPassword, setShowPassword] = useState(false);

// //   useEffect(() => {
// //     if (user) {
// //       const nameParts = user.name.split(' ');
// //       setUserData({
// //         firstName: nameParts[0] || '',
// //         lastName: nameParts.slice(1).join(' ') || '',
// //         email: user.email || '',
// //         password: '************',
// //         status: 'Active',
// //       });
// //     }
// //   }, [user]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUserData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onSave({
// //       ...userData,
// //       name: `${userData.firstName} ${userData.lastName}`,
// //     });
// //   };

// //   const togglePasswordVisibility = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   return (
// //     <div className="update-user-modal">
// //       <div className="update-user-content">
// //         <div className="profile-image-container">
// //           <div className="profile-image">
// //             {/* <img src="/api/placeholder/120/120" alt="User profile" /> */}
// //           </div>
// //         </div>
        
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label htmlFor="firstName">First name</label>
// //             <div className="input-container">
// //               <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
// //                 <path d="M13.1525 10.5626C13.9216 9.956 14.4829 9.12417 14.7585 8.18285C15.034 7.24152 15.01 6.23751 14.6899 5.31048C14.3697 4.38345 13.7693 3.57952 12.9721 3.01051C12.175 2.44151 11.2207 2.13574 10.2422 2.13574C9.26359 2.13574 8.30935 2.44151 7.51219 3.01051C6.71504 3.57952 6.11461 4.38345 5.79445 5.31048C5.47429 6.23751 5.45031 7.24152 5.72585 8.18285C6.00139 9.12417 6.56275 9.956 7.33182 10.5626C6.01399 11.0919 4.86414 11.9698 4.00485 13.1027C3.14555 14.2355 2.60903 15.581 2.45249 16.9955C2.44115 17.0988 2.45022 17.2033 2.47918 17.303C2.50813 17.4028 2.5564 17.4958 2.62123 17.5769C2.75216 17.7406 2.9426 17.8455 3.15065 17.8684C3.35871 17.8913 3.56733 17.8305 3.73063 17.6992C3.89392 17.568 3.99852 17.3771 4.0214 17.1685C4.19366 15.6312 4.92486 14.2114 6.07529 13.1804C7.22573 12.1494 8.71475 11.5795 10.2579 11.5795C11.801 11.5795 13.29 12.1494 14.4404 13.1804C15.5909 14.2114 16.3221 15.6312 16.4943 17.1685C16.5156 17.3617 16.6076 17.5402 16.7525 17.6695C16.8973 17.7987 17.0848 17.8696 17.2788 17.8684H17.3651C17.5707 17.8447 17.7586 17.7405 17.8879 17.5784C18.0173 17.4164 18.0774 17.2097 18.0554 17.0033C17.8981 15.5848 17.3587 14.2359 16.495 13.1013C15.6313 11.9667 14.4758 11.0891 13.1525 10.5626ZM10.2422 10.0042C9.62156 10.0042 9.01489 9.81975 8.49888 9.47409C7.98286 9.12844 7.58068 8.63716 7.34318 8.06236C7.10569 7.48757 7.04355 6.85508 7.16462 6.24488C7.2857 5.63468 7.58455 5.07417 8.02338 4.63424C8.46222 4.19431 9.02133 3.89472 9.63001 3.77334C10.2387 3.65197 10.8696 3.71426 11.443 3.95235C12.0163 4.19044 12.5064 4.59362 12.8512 5.11093C13.196 5.62823 13.38 6.23641 13.38 6.85857C13.38 7.69285 13.0494 8.49296 12.461 9.08289C11.8725 9.67282 11.0744 10.0042 10.2422 10.0042Z" fill="#5D5A6F"/>
// //               </svg></span>
// //               <input
// //                 type="text"
// //                 id="firstName"
// //                 name="firstName"
// //                 value={userData.firstName}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="lastName">Last name</label>
// //             <div className="input-container">
// //               <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
// //                 <path d="M13.1525 10.5626C13.9216 9.956 14.4829 9.12417 14.7585 8.18285C15.034 7.24152 15.01 6.23751 14.6899 5.31048C14.3697 4.38345 13.7693 3.57952 12.9721 3.01051C12.175 2.44151 11.2207 2.13574 10.2422 2.13574C9.26359 2.13574 8.30935 2.44151 7.51219 3.01051C6.71504 3.57952 6.11461 4.38345 5.79445 5.31048C5.47429 6.23751 5.45031 7.24152 5.72585 8.18285C6.00139 9.12417 6.56275 9.956 7.33182 10.5626C6.01399 11.0919 4.86414 11.9698 4.00485 13.1027C3.14555 14.2355 2.60903 15.581 2.45249 16.9955C2.44115 17.0988 2.45022 17.2033 2.47918 17.303C2.50813 17.4028 2.5564 17.4958 2.62123 17.5769C2.75216 17.7406 2.9426 17.8455 3.15065 17.8684C3.35871 17.8913 3.56733 17.8305 3.73063 17.6992C3.89392 17.568 3.99852 17.3771 4.0214 17.1685C4.19366 15.6312 4.92486 14.2114 6.07529 13.1804C7.22573 12.1494 8.71475 11.5795 10.2579 11.5795C11.801 11.5795 13.29 12.1494 14.4404 13.1804C15.5909 14.2114 16.3221 15.6312 16.4943 17.1685C16.5156 17.3617 16.6076 17.5402 16.7525 17.6695C16.8973 17.7987 17.0848 17.8696 17.2788 17.8684H17.3651C17.5707 17.8447 17.7586 17.7405 17.8879 17.5784C18.0173 17.4164 18.0774 17.2097 18.0554 17.0033C17.8981 15.5848 17.3587 14.2359 16.495 13.1013C15.6313 11.9667 14.4758 11.0891 13.1525 10.5626ZM10.2422 10.0042C9.62156 10.0042 9.01489 9.81975 8.49888 9.47409C7.98286 9.12844 7.58068 8.63716 7.34318 8.06236C7.10569 7.48757 7.04355 6.85508 7.16462 6.24488C7.2857 5.63468 7.58455 5.07417 8.02338 4.63424C8.46222 4.19431 9.02133 3.89472 9.63001 3.77334C10.2387 3.65197 10.8696 3.71426 11.443 3.95235C12.0163 4.19044 12.5064 4.59362 12.8512 5.11093C13.196 5.62823 13.38 6.23641 13.38 6.85857C13.38 7.69285 13.0494 8.49296 12.461 9.08289C11.8725 9.67282 11.0744 10.0042 10.2422 10.0042Z" fill="#5D5A6F"/>
// //               </svg></span>
// //               <input
// //                 type="text"
// //                 id="lastName"
// //                 name="lastName"
// //                 value={userData.lastName}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="email">Email</label>
// //             <div className="input-container">
// //               <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
// //                 <path d="M14.9556 3.96899H3.95413C3.32889 3.96899 2.72927 4.21757 2.28716 4.66002C1.84505 5.10248 1.59668 5.70259 1.59668 6.32832V14.1927C1.59668 14.8185 1.84505 15.4186 2.28716 15.861C2.72927 16.3035 3.32889 16.5521 3.95413 16.5521H14.9556C15.5808 16.5521 16.1804 16.3035 16.6225 15.861C17.0646 15.4186 17.313 14.8185 17.313 14.1927V6.32832C17.313 5.70259 17.0646 5.10248 16.6225 4.66002C16.1804 4.21757 15.5808 3.96899 14.9556 3.96899ZM14.6334 5.54188L10.0128 10.1662C9.93972 10.2399 9.85281 10.2984 9.75705 10.3383C9.66129 10.3782 9.55858 10.3988 9.45485 10.3988C9.35111 10.3988 9.2484 10.3782 9.15264 10.3383C9.05688 10.2984 8.96997 10.2399 8.89692 10.1662L4.27631 5.54188H14.6334ZM15.7414 14.1927C15.7414 14.4013 15.6586 14.6013 15.5112 14.7488C15.3638 14.8963 15.164 14.9792 14.9556 14.9792H3.95413C3.74572 14.9792 3.54584 14.8963 3.39847 14.7488C3.2511 14.6013 3.16831 14.4013 3.16831 14.1927V6.65076L7.78891 11.275C8.23094 11.7169 8.83012 11.965 9.45485 11.965C10.0796 11.965 10.6788 11.7169 11.1208 11.275L15.7414 6.65076V14.1927Z" fill="#5D5A6F"/>
// //               </svg></span>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 value={userData.email}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="password">Password</label>
// //             <div className="input-container">
// //               <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
// //                 <path d="M9.45352 11.1772C9.24511 11.1772 9.04524 11.2601 8.89787 11.4076C8.7505 11.555 8.66771 11.7551 8.66771 11.9637V14.323C8.66771 14.5316 8.7505 14.7316 8.89787 14.8791C9.04524 15.0266 9.24511 15.1094 9.45352 15.1094C9.66194 15.1094 9.86181 15.0266 10.0092 14.8791C10.1565 14.7316 10.2393 14.5316 10.2393 14.323V11.9637C10.2393 11.7551 10.1565 11.555 10.0092 11.4076C9.86181 11.2601 9.66194 11.1772 9.45352 11.1772ZM13.3826 8.03146V6.45857C13.3826 5.41569 12.9687 4.41552 12.2318 3.67808C11.495 2.94065 10.4956 2.52637 9.45352 2.52637C8.41147 2.52637 7.41209 2.94065 6.67524 3.67808C5.9384 4.41552 5.52444 5.41569 5.52444 6.45857V8.03146C4.89921 8.03146 4.29958 8.28003 3.85747 8.72249C3.41537 9.16494 3.16699 9.76505 3.16699 10.3908V15.8959C3.16699 16.5216 3.41537 17.1217 3.85747 17.5642C4.29958 18.0066 4.89921 18.2552 5.52444 18.2552H13.3826C14.0078 18.2552 14.6075 18.0066 15.0496 17.5642C15.4917 17.1217 15.7401 16.5216 15.7401 15.8959V10.3908C15.7401 9.76505 15.4917 9.16494 15.0496 8.72249C14.6075 8.28003 14.0078 8.03146 13.3826 8.03146ZM7.09608 6.45857C7.09608 5.83284 7.34445 5.23274 7.78656 4.79028C8.22866 4.34782 8.82829 4.09925 9.45352 4.09925C10.0788 4.09925 10.6784 4.34782 11.1205 4.79028C11.5626 5.23274 11.811 5.83284 11.811 6.45857V8.03146H7.09608V6.45857ZM14.1684 15.8959C14.1684 16.1044 14.0856 16.3045 13.9383 16.452C13.7909 16.5995 13.591 16.6823 13.3826 16.6823H5.52444C5.31603 16.6823 5.11615 16.5995 4.96879 16.452C4.82142 16.3045 4.73863 16.1044 4.73863 15.8959V10.3908C4.73863 10.1822 4.82142 9.98217 4.96879 9.83468C5.11615 9.6872 5.31603 9.60434 5.52444 9.60434H13.3826C13.591 9.60434 13.7909 9.6872 13.9383 9.83468C14.0856 9.98217 14.1684 10.1822 14.1684 10.3908V15.8959Z" fill="#5D5A6F"/>
// //               </svg></span>
// //               <input
// //                 type={showPassword ? "text" : "password"}
// //                 id="password"
// //                 name="password"
// //                 value={userData.password}
// //                 onChange={handleChange}
// //                 required
// //               />
// //               <button 
// //                 type="button" 
// //                 className="toggle-password" 
// //                 onClick={togglePasswordVisibility}
// //               >
// //                 {showPassword ? "👁️" : "👁️‍🗨️"}
// //               </button>
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="status">Status</label>
// //             <div className="input-container">
// //               <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
// //                   <path d="M13 22.4644C12.6713 22.4977 12.338 22.5144 12 22.5144C6.477 22.5144 2 18.0374 2 12.5144C2 6.9914 6.477 2.5144 12 2.5144C17.523 2.5144 22 6.9914 22 12.5144C22 12.8524 21.9833 13.1857 21.95 13.5144" stroke="#5D5A6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// //                   <path d="M7.5 17.5144C8.902 16.0454 11.021 15.4184 13 15.7084M14.495 10.0144C14.495 11.3944 13.375 12.5144 11.992 12.5144C11.6634 12.5149 11.3378 12.4507 11.0341 12.3253C10.7303 12.1999 10.4542 12.0158 10.2216 11.7836C9.98908 11.5514 9.80457 11.2756 9.67868 10.972C9.5528 10.6685 9.488 10.343 9.488 10.0144C9.488 8.63441 10.608 7.51441 11.992 7.51441C12.3206 7.51401 12.646 7.57839 12.9496 7.70385C13.2533 7.82931 13.5292 8.01339 13.7617 8.24558C13.9942 8.47776 14.1786 8.75349 14.3044 9.057C14.4302 9.36051 14.495 9.68585 14.495 10.0144Z" stroke="#5D5A6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// //                   <path d="M18.5 22.5144C20.433 22.5144 22 20.9474 22 19.0144C22 17.0814 20.433 15.5144 18.5 15.5144C16.567 15.5144 15 17.0814 15 19.0144C15 20.9474 16.567 22.5144 18.5 22.5144Z" stroke="#5D5A6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// //                 </svg></span>
// //               <select
// //                 id="status"
// //                 name="status"
// //                 value={userData.status}
// //                 onChange={handleChange}
// //               >
// //                 <option value="Active">Active</option>
// //                 <option value="Inactive">Banned</option>
// //                 <option value="Suspended">Suspended</option>
// //               </select>
// //                   </div>
// //           </div>

// //           <div className="button-group">
// //              <button type="submit" className="save-button">Save</button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export {UpdateUser};


// // UpdateUser.jsx
// import React, { useState, useEffect } from 'react';
// import './UpdateUser.css';
// import axios from 'axios';

// const UpdateUser = ({ user, onClose, onSave }) => {
//   const [userData, setUserData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     status: 'Active',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isEditingPassword, setIsEditingPassword] = useState(false);

//   useEffect(() => {
//     if (user) {
//       const nameParts = user.name.split(' ');
//       setUserData({
//         firstName: nameParts[0] || '',
//         lastName: nameParts.slice(1).join(' ') || '',
//         email: user.email || '',
//         password: '',
//         status: user.isActive ? 'Active' : 'Inactive',
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const token = localStorage.getItem('token');
      
//       // Update name if changed
//       if (userData.firstName !== user.name.split(' ')[0] || 
//           userData.lastName !== user.name.split(' ').slice(1).join(' ')) {
//         await axios.post(
//           'https://localhost:7217/api/profile/change-name',
//           {
//             newFullName: `${userData.firstName} ${userData.lastName}`,
//             changeReason: "Admin update"
//           },
//           {
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json'
//             }
//           }
//         );
//       }

//       // Update password if changed
//       if (isEditingPassword && userData.password) {
//         await axios.post(
//           'https://localhost:7217/api/profile/change-password',
//           {
//             currentPassword: '', // Admin can change without current password
//             newPassword: userData.password,
//             confirmPassword: userData.password,
//             changeReason: "Admin password reset"
//           },
//           {
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json'
//             }
//           }
//         );
//       }

//       // Update activation status if changed
//       const newStatus = userData.status === 'Active';
//       if (newStatus !== user.isActive) {
//         await axios.post(
//           `https://localhost:7217/api/admin/toggle-user-activation/${user.id}`,
//           {},
//           {
//             headers: {
//               'Authorization': `Bearer ${token}`
//             }
//           }
//         );
//       }

//       onSave({
//         ...userData,
//         name: `${userData.firstName} ${userData.lastName}`,
//         isActive: userData.status === 'Active'
//       });
      
//     } catch (err) {
//       console.error('Error updating user:', err);
//       alert('Error updating user. Please try again.');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const togglePasswordEdit = () => {
//     setIsEditingPassword(!isEditingPassword);
//     if (!isEditingPassword) {
//       setUserData(prev => ({...prev, password: ''}));
//     }
//   };

//   return (
//     <div className="update-user-modal">
//       <div className="update-user-content">
//         <div className="profile-image-container">
//           <div className="profile-image">
//             {/* <img src="/api/placeholder/120/120" alt="User profile" /> */}
//           </div>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="firstName">First name</label>
//             <div className="input-container">
//               <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                 <path d="M13.1525 10.5626C13.9216 9.956 14.4829 9.12417 14.7585 8.18285C15.034 7.24152 15.01 6.23751 14.6899 5.31048C14.3697 4.38345 13.7693 3.57952 12.9721 3.01051C12.175 2.44151 11.2207 2.13574 10.2422 2.13574C9.26359 2.13574 8.30935 2.44151 7.51219 3.01051C6.71504 3.57952 6.11461 4.38345 5.79445 5.31048C5.47429 6.23751 5.45031 7.24152 5.72585 8.18285C6.00139 9.12417 6.56275 9.956 7.33182 10.5626C6.01399 11.0919 4.86414 11.9698 4.00485 13.1027C3.14555 14.2355 2.60903 15.581 2.45249 16.9955C2.44115 17.0988 2.45022 17.2033 2.47918 17.303C2.50813 17.4028 2.5564 17.4958 2.62123 17.5769C2.75216 17.7406 2.9426 17.8455 3.15065 17.8684C3.35871 17.8913 3.56733 17.8305 3.73063 17.6992C3.89392 17.568 3.99852 17.3771 4.0214 17.1685C4.19366 15.6312 4.92486 14.2114 6.07529 13.1804C7.22573 12.1494 8.71475 11.5795 10.2579 11.5795C11.801 11.5795 13.29 12.1494 14.4404 13.1804C15.5909 14.2114 16.3221 15.6312 16.4943 17.1685C16.5156 17.3617 16.6076 17.5402 16.7525 17.6695C16.8973 17.7987 17.0848 17.8696 17.2788 17.8684H17.3651C17.5707 17.8447 17.7586 17.7405 17.8879 17.5784C18.0173 17.4164 18.0774 17.2097 18.0554 17.0033C17.8981 15.5848 17.3587 14.2359 16.495 13.1013C15.6313 11.9667 14.4758 11.0891 13.1525 10.5626ZM10.2422 10.0042C9.62156 10.0042 9.01489 9.81975 8.49888 9.47409C7.98286 9.12844 7.58068 8.63716 7.34318 8.06236C7.10569 7.48757 7.04355 6.85508 7.16462 6.24488C7.2857 5.63468 7.58455 5.07417 8.02338 4.63424C8.46222 4.19431 9.02133 3.89472 9.63001 3.77334C10.2387 3.65197 10.8696 3.71426 11.443 3.95235C12.0163 4.19044 12.5064 4.59362 12.8512 5.11093C13.196 5.62823 13.38 6.23641 13.38 6.85857C13.38 7.69285 13.0494 8.49296 12.461 9.08289C11.8725 9.67282 11.0744 10.0042 10.2422 10.0042Z" fill="#5D5A6F"/>
//               </svg></span>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={userData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="lastName">Last name</label>
//             <div className="input-container">
//               <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                 <path d="M13.1525 10.5626C13.9216 9.956 14.4829 9.12417 14.7585 8.18285C15.034 7.24152 15.01 6.23751 14.6899 5.31048C14.3697 4.38345 13.7693 3.57952 12.9721 3.01051C12.175 2.44151 11.2207 2.13574 10.2422 2.13574C9.26359 2.13574 8.30935 2.44151 7.51219 3.01051C6.71504 3.57952 6.11461 4.38345 5.79445 5.31048C5.47429 6.23751 5.45031 7.24152 5.72585 8.18285C6.00139 9.12417 6.56275 9.956 7.33182 10.5626C6.01399 11.0919 4.86414 11.9698 4.00485 13.1027C3.14555 14.2355 2.60903 15.581 2.45249 16.9955C2.44115 17.0988 2.45022 17.2033 2.47918 17.303C2.50813 17.4028 2.5564 17.4958 2.62123 17.5769C2.75216 17.7406 2.9426 17.8455 3.15065 17.8684C3.35871 17.8913 3.56733 17.8305 3.73063 17.6992C3.89392 17.568 3.99852 17.3771 4.0214 17.1685C4.19366 15.6312 4.92486 14.2114 6.07529 13.1804C7.22573 12.1494 8.71475 11.5795 10.2579 11.5795C11.801 11.5795 13.29 12.1494 14.4404 13.1804C15.5909 14.2114 16.3221 15.6312 16.4943 17.1685C16.5156 17.3617 16.6076 17.5402 16.7525 17.6695C16.8973 17.7987 17.0848 17.8696 17.2788 17.8684H17.3651C17.5707 17.8447 17.7586 17.7405 17.8879 17.5784C18.0173 17.4164 18.0774 17.2097 18.0554 17.0033C17.8981 15.5848 17.3587 14.2359 16.495 13.1013C15.6313 11.9667 14.4758 11.0891 13.1525 10.5626ZM10.2422 10.0042C9.62156 10.0042 9.01489 9.81975 8.49888 9.47409C7.98286 9.12844 7.58068 8.63716 7.34318 8.06236C7.10569 7.48757 7.04355 6.85508 7.16462 6.24488C7.2857 5.63468 7.58455 5.07417 8.02338 4.63424C8.46222 4.19431 9.02133 3.89472 9.63001 3.77334C10.2387 3.65197 10.8696 3.71426 11.443 3.95235C12.0163 4.19044 12.5064 4.59362 12.8512 5.11093C13.196 5.62823 13.38 6.23641 13.38 6.85857C13.38 7.69285 13.0494 8.49296 12.461 9.08289C11.8725 9.67282 11.0744 10.0042 10.2422 10.0042Z" fill="#5D5A6F"/>
//               </svg></span>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={userData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <div className="input-container">
//               <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
//                 <path d="M14.9556 3.96899H3.95413C3.32889 3.96899 2.72927 4.21757 2.28716 4.66002C1.84505 5.10248 1.59668 5.70259 1.59668 6.32832V14.1927C1.59668 14.8185 1.84505 15.4186 2.28716 15.861C2.72927 16.3035 3.32889 16.5521 3.95413 16.5521H14.9556C15.5808 16.5521 16.1804 16.3035 16.6225 15.861C17.0646 15.4186 17.313 14.8185 17.313 14.1927V6.32832C17.313 5.70259 17.0646 5.10248 16.6225 4.66002C16.1804 4.21757 15.5808 3.96899 14.9556 3.96899ZM14.6334 5.54188L10.0128 10.1662C9.93972 10.2399 9.85281 10.2984 9.75705 10.3383C9.66129 10.3782 9.55858 10.3988 9.45485 10.3988C9.35111 10.3988 9.2484 10.3782 9.15264 10.3383C9.05688 10.2984 8.96997 10.2399 8.89692 10.1662L4.27631 5.54188H14.6334ZM15.7414 14.1927C15.7414 14.4013 15.6586 14.6013 15.5112 14.7488C15.3638 14.8963 15.164 14.9792 14.9556 14.9792H3.95413C3.74572 14.9792 3.54584 14.8963 3.39847 14.7488C3.2511 14.6013 3.16831 14.4013 3.16831 14.1927V6.65076L7.78891 11.275C8.23094 11.7169 8.83012 11.965 9.45485 11.965C10.0796 11.965 10.6788 11.7169 11.1208 11.275L15.7414 6.65076V14.1927Z" fill="#5D5A6F"/>
//               </svg></span>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={userData.email}
//                 onChange={handleChange}
//                 required
//                 disabled
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <div className="input-container">
//               <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
//                 <path d="M9.45352 11.1772C9.24511 11.1772 9.04524 11.2601 8.89787 11.4076C8.7505 11.555 8.66771 11.7551 8.66771 11.9637V14.323C8.66771 14.5316 8.7505 14.7316 8.89787 14.8791C9.04524 15.0266 9.24511 15.1094 9.45352 15.1094C9.66194 15.1094 9.86181 15.0266 10.0092 14.8791C10.1565 14.7316 10.2393 14.5316 10.2393 14.323V11.9637C10.2393 11.7551 10.1565 11.555 10.0092 11.4076C9.86181 11.2601 9.66194 11.1772 9.45352 11.1772ZM13.3826 8.03146V6.45857C13.3826 5.41569 12.9687 4.41552 12.2318 3.67808C11.495 2.94065 10.4956 2.52637 9.45352 2.52637C8.41147 2.52637 7.41209 2.94065 6.67524 3.67808C5.9384 4.41552 5.52444 5.41569 5.52444 6.45857V8.03146C4.89921 8.03146 4.29958 8.28003 3.85747 8.72249C3.41537 9.16494 3.16699 9.76505 3.16699 10.3908V15.8959C3.16699 16.5216 3.41537 17.1217 3.85747 17.5642C4.29958 18.0066 4.89921 18.2552 5.52444 18.2552H13.3826C14.0078 18.2552 14.6075 18.0066 15.0496 17.5642C15.4917 17.1217 15.7401 16.5216 15.7401 15.8959V10.3908C15.7401 9.76505 15.4917 9.16494 15.0496 8.72249C14.6075 8.28003 14.0078 8.03146 13.3826 8.03146ZM7.09608 6.45857C7.09608 5.83284 7.34445 5.23274 7.78656 4.79028C8.22866 4.34782 8.82829 4.09925 9.45352 4.09925C10.0788 4.09925 10.6784 4.34782 11.1205 4.79028C11.5626 5.23274 11.811 5.83284 11.811 6.45857V8.03146H7.09608V6.45857ZM14.1684 15.8959C14.1684 16.1044 14.0856 16.3045 13.9383 16.452C13.7909 16.5995 13.591 16.6823 13.3826 16.6823H5.52444C5.31603 16.6823 5.11615 16.5995 4.96879 16.452C4.82142 16.3045 4.73863 16.1044 4.73863 15.8959V10.3908C4.73863 10.1822 4.82142 9.98217 4.96879 9.83468C5.11615 9.6872 5.31603 9.60434 5.52444 9.60434H13.3826C13.591 9.60434 13.7909 9.6872 13.9383 9.83468C14.0856 9.98217 14.1684 10.1822 14.1684 10.3908V15.8959Z" fill="#5D5A6F"/>
//               </svg></span>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 name="password"
//                 value={userData.password}
//                 onChange={handleChange}
//                 placeholder={isEditingPassword ? "Enter new password" : "••••••••••••"}
//                 disabled={!isEditingPassword}
//               />
//               <button 
//                 type="button" 
//                 className="toggle-password" 
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? "👁️" : "👁️‍🗨️"}
//               </button>
//               <button
//                 type="button"
//                 className="edit-password"
//                 onClick={togglePasswordEdit}
//               >
//                 {isEditingPassword ? "Cancel" : "Edit"}
//               </button>
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="status">Status</label>
//             <div className="input-container">
//               <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//                   <path d="M13 22.4644C12.6713 22.4977 12.338 22.5144 12 22.5144C6.477 22.5144 2 18.0374 2 12.5144C2 6.9914 6.477 2.5144 12 2.5144C17.523 2.5144 22 6.9914 22 12.5144C22 12.8524 21.9833 13.1857 21.95 13.5144" stroke="#5D5A6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M7.5 17.5144C8.902 16.0454 11.021 15.4184 13 15.7084M14.495 10.0144C14.495 11.3944 13.375 12.5144 11.992 12.5144C11.6634 12.5149 11.3378 12.4507 11.0341 12.3253C10.7303 12.1999 10.4542 12.0158 10.2216 11.7836C9.98908 11.5514 9.80457 11.2756 9.67868 10.972C9.5528 10.6685 9.488 10.343 9.488 10.0144C9.488 8.63441 10.608 7.51441 11.992 7.51441C12.3206 7.51401 12.646 7.57839 12.9496 7.70385C13.2533 7.82931 13.5292 8.01339 13.7617 8.24558C13.9942 8.47776 14.1786 8.75349 14.3044 9.057C14.4302 9.36051 14.495 9.68585 14.495 10.0144Z" stroke="#5D5A6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M18.5 22.5144C20.433 22.5144 22 20.9474 22 19.0144C22 17.0814 20.433 15.5144 18.5 15.5144C16.567 15.5144 15 17.0814 15 19.0144C15 20.9474 16.567 22.5144 18.5 22.5144Z" stroke="#5D5A6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg></span>
//               <select
//                 id="status"
//                 name="status"
//                 value={userData.status}
//                 onChange={handleChange}
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Banned</option>
//                 <option value="Suspended">Suspended</option>
//               </select>
//             </div>
//           </div>

//           <div className="button-group">
//             <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
//             <button type="submit" className="save-button">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export {UpdateUser};

import React, { useState, useEffect } from 'react';
import './UpdateUser.css';
import axios from 'axios';

const UpdateUser = ({ user, onClose, onSave }) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    status: 'Active',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  useEffect(() => {
    if (user) {
      const nameParts = user.name.split(' ');
      setUserData({
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || '',
        email: user.email || '',
        password: '',
        status: user.isActive ? 'Active' : 'Inactive',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
      
      if (userData.firstName !== user.name.split(' ')[0] || 
          userData.lastName !== user.name.split(' ').slice(1).join(' ')) {
        await axios.post(
          'https://localhost:7217/api/profile/change-name',
          {
            newFullName: `${userData.firstName} ${userData.lastName}`,
            changeReason: "Admin update"
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
      }

      if (isEditingPassword && userData.password) {
        await axios.post(
          'https://localhost:7217/api/profile/change-password',
          {
            currentPassword: '',
            newPassword: userData.password,
            confirmPassword: userData.password,
            changeReason: "Admin password reset"
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
      }

      const newStatus = userData.status === 'Active';
      if (newStatus !== user.isActive) {
        await axios.post(
          `https://localhost:7217/api/admin/toggle-user-activation/${user.id}`,
          {},
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
      }

      onSave({
        ...userData,
        name: `${userData.firstName} ${userData.lastName}`,
        isActive: userData.status === 'Active'
      });
      
    } catch (err) {
      console.error('Error updating user:', err);
      alert('Error updating user. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordEdit = () => {
    setIsEditingPassword(!isEditingPassword);
    if (!isEditingPassword) {
      setUserData(prev => ({...prev, password: ''}));
    }
  };

  return (
    <div className="update-user-modal">
      <div className="update-user-content">
        <div className="profile-image-container">
          <div className="profile-image">
            {/* <img src="/api/placeholder/120/120" alt="User profile" /> */}
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <div className="input-field">
              <div className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.1525 10.5626C13.9216 9.956 14.4829 9.12417 14.7585 8.18285C15.034 7.24152 15.01 6.23751 14.6899 5.31048C14.3697 4.38345 13.7693 3.57952 12.9721 3.01051C12.175 2.44151 11.2207 2.13574 10.2422 2.13574C9.26359 2.13574 8.30935 2.44151 7.51219 3.01051C6.71504 3.57952 6.11461 4.38345 5.79445 5.31048C5.47429 6.23751 5.45031 7.24152 5.72585 8.18285C6.00139 9.12417 6.56275 9.956 7.33182 10.5626C6.01399 11.0919 4.86414 11.9698 4.00485 13.1027C3.14555 14.2355 2.60903 15.581 2.45249 16.9955C2.44115 17.0988 2.45022 17.2033 2.47918 17.303C2.50813 17.4028 2.5564 17.4958 2.62123 17.5769C2.75216 17.7406 2.9426 17.8455 3.15065 17.8684C3.35871 17.8913 3.56733 17.8305 3.73063 17.6992C3.89392 17.568 3.99852 17.3771 4.0214 17.1685C4.19366 15.6312 4.92486 14.2114 6.07529 13.1804C7.22573 12.1494 8.71475 11.5795 10.2579 11.5795C11.801 11.5795 13.29 12.1494 14.4404 13.1804C15.5909 14.2114 16.3221 15.6312 16.4943 17.1685C16.5156 17.3617 16.6076 17.5402 16.7525 17.6695C16.8973 17.7987 17.0848 17.8696 17.2788 17.8684H17.3651C17.5707 17.8447 17.7586 17.7405 17.8879 17.5784C18.0173 17.4164 18.0774 17.2097 18.0554 17.0033C17.8981 15.5848 17.3587 14.2359 16.495 13.1013C15.6313 11.9667 14.4758 11.0891 13.1525 10.5626ZM10.2422 10.0042C9.62156 10.0042 9.01489 9.81975 8.49888 9.47409C7.98286 9.12844 7.58068 8.63716 7.34318 8.06236C7.10569 7.48757 7.04355 6.85508 7.16462 6.24488C7.2857 5.63468 7.58455 5.07417 8.02338 4.63424C8.46222 4.19431 9.02133 3.89472 9.63001 3.77334C10.2387 3.65197 10.8696 3.71426 11.443 3.95235C12.0163 4.19044 12.5064 4.59362 12.8512 5.11093C13.196 5.62823 13.38 6.23641 13.38 6.85857C13.38 7.69285 13.0494 8.49296 12.461 9.08289C11.8725 9.67282 11.0744 10.0042 10.2422 10.0042Z" fill="#5D5A6F"/>
                </svg>
              </div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <div className="input-field">
              <div className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.1525 10.5626C13.9216 9.956 14.4829 9.12417 14.7585 8.18285C15.034 7.24152 15.01 6.23751 14.6899 5.31048C14.3697 4.38345 13.7693 3.57952 12.9721 3.01051C12.175 2.44151 11.2207 2.13574 10.2422 2.13574C9.26359 2.13574 8.30935 2.44151 7.51219 3.01051C6.71504 3.57952 6.11461 4.38345 5.79445 5.31048C5.47429 6.23751 5.45031 7.24152 5.72585 8.18285C6.00139 9.12417 6.56275 9.956 7.33182 10.5626C6.01399 11.0919 4.86414 11.9698 4.00485 13.1027C3.14555 14.2355 2.60903 15.581 2.45249 16.9955C2.44115 17.0988 2.45022 17.2033 2.47918 17.303C2.50813 17.4028 2.5564 17.4958 2.62123 17.5769C2.75216 17.7406 2.9426 17.8455 3.15065 17.8684C3.35871 17.8913 3.56733 17.8305 3.73063 17.6992C3.89392 17.568 3.99852 17.3771 4.0214 17.1685C4.19366 15.6312 4.92486 14.2114 6.07529 13.1804C7.22573 12.1494 8.71475 11.5795 10.2579 11.5795C11.801 11.5795 13.29 12.1494 14.4404 13.1804C15.5909 14.2114 16.3221 15.6312 16.4943 17.1685C16.5156 17.3617 16.6076 17.5402 16.7525 17.6695C16.8973 17.7987 17.0848 17.8696 17.2788 17.8684H17.3651C17.5707 17.8447 17.7586 17.7405 17.8879 17.5784C18.0173 17.4164 18.0774 17.2097 18.0554 17.0033C17.8981 15.5848 17.3587 14.2359 16.495 13.1013C15.6313 11.9667 14.4758 11.0891 13.1525 10.5626ZM10.2422 10.0042C9.62156 10.0042 9.01489 9.81975 8.49888 9.47409C7.98286 9.12844 7.58068 8.63716 7.34318 8.06236C7.10569 7.48757 7.04355 6.85508 7.16462 6.24488C7.2857 5.63468 7.58455 5.07417 8.02338 4.63424C8.46222 4.19431 9.02133 3.89472 9.63001 3.77334C10.2387 3.65197 10.8696 3.71426 11.443 3.95235C12.0163 4.19044 12.5064 4.59362 12.8512 5.11093C13.196 5.62823 13.38 6.23641 13.38 6.85857C13.38 7.69285 13.0494 8.49296 12.461 9.08289C11.8725 9.67282 11.0744 10.0042 10.2422 10.0042Z" fill="#5D5A6F"/>
                </svg>
              </div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-field">
              <div className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                  <path d="M14.9556 3.96899H3.95413C3.32889 3.96899 2.72927 4.21757 2.28716 4.66002C1.84505 5.10248 1.59668 5.70259 1.59668 6.32832V14.1927C1.59668 14.8185 1.84505 15.4186 2.28716 15.861C2.72927 16.3035 3.32889 16.5521 3.95413 16.5521H14.9556C15.5808 16.5521 16.1804 16.3035 16.6225 15.861C17.0646 15.4186 17.313 14.8185 17.313 14.1927V6.32832C17.313 5.70259 17.0646 5.10248 16.6225 4.66002C16.1804 4.21757 15.5808 3.96899 14.9556 3.96899ZM14.6334 5.54188L10.0128 10.1662C9.93972 10.2399 9.85281 10.2984 9.75705 10.3383C9.66129 10.3782 9.55858 10.3988 9.45485 10.3988C9.35111 10.3988 9.2484 10.3782 9.15264 10.3383C9.05688 10.2984 8.96997 10.2399 8.89692 10.1662L4.27631 5.54188H14.6334ZM15.7414 14.1927C15.7414 14.4013 15.6586 14.6013 15.5112 14.7488C15.3638 14.8963 15.164 14.9792 14.9556 14.9792H3.95413C3.74572 14.9792 3.54584 14.8963 3.39847 14.7488C3.2511 14.6013 3.16831 14.4013 3.16831 14.1927V6.65076L7.78891 11.275C8.23094 11.7169 8.83012 11.965 9.45485 11.965C10.0796 11.965 10.6788 11.7169 11.1208 11.275L15.7414 6.65076V14.1927Z" fill="#5D5A6F"/>
                </svg>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
                disabled
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-field">
              <div className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                  <path d="M9.45352 11.1772C9.24511 11.1772 9.04524 11.2601 8.89787 11.4076C8.7505 11.555 8.66771 11.7551 8.66771 11.9637V14.323C8.66771 14.5316 8.7505 14.7316 8.89787 14.8791C9.04524 15.0266 9.24511 15.1094 9.45352 15.1094C9.66194 15.1094 9.86181 15.0266 10.0092 14.8791C10.1565 14.7316 10.2393 14.5316 10.2393 14.323V11.9637C10.2393 11.7551 10.1565 11.555 10.0092 11.4076C9.86181 11.2601 9.66194 11.1772 9.45352 11.1772ZM13.3826 8.03146V6.45857C13.3826 5.41569 12.9687 4.41552 12.2318 3.67808C11.495 2.94065 10.4956 2.52637 9.45352 2.52637C8.41147 2.52637 7.41209 2.94065 6.67524 3.67808C5.9384 4.41552 5.52444 5.41569 5.52444 6.45857V8.03146C4.89921 8.03146 4.29958 8.28003 3.85747 8.72249C3.41537 9.16494 3.16699 9.76505 3.16699 10.3908V15.8959C3.16699 16.5216 3.41537 17.1217 3.85747 17.5642C4.29958 18.0066 4.89921 18.2552 5.52444 18.2552H13.3826C14.0078 18.2552 14.6075 18.0066 15.0496 17.5642C15.4917 17.1217 15.7401 16.5216 15.7401 15.8959V10.3908C15.7401 9.76505 15.4917 9.16494 15.0496 8.72249C14.6075 8.28003 14.0078 8.03146 13.3826 8.03146ZM7.09608 6.45857C7.09608 5.83284 7.34445 5.23274 7.78656 4.79028C8.22866 4.34782 8.82829 4.09925 9.45352 4.09925C10.0788 4.09925 10.6784 4.34782 11.1205 4.79028C11.5626 5.23274 11.811 5.83284 11.811 6.45857V8.03146H7.09608V6.45857ZM14.1684 15.8959C14.1684 16.1044 14.0856 16.3045 13.9383 16.452C13.7909 16.5995 13.591 16.6823 13.3826 16.6823H5.52444C5.31603 16.6823 5.11615 16.5995 4.96879 16.452C4.82142 16.3045 4.73863 16.1044 4.73863 15.8959V10.3908C4.73863 10.1822 4.82142 9.98217 4.96879 9.83468C5.11615 9.6872 5.31603 9.60434 5.52444 9.60434H13.3826C13.591 9.60434 13.7909 9.6872 13.9383 9.83468C14.0856 9.98217 14.1684 10.1822 14.1684 10.3908V15.8959Z" fill="#5D5A6F"/>
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="••••••••••••"
                disabled={!isEditingPassword}
                style={{letterSpacing: '2px'}}
              />
              <div className="password-actions">
                <button 
                  type="button" 
                  className="toggle-password" 
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
                <button
                  type="button"
                  className="edit-password"
                  onClick={togglePasswordEdit}
                >
                  {isEditingPassword ? "Cancel" : "Edit"}
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <div className="input-field">
              <div className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M13 22.4644C12.6713 22.4977 12.338 22.5144 12 22.5144C6.477 22.5144 2 18.0374 2 12.5144C2 6.9914 6.477 2.5144 12 2.5144C17.523 2.5144 22 6.9914 22 12.5144C22 12.8524 21.9833 13.1857 21.95 13.5144" stroke="#5D5A6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 17.5144C8.902 16.0454 11.021 15.4184 13 15.7084M14.495 10.0144C14.495 11.3944 13.375 12.5144 11.992 12.5144C11.6634 12.5149 11.3378 12.4507 11.0341 12.3253C10.7303 12.1999 10.4542 12.0158 10.2216 11.7836C9.98908 11.5514 9.80457 11.2756 9.67868 10.972C9.5528 10.6685 9.488 10.343 9.488 10.0144C9.488 8.63441 10.608 7.51441 11.992 7.51441C12.3206 7.51401 12.646 7.57839 12.9496 7.70385C13.2533 7.82931 13.5292 8.01339 13.7617 8.24558C13.9942 8.47776 14.1786 8.75349 14.3044 9.057C14.4302 9.36051 14.495 9.68585 14.495 10.0144Z" stroke="#5D5A6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 22.5144C20.433 22.5144 22 20.9474 22 19.0144C22 17.0814 20.433 15.5144 18.5 15.5144C16.567 15.5144 15 17.0814 15 19.0144C15 20.9474 16.567 22.5144 18.5 22.5144Z" stroke="#5D5A6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <select
                id="status"
                name="status"
                value={userData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Banned</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
          </div>

          <div className="registered-courses">
            <div className="section-title">Registered Courses</div>
            <div className="registered-courses-count">0</div>
          </div>

          <div className="button-group">
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export {UpdateUser};