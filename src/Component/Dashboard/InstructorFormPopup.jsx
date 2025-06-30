import React, { useState } from 'react';
import './InstructorFormPopup.css';

const InstructorFormPopup = ({ isOpen, onClose, onSubmit, regularUsers }) => {
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (e) => {
    const userId = e.target.value;
    setSelectedUserId(userId);
    
    const user = regularUsers.find(u => u.userId.toString() === userId);
    setSelectedUser(user || null);
  };

  const handleSubmit = () => {
    if (!selectedUserId || !selectedUser) {
      alert('Please select a valid user');
      return;
    }

    onSubmit({
      userId: selectedUserId,
      name: selectedUser.name,
      email: selectedUser.email
    });
  };

  const handleCancel = () => {
    setSelectedUserId('');
    setSelectedUser(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content instructor-popup">
        <h2 className="popup-title">Promote User to Instructor</h2>
        
        <div className="form-group">
          <label className="popup-label">Select Regular User</label>
          <select
            value={selectedUserId}
            onChange={handleUserSelect}
            className="user-select"
          >
            <option value="">-- Select a user --</option>
            {regularUsers.map(user => (
              <option key={user.userId} value={user.userId}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>

        {selectedUser && (
          <div className="user-details">
            <h3>User Details</h3>
            <div className="detail-row">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{selectedUser.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{selectedUser.email}</span>
            </div>
          </div>
        )}

        <div className="button-group">
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button 
            className="confirm-btn" 
            onClick={handleSubmit}
            disabled={!selectedUser}
          >
            Promote to Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export { InstructorFormPopup };