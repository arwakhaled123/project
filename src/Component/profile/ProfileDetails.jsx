// import React, { useState, useEffect } from "react";
// import "./styles.css";
// import "./model.css";
// import { Row } from 'react-bootstrap';

// // ✅ تعريف المودال داخل نفس الملف
// const Modal = ({ isOpen, onClose, onSave, firstName, setFirstName, lastName, setLastName, email, setEmail }) => {
//   if (!isOpen) return null;

//   return (
//     <Row className="modal-overlay">
//       <div className="modal-content">
//         <h2 id="header-details">Personal details</h2>
//         <div className="profile-img2"></div>
//         <Row className="two-btns">
//           <button id="change-btn">Change</button>
//           <button id="remove-btn">Remove</button>
//         </Row>

//         <label id="profile-label">First name</label>
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           placeholder="Name"
//           id="profile-input"
//         />

//         <label id="profile-label">Last name</label>
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           placeholder="Name"
//           id="profile-input"
//         />

//         <label id="profile-label">Email</label>
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           id="profile-input"
//         />

//         <Row className="btns-save-close">
//           <button id="save-btn" onClick={onSave}>Save</button>
//           <button id="close-btn" onClick={onClose}>Close</button>
//         </Row>
//       </div>
//     </Row>
//   );
// };

// // ✅ مكون تفاصيل المستخدم
// const ProfileDetails = ({ name, email, profileImage }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [userEmail, setEmail] = useState("");

//   // تحديث البيانات عندما تتغير props
//   useEffect(() => {
//     if (name) {
//       const parts = name.split(" ");
//       setFirstName(parts[0] || "");
//       setLastName(parts[1] || "");
//     }
//     setEmail(email || "");
//   }, [name, email]);

//   const handleSave = () => {
//     console.log("Saved:", { firstName, lastName, userEmail });
//     setIsModalOpen(false);
//     // يمكنك هنا ربط الطلب مع API مثل /change-name لاحقًا
//   };

//   return (
//     <div className="profile-details">
//       <Row className="profile-pin">
//         <h3 id="personal">Personal details</h3>
//         <svg
//           onClick={() => setIsModalOpen(true)}
//           xmlns="http://www.w3.org/2000/svg"
//           id="Pin"
//           width="24"
//           height="25"
//           viewBox="0 0 24 25"
//           fill="none"
//         >
//           <path d="M14.06 9.22505L14.98 10.145L5.92 19.205H5V18.285L14.06 9.22505ZM17.66 3.20505C17.41 3.20505 17.15 3.30505 16.96 3.49505L15.13 5.32505L18.88 9.07505L20.71 7.24505C20.8027 7.15253 20.8762 7.04265 20.9264 6.92167C20.9766 6.8007 21.0024 6.67102 21.0024 6.54005C21.0024 6.40908 20.9766 6.2794 20.9264 6.15842C20.8762 6.03745 20.8027 5.92756 20.71 5.83505L18.37 3.49505C18.17 3.29505 17.92 3.20505 17.66 3.20505ZM14.06 6.39505L3 17.455V21.205H6.75L17.81 10.145L14.06 6.39505Z" fill="#765378"/>
//         </svg>

//         <Modal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onSave={handleSave}
//           firstName={firstName}
//           setFirstName={setFirstName}
//           lastName={lastName}
//           setLastName={setLastName}
//           email={userEmail}
//           setEmail={setEmail}
//         />
//       </Row>

//       <div className="profile-image">
//         {/* تفعيل الصورة عند الحاجة */}
//         {/* <img src={profileImage} alt="Profile" className="profile" /> */}
//       </div>

//       <h2 id="name-alex">{firstName} {lastName}</h2>
//       <p>
//         <strong>Email:</strong> <br />
//         {email}
//       </p>
//     </div>
//   );
// };

// export default ProfileDetails;


import React, { useState, useEffect } from "react";
import "./styles.css";
import "./model.css";
import { Row } from "react-bootstrap";
import axios from "axios";

// ✅ مودال تعديل الاسم
const Modal = ({
  isOpen, onClose, onSave,
  firstName, setFirstName,
  lastName, setLastName,
  email
}) => {
  if (!isOpen) return null;

  return (
    <Row className="modal-overlay">
      <div className="modal-content">
        <h2 id="header-details">Personal details</h2>
        <div className="profile-img2"></div>

        <label id="profile-label">First name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          id="profile-input"
        />

        <label id="profile-label">Last name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          id="profile-input"
        />

        <label id="profile-label">Email</label>
        <input
          type="text"
          value={email}
          disabled
          id="profile-input"
        />

        <Row className="btns-save-close">
          <button id="save-btn" onClick={onSave}>Save</button>
          <button id="close-btn" onClick={onClose}>Close</button>
        </Row>
      </div>
    </Row>
  );
};

// ✅ مكون البروفايل
const ProfileDetails = ({ name, email, profileImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // 🔐 لتغيير كلمة المرور
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // تحديث البيانات لما تتغير props
  useEffect(() => {
    if (name) {
      const parts = name.split(" ");
      setFirstName(parts[0] || "");
      setLastName(parts[1] || "");
    }
    setUserEmail(email || "");
  }, [name, email]);

  // 📤 حفظ الاسم
  const handleSave = () => {
    const token = localStorage.getItem("token");
    const fullName = `${firstName} ${lastName}`;
    const changeReason = "Updated via profile page";

    axios.post("https://localhost:7217/api/profile/change-name", {
      newFullName: fullName,
      changeReason,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      alert("Name updated successfully.");
      setIsModalOpen(false);
      window.location.reload(); // للتحديث
    })
    .catch((err) => {
      console.error("Error updating name:", err);
      alert("Failed to update name.");
    });
  };

  // 📤 حفظ كلمة المرور
  const handlePasswordChange = () => {
    const token = localStorage.getItem("token");

    axios.post("https://localhost:7217/api/profile/change-password", {
      currentPassword,
      newPassword,
      confirmPassword,
      changeReason: "User changed password"
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      alert("Password changed successfully. Please login again.");
      setIsPasswordModalOpen(false);
      // يمكنك تسجيل الخروج هنا
    })
    .catch((err) => {
      console.error("Password change failed:", err);
      alert("Failed to change password. Please check inputs.");
    });
  };

  return (
    <div className="profile-details">
      <Row className="profile-pin">
        <h3 id="personal">Personal details</h3>
        <svg
          onClick={() => setIsModalOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          id="Pin"
          width="24"
          height="25"
          viewBox="170 0 24 25"
          fill="none"
        >
          <path d="M14.06 9.22505L14.98 10.145L5.92 19.205H5V18.285L14.06 9.22505ZM17.66 3.20505C17.41 3.20505 17.15 3.30505 16.96 3.49505L15.13 5.32505L18.88 9.07505L20.71 7.24505C20.8027 7.15253 20.8762 7.04265 20.9264 6.92167C20.9766 6.8007 21.0024 6.67102 21.0024 6.54005C21.0024 6.40908 20.9766 6.2794 20.9264 6.15842C20.8762 6.03745 20.8027 5.92756 20.71 5.83505L18.37 3.49505C18.17 3.29505 17.92 3.20505 17.66 3.20505ZM14.06 6.39505L3 17.455V21.205H6.75L17.81 10.145L14.06 6.39505Z" fill="#765378"/>
        </svg>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={userEmail}
        />
      </Row>

      <div className="profile-image">
        {/* <img src={profileImage} alt="Profile" className="profile" /> */}
      </div>

      <h2 id="name-alex">{firstName} {lastName}</h2>
      <p>
        <strong>Email:</strong> <br />
        {userEmail}
      </p>

      <button
        onClick={() => setIsPasswordModalOpen(true)}
        className="change-password-btn"
      >
        Change Password
      </button>

      {/* ✅ مودال تغيير كلمة المرور */}
      {isPasswordModalOpen && (
        <Row className="modal-overlay">
          <div className="modal-content">
            <h2>Change Password</h2>

            <label>Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              id="profile-input"
            />

            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              id="profile-input"
            />

            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              id="profile-input"
            />

            <Row className="btns-save-close">
              <button id="save-btn" onClick={handlePasswordChange}>Save</button>
              <button id="close-btn" onClick={() => setIsPasswordModalOpen(false)}>Close</button>
            </Row>
          </div>
        </Row>
      )}
    </div>
  );
};

export default ProfileDetails;
