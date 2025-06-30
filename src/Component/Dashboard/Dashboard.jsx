// import React from 'react';
// import './Dashboard.css';
// import './common.css';
// import {SideNav} from './SideNav';


// const Dashboard = () => {
//   return (
//     <>
    
//     <div className="dashboard-container">
//       <SideNav />
//       <main className="dashboard-content">
//         <div className="welcome-section">
//           <h1 className='welcome'>Welcome to the Admin Dashboard</h1>
//           <p className='here-txt'>Here, you can manage users, courses, and generate reports.</p>
          
//           <div className="stats-container">
//             <div className="stat-card">
//               <h3>Total Users</h3>
//               <div className="stat-value">88</div>
//             </div>
            
//             <div className="stat-card">
//               <h3>Total Courses</h3>
//               <div className="stat-value">6</div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//     </>
//   );
// };

// export  {Dashboard};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import './common.css';
import { SideNav } from './SideNav';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    loading: true,
    error: null
  });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'Admin') {
      window.location.href = '/login';
      return;
    }
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No access token found');
        }

        const response = await axios.get('https://localhost:7217/api/dashboard/system-stats', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.data.success) {
          setStats({
            totalUsers: response.data.data.totalUsers,
            totalCourses: response.data.data.totalCourses,
            loading: false,
            error: null
          });
        } else {
          throw new Error(response.data.message || 'Invalid response from server');
        }
      } catch (error) {
        console.error('API Error:', error);
        
        let errorMessage = 'Failed to fetch dashboard data';
        if (error.response) {
          // Server responded with a status code outside 2xx
          errorMessage = error.response.data.message || 
                         `Server error: ${error.response.status}`;
        } else if (error.request) {
          // Request was made but no response received
          errorMessage = 'No response from server';
        }

        setStats(prev => ({
          ...prev,
          loading: false,
          error: errorMessage
        }));

        // إذا كان الخطأ 401 غير مصرح به، توجيه إلى صفحة تسجيل الدخول
        if (error.response?.status === 401) {
          window.location.href = '/login';
        }
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <SideNav />
      <main className="dashboard-content">
        <div className="welcome-section">
          <h1 className='welcome'>Welcome to the Admin Dashboard</h1>
          <p className='here-txt'>Here, you can manage users, courses, and generate reports.</p>
          
          {stats.loading ? (
            <div className="stats-container">
              <div className="stat-card">
                <div className="spinner"></div>
                <p>Loading data...</p>
              </div>
            </div>
          ) : stats.error ? (
            <div className="stats-container">
              <div className="stat-card error-card">
                <h3>Error</h3>
                <p className="error-message">{stats.error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="retry-button"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <div className="stats-container">
              <div className="stat-card">
                <h3>Total Users</h3>
                <div className="stat-value">{stats.totalUsers}</div>
              </div>
              
              <div className="stat-card">
                <h3>Total Courses</h3>
                <div className="stat-value">{stats.totalCourses}</div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export { Dashboard };