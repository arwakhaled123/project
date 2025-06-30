import axios from 'axios';

const API_BASE_URL = 'https://localhost:7217/api/profile';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

// إضافة interceptor لتحديث الرأس
apiService.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  // الحصول على بيانات الملف الشخصي
  getProfile() {
    return apiService.get('/');
  },

  // تحديث الملف الشخصي
  updateProfile(data) {
    return apiService.post('/update', data);
  },

  // الحصول على الكورسات المسجلة
  getMyCourses() {
    return apiService.get('/my-courses');
  },

  // الحصول على الكورسات المفضلة
  getFavoriteCourses() {
    return apiService.get('/favorite-courses');
  },

  // إضافة/إزالة من المفضلة
  toggleFavorite(courseId, isFavorite) {
    return isFavorite 
      ? apiService.delete(`/favorites/${courseId}`)
      : apiService.post(`/favorites/${courseId}`);
  },

  // رفع صورة الملف الشخصي
  uploadPhoto(file) {
    const formData = new FormData();
    formData.append('file', file);
    return apiService.post('/upload-photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  // حذف صورة الملف الشخصي
  deletePhoto() {
    return apiService.delete('/delete-photo');
  },

  // الحصول على الإحصائيات
  getStats() {
    return apiService.get('/stats');
  },

  // تغيير الاسم
  changeName(data) {
    return apiService.post('/change-name', data);
  },

  // تغيير كلمة المرور
  changePassword(data) {
    return apiService.post('/change-password', data);
  },

  // بيانات لوحة التحكم
  getDashboard() {
    return apiService.get('/dashboard');
  },

  // تسجيل الدفع
  registerPayment(data) {
    return apiService.post('/pay-course', data);
  },

  // تأكيد الدفع
  confirmPayment(paymentId) {
    return apiService.post(`/confirm-payment/${paymentId}`);
  },

  // النشاطات الحديثة
  getRecentActivities() {
    return apiService.get('/recent-activities');
  }
};