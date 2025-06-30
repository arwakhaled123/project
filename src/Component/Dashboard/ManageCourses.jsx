// import React from 'react';
// import './ManageCourses.css';
// import './common.css';
// import {SideNav} from './SideNav';
// import { useState } from 'react';
// import {CourseFormPopup} from './CourseFormPopup';




// const ManageCourses = () => {
  
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const openPopup = (course) => {
//     setSelectedCourse(course);
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };


//   const courses = [
//     {
//       id: 1,
//       name: 'UI Design Principles',
//       image: '/images/ui-design.jpg',
//       price: '800 L.E',
//       discount: '0 L.E'
//     },
//     {
//       id: 2,
//       name: 'OOP C++',
//       image: '/images/oop-cpp.jpg',
//       price: '500 L.E',
//       discount: '120 L.E'
//     },
//     {
//       id: 3,
//       name: 'AI Developer',
//       image: '/images/ai-developer.jpg',
//       price: '2000 L.E',
//       discount: '500 L.E'
//     },
//     {
//       id: 4,
//       name: 'Graphic Design',
//       image: '/images/graphic-design.jpg',
//       price: '600 L.E',
//       discount: '0 L.E'
//     }
//   ];

//   return (
//     <div className="dashboard-container">
//       <SideNav />
//       <main className="dashboard-content">
//         <div className="courses-header">
          
//           <div className="search-container">
//             <input type="text" placeholder="Search" className="search-input" />
//             <button className="search-button">
//               <i className="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
//               <rect x="1.16422" y="0.456213" width="34.1262" height="34.1262" rx="17.0631" fill="#CDB4DB"/>
//               <rect x="1.16422" y="0.456213" width="34.1262" height="34.1262" rx="17.0631" stroke="#EEE6F2" stroke-width="0.832347"/>
//               <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4105 21.264C24.708 19.5905 25.3195 17.4853 25.1206 15.3768C24.9217 13.2682 23.9273 11.3147 22.3397 9.91358C20.7521 8.51247 18.6906 7.76905 16.5745 7.83455C14.4585 7.90006 12.4468 8.76957 10.9488 10.2662C9.44957 11.7639 8.57757 13.7771 8.51052 15.8956C8.44348 18.0141 9.18644 20.0785 10.588 21.668C11.9896 23.2576 13.9443 24.2526 16.0538 24.4505C18.1632 24.6483 20.2688 24.034 21.9412 22.7328L21.986 22.7796L26.4 27.1965C26.4967 27.2932 26.6114 27.3699 26.7377 27.4222C26.8641 27.4746 26.9994 27.5015 27.1362 27.5015C27.2729 27.5015 27.4083 27.4746 27.5346 27.4222C27.6609 27.3699 27.7757 27.2932 27.8724 27.1965C27.969 27.0997 28.0457 26.9849 28.098 26.8586C28.1504 26.7322 28.1773 26.5968 28.1773 26.46C28.1773 26.3232 28.1504 26.1878 28.098 26.0614C28.0457 25.935 27.969 25.8202 27.8724 25.7235L23.4573 21.3077L23.4105 21.264ZM21.2503 11.7392C21.8378 12.3174 22.305 13.0063 22.6251 13.7661C22.9451 14.5259 23.1116 15.3415 23.115 16.166C23.1183 16.9905 22.9585 17.8075 22.6446 18.5698C22.3308 19.3322 21.8692 20.0249 21.2864 20.6079C20.7036 21.1909 20.0112 21.6527 19.2492 21.9666C18.4871 22.2806 17.6704 22.4405 16.8463 22.4372C16.0221 22.4338 15.2068 22.2672 14.4473 21.9471C13.6878 21.6269 12.9992 21.1595 12.4212 20.5718C11.2661 19.3972 10.6218 17.8137 10.6285 16.166C10.6352 14.5183 11.2924 12.9401 12.457 11.775C13.6216 10.6099 15.1993 9.9524 16.8463 9.94569C18.4933 9.93898 20.0762 10.5836 21.2503 11.7392Z" fill="white"/>
//             </svg></i>
//             </button>
//           </div>
//         </div>
//         <div className="header-title">
//         <h1 className='mng-course'>Manage Courses</h1>
//         </div>
//         <div className="action-buttons">
//           <button className="create-section-btn">Create Section</button>
//         </div>
        
//         <div className="courses-table">
//           <div className="table-header">
//             <div className="header-col id-col">#</div>
//             <div className="header-col name-col">Course Name</div>
//             <div className="header-col price-col">Price</div>
//             <div className="header-col discount-col">Discount</div>
//             <div className="header-col actions-col">Actions</div>
//           </div>
          
//           {courses.map(course => (
//             <div className="course-row" key={course.id}>
//               <div className="course-col id-col">{course.id}</div>
//               <div className="course-col name-col">
//                 <div className="course-info">
//                   <img src={course.image} alt={course.name} className="course-thumbnail" />
//                   <span>{course.name}</span>
//                 </div>
//               </div>
//               <div className="course-col price-col">{course.price}</div>
//               <div className="course-col discount-col">{course.discount}</div>
//               <div className="course-col actions-col">
//                 <button className="action-button" onClick={() => openPopup(course)}>⋮</button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <CourseFormPopup 
//           isOpen={isPopupOpen} 
//           onClose={closePopup} 
//           courseData={selectedCourse}
//         />
//       </main>
//     </div>
//   );
// };

// export {ManageCourses};



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageCourses.css';
import { SideNav } from './SideNav';
import { CourseFormPopup } from './CourseFormPopup';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 10,
    hasMore: false
  });

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://localhost:7217/api/courses', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        params: {
          pageNumber: pagination.pageNumber,
          pageSize: pagination.pageSize,
          searchTerm: searchTerm
        }
      });

      const formattedCourses = response.data.data.map(course => ({
        id: course.courseId,
        name: course.courseName,
        image: course.courseImage || '/images/default-course.jpg',
        price: `${course.coursePrice} L.E`,
        discount: '0 L.E',
        isActive: course.isActive,
        description: course.description
      }));

      setCourses(formattedCourses);
      setPagination({
        ...pagination,
        hasMore: response.data.pagination?.hasMore || false
      });
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setLoading(false);
      console.error('Error fetching courses:', err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [pagination.pageNumber, searchTerm]);

  const handleCreateCourse = async (courseData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://localhost:7217/api/courses', {
        courseName: courseData.name,
        description: courseData.description,
        coursePrice: parseFloat(courseData.price.replace(' L.E', '')),
        isActive: true
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // Refresh the course list
      fetchCourses();
      setIsPopupOpen(false);
    } catch (err) {
      console.error('Error creating course:', err);
      alert(err.response?.data?.message || 'Failed to create course. Please try again.');
    }
  };

  const handleUpdateCourse = async (courseData) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`https://localhost:7217/api/courses/${courseData.id}`, {
        courseName: courseData.name,
        description: courseData.description,
        coursePrice: parseFloat(courseData.price.replace(' L.E', '')),
        isActive: courseData.isActive
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // Refresh the course list
      fetchCourses();
      setIsPopupOpen(false);
    } catch (err) {
      console.error('Error updating course:', err);
      alert(err.response?.data?.message || 'Failed to update course. Please try again.');
    }
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`https://localhost:7217/api/courses/${courseId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setCourses(courses.filter(course => course.id !== courseId));
      } catch (err) {
        console.error('Error deleting course:', err);
        alert(err.response?.data?.message || 'Failed to delete course. Please try again.');
      }
    }
  };

  const handleToggleStatus = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`https://localhost:7217/api/courses/${courseId}/toggle-status`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Refresh the course list
      fetchCourses();
    } catch (err) {
      console.error('Error toggling course status:', err);
      alert(err.response?.data?.message || 'Failed to toggle course status. Please try again.');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCourses();
  };

  const openCreatePopup = () => {
    setSelectedCourse(null);
    setIsPopupOpen(true);
  };

  const openEditPopup = (course) => {
    setSelectedCourse(course);
    setIsPopupOpen(true);
  };

  if (loading && pagination.pageNumber === 1) return <div className="loading-message">Loading courses...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <SideNav />
      <main className="dashboard-content">
        <div className="courses-header">
          <div className="search-container">
            <form onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="search-input" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="search-button">
                <i className="search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                    <rect x="1.16422" y="0.456213" width="34.1262" height="34.1262" rx="17.0631" fill="#CDB4DB"/>
                    <rect x="1.16422" y="0.456213" width="34.1262" height="34.1262" rx="17.0631" stroke="#EEE6F2" strokeWidth="0.832347"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.4105 21.264C24.708 19.5905 25.3195 17.4853 25.1206 15.3768C24.9217 13.2682 23.9273 11.3147 22.3397 9.91358C20.7521 8.51247 18.6906 7.76905 16.5745 7.83455C14.4585 7.90006 12.4468 8.76957 10.9488 10.2662C9.44957 11.7639 8.57757 13.7771 8.51052 15.8956C8.44348 18.0141 9.18644 20.0785 10.588 21.668C11.9896 23.2576 13.9443 24.2526 16.0538 24.4505C18.1632 24.6483 20.2688 24.034 21.9412 22.7328L21.986 22.7796L26.4 27.1965C26.4967 27.2932 26.6114 27.3699 26.7377 27.4222C26.8641 27.4746 26.9994 27.5015 27.1362 27.5015C27.2729 27.5015 27.4083 27.4746 27.5346 27.4222C27.6609 27.3699 27.7757 27.2932 27.8724 27.1965C27.969 27.0997 28.0457 26.9849 28.098 26.8586C28.1504 26.7322 28.1773 26.5968 28.1773 26.46C28.1773 26.3232 28.1504 26.1878 28.098 26.0614C28.0457 25.935 27.969 25.8202 27.8724 25.7235L23.4573 21.3077L23.4105 21.264ZM21.2503 11.7392C21.8378 12.3174 22.305 13.0063 22.6251 13.7661C22.9451 14.5259 23.1116 15.3415 23.115 16.166C23.1183 16.9905 22.9585 17.8075 22.6446 18.5698C22.3308 19.3322 21.8692 20.0249 21.2864 20.6079C20.7036 21.1909 20.0112 21.6527 19.2492 21.9666C18.4871 22.2806 17.6704 22.4405 16.8463 22.4372C16.0221 22.4338 15.2068 22.2672 14.4473 21.9471C13.6878 21.6269 12.9992 21.1595 12.4212 20.5718C11.2661 19.3972 10.6218 17.8137 10.6285 16.166C10.6352 14.5183 11.2924 12.9401 12.457 11.775C13.6216 10.6099 15.1993 9.9524 16.8463 9.94569C18.4933 9.93898 20.0762 10.5836 21.2503 11.7392Z" fill="white"/>
                  </svg>
                </i>
              </button>
            </form>
          </div>
        </div>
        <div className="header-title">
          <h1 className='mng-course'>Manage Courses</h1>
        </div>
        <div className="action-buttons">
          <button className="create-section-btn" onClick={openCreatePopup}>
            Create New Course
          </button>
        </div>
        
        <div className="courses-table">
          <div className="table-header">
            <div className="header-col id-col">#</div>
            <div className="header-col name-col">Course Name</div>
            <div className="header-col price-col">Price</div>
            <div className="header-col discount-col">Status</div>
            <div className="header-col actions-col">Actions</div>
          </div>
          
          {courses.length > 0 ? (
            <>
              {courses.map(course => (
                <div className="course-row" key={course.id}>
                  <div className="course-col id-col">{course.id}</div>
                  <div className="course-col name-col">
                    <div className="course-info">
                      <img src={course.image} alt={course.name} className="course-thumbnail" />
                      <span>{course.name}</span>
                    </div>
                  </div>
                  <div className="course-col price-col">{course.price}</div>
                  <div className="course-col discount-col">
                    <span className={`status-badge ${course.isActive ? 'active' : 'inactive'}`}>
                      {course.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="course-col actions-col">
                    <button 
                      className="action-button" 
                      onClick={() => openEditPopup(course)}
                    >
                      Edit
                    </button>
                    <button 
                      className="action-button" 
                      onClick={() => handleToggleStatus(course.id)}
                    >
                      {course.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                    <button 
                      className="action-button danger" 
                      onClick={() => handleDeleteCourse(course.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {pagination.hasMore && (
                <div className="load-more">
                  <button 
                    onClick={() => setPagination({
                      ...pagination,
                      pageNumber: pagination.pageNumber + 1
                    })}
                    className="load-more-btn"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="no-courses">
              No courses found. Create your first course!
            </div>
          )}
        </div>
        <CourseFormPopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
          onSubmit={selectedCourse ? handleUpdateCourse : handleCreateCourse}
          courseData={selectedCourse}
        />
      </main>
    </div>
  );
};

export { ManageCourses };