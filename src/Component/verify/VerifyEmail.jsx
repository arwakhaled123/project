

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "./verifyEmail.css";


// // function VerifyEmail() {
// //   const [otp, setOtp] = useState(new Array(6).fill("")); // 6-digit OTP
// //   const [error, setError] = useState(""); // Error message
// //   const [loading, setLoading] = useState(false); // Loading state
// //   const [resendLoading, setResendLoading] = useState(false); // Resend loading state
// //   const [resendTimeout, setResendTimeout] = useState(null); // Resend timer
// //   const navigate = useNavigate();

// //   // Handle OTP input change
// //   const handleChange = (element, index) => {
// //     const value = element.value.replace(/\D/, ""); // Allow only numbers
// //     if (value.length > 1) return;
// //     const newOtp = [...otp];
// //     newOtp[index] = value;
// //     setOtp(newOtp);

// //     // Move to the next input field automatically
// //     if (value && element.nextSibling) {
// //       element.nextSibling.focus();
// //     }
// //   };

// //   // Handle OTP submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     const otpCode = otp.join("");
// //     if (otpCode.length !== 6) {
// //       setError("Please enter a 6-digit code");
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       console.log("Sending OTP:", otpCode); // Debug log
// //       const response = await axios.post("https://localhost:7217/api/Auth/verify-account", {
// //         verificationCode: otpCode,
// //       });

// //       console.log("API Response:", response.data); // Debug log
// //       if (response.data.success) {
// //         setError("");
// //         navigate("/home"); // Redirect to home after verification
// //       }
// //     } catch (err) {
// //       console.error("API Error:", err.response?.data || err.message); // Debug log
// //       const errorMsg = err.response?.data?.message || "Invalid or expired verification code";
// //       setError(errorMsg);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Handle resend verification code
// //   const handleResend = async () => {
// //     if (resendTimeout) return; // Prevent multiple resends

// //     setResendLoading(true);
// //     setError("");

// //     try {
// //       console.log("Resending verification code"); // Debug log
// //       const response = await axios.post("https://localhost:7217/api/Auth/resend-verification-code");

// //       console.log("Resend Response:", response.data); // Debug log
// //       if (response.data.success) {
// //         setError("");
// //         setResendTimeout(60); // Set 60-second cooldown
// //       }
// //     } catch (err) {
// //       console.error("Resend Error:", err.response?.data || err.message); // Debug log
// //       setError("Failed to resend verification code. Please try again later.");
// //     } finally {
// //       setResendLoading(false);
// //     }
// //   };

// //   // Resend timer countdown
// //   useEffect(() => {
// //     let timer;
// //     if (resendTimeout && resendTimeout > 0) {
// //       timer = setInterval(() => {
// //         setResendTimeout((prev) => prev - 1);
// //       }, 1000);
// //     } else if (resendTimeout === 0) {
// //       setResendTimeout(null);
// //     }
// //     return () => clearInterval(timer);
// //   }, [resendTimeout]);

// //   return (
// //     < div className="verifyEmail">
// //       <div className="verifyEmailContainer">
// //         <h2 id="Enter-code">Enter the code</h2>
// //         <p>
// //           Enter the code that we sent to your email <span>******@gmail.com</span>.
// //           Be careful not to share the code with anyone!
// //         </p>

// //         {/* Error Message */}
// //         {error && <p className="error">{error}</p>}

// //         <form className="otp-form" onSubmit={handleSubmit}>
// //           {otp.map((value, index) => (
// //             <input
// //               key={index}
// //               type="text"
// //               className="otpInput"
// //               value={value}
// //               onChange={(e) => handleChange(e.target, index)}
// //               onKeyDown={(e) => {
// //                 if (e.key === "Backspace" && !value && e.target.previousSibling) {
// //                   e.target.previousSibling.focus();
// //                 }
// //               }}
// //               maxLength="1"
// //               disabled={loading}
// //             />
// //           ))}
        
// //           <center id="verify">
// //             <button
// //               type="submit"
// //               className="verify-button"
// //               id="verify"
// //               disabled={loading || otp.join("").length !== 6}
// //             >
// //               {loading ? "Verifying..." : "Verify"}
// //             </button>
// //           </center>
// //         </form>

// //         <span id="received">
// //           Have not received the OTP yet?{" "}
// //           <span
// //             id="resend-button"
// //             onClick={handleResend}
// //             style={{ cursor: resendTimeout ? "not-allowed" : "pointer", color: resendTimeout ? "#888" : "#000" }}
// //           >
// //             {resendLoading ? "Resending..." : resendTimeout ? `Resend in ${resendTimeout}s` : "Resend again"}
// //           </span>
// //         </span>
// //       </div>
// //     </div>
// //   );
// // }

// // export default VerifyEmail;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./verifyEmail.css";

// function VerifyEmail() {
//   const [otp, setOtp] = useState(new Array(6).fill("")); // 6-digit OTP
//   const [error, setError] = useState(""); // Error message
//   const [loading, setLoading] = useState(false); // Loading state
//   const [resendLoading, setResendLoading] = useState(false); // Resend loading state
//   const [resendTimeout, setResendTimeout] = useState(null); // Resend timer
//   const navigate = useNavigate();

//   // Handle OTP input change
//   const handleChange = (element, index) => {
//     const value = element.value.replace(/\D/, ""); // Allow only numbers
//     if (value.length > 1) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Move to the next input field automatically
//     if (value && element.nextSibling) {
//       element.nextSibling.focus();
//     }
//   };

//   // Handle OTP submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const otpCode = otp.join("");
//     if (otpCode.length !== 6) {
//       setError("Please enter a 6-digit code");
//       setLoading(false);
//       return;
//     }

//     try {
//       console.log("Sending OTP:", otpCode); // Debug log
//       const response = await axios.post("https://localhost:7217/api/Auth/verify-account", {
//         verificationCode: otpCode,
//       }, {
//         withCredentials: true, // Ensure cookies are sent
//       });

//       console.log("API Response:", response.data); // Debug log
//       if (response.data.success) {
//         setError("");
//         navigate("/home"); // Redirect to home after verification
//       }
//     } catch (err) {
//     console.error("API Error:", err.response?.data || err.message);
//     const errorMsg = err.response?.data?.message || "Invalid or expired verification code";
//     setError(errorMsg);
    
//     // If code expired, suggest resend
//     if (err.response?.data?.code === 'AUTH_004') {
//         setError(`${errorMsg} Click 'Resend again' to get a new code.`);
//     }
//     }finally {
//       setLoading(false);
//     }
//   };

//   // Handle resend verification code
//   const handleResend = async () => {
//     if (resendTimeout) return;

//     // Check cookie exists
//     const hasCookie = document.cookie.includes('EmailForVerification');
//     if (!hasCookie) {
//         setError('Verification session expired. Please sign up again.');
//         navigate('/sign-up');
//         return;
//     }

//     setResendLoading(true);
//     setError("");

//     try {
//         const response = await axios.post(
//             "https://localhost:7217/api/Auth/resend-verification-code", 
//             {}, 
//             { withCredentials: true }
//         );

//         if (response.data.success) {
//             setError("");
//             setResendTimeout(60);
//             setOtp(new Array(6).fill("")); // Clear OTP fields
//         }
//     } catch (err) {
//         const errorMsg = err.response?.data?.message || "Failed to resend. Please try again later.";
//         setError(errorMsg);
//     } finally {
//         setResendLoading(false);
//     }
// };

//   // Resend timer countdown
//   useEffect(() => {
//     let timer;
//     if (resendTimeout && resendTimeout > 0) {
//       timer = setInterval(() => {
//         setResendTimeout((prev) => prev - 1);
//       }, 1000);
//     } else if (resendTimeout === 0) {
//       setResendTimeout(null);
//     }
//     return () => clearInterval(timer);
//   }, [resendTimeout]);

//   return (
//     <div id="Body">
//       <div className="verifyEmailContainer">
//         <h2 id="Enter-code">Enter the code</h2>
//         <p>
//           Enter the code that we sent to your email <span>******@gmail.com</span>.
//           Be careful not to share the code with anyone!
//         </p>

//         {/* Error Message */}
//         {error && <p className="error">{error}</p>}

//         <form className="otp-form" onSubmit={handleSubmit}>
//           {otp.map((value, index) => (
//             <input
//               key={index}
//               type="text"
//               className="otpInput"
//               value={value}
//               onChange={(e) => handleChange(e.target, index)}
//               onKeyDown={(e) => {
//                 if (e.key === "Backspace" && !value && e.target.previousSibling) {
//                   e.target.previousSibling.focus();
//                 }
//               }}
//               maxLength="1"
//               disabled={loading}
//             />
//           ))}
//           <center id="verify">
//             <button
//               type="submit"
//               className="verify-button"
//               id="verify"
//               disabled={loading || otp.join("").length !== 6}
//             >
//               {loading ? "Verifying..." : "Verify"}
//             </button>
//           </center>
//         </form>

//         <span id="received">
//           Have not received the OTP yet?{" "}
//           <span
//             id="resend-button"
//             onClick={handleResend}
//             style={{ cursor: resendTimeout ? "not-allowed" : "pointer", color: resendTimeout ? "#888" : "#000" }}
//           >
//             {resendLoading ? "Resending..." : resendTimeout ? `Resend in ${resendTimeout}s` : "Resend again"}
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default VerifyEmail;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./verifyEmail.css";

function VerifyEmail() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendTimeout, setResendTimeout] = useState(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // دالة لقراءة الكوكي
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
    return null;
  };

  useEffect(() => {
    // الحصول على البريد الإلكتروني من الكوكي عند تحميل المكون
    const emailFromCookie = getCookie('EmailForVerification');
    if (!emailFromCookie) {
      setError("Verification session expired. Please sign up again.");
      setTimeout(() => navigate("/sign-up"), 3000);
      return;
    }
    setEmail(emailFromCookie);
  }, [navigate]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, ""); // السماح بالأرقام فقط
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // الانتقال تلقائياً للحقل التالي عند إدخال قيمة
    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      setError("Please enter a 6-digit code");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://localhost:7217/api/Auth/verify-account",
        {
          verificationCode: otpCode,
          email: email,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        // حذف الكوكي عند التحقق الناجح
        document.cookie = 'EmailForVerification=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        setError("");
        navigate("/home-course");
      }
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message);
      const errorMsg = err.response?.data?.message || "Invalid or expired verification code";
      setError(errorMsg);
      
      if (err.response?.data?.code === 'AUTH_004') {
        setError(`${errorMsg} Click 'Resend again' to get a new code.`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendTimeout) return;

    if (!email) {
      setError('Verification session expired. Please sign up again.');
      navigate('/sign-up');
      return;
    }

    setResendLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://localhost:7217/api/Auth/resend-verification-code",
        { email },
        { withCredentials: true }
      );

      if (response.data.success) {
        setError("");
        setResendTimeout(60);
        setOtp(new Array(6).fill(""));
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to resend. Please try again later.";
      setError(errorMsg);
    } finally {
      setResendLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (resendTimeout && resendTimeout > 0) {
      timer = setInterval(() => {
        setResendTimeout((prev) => prev - 1);
      }, 1000);
    } else if (resendTimeout === 0) {
      setResendTimeout(null);
    }
    return () => clearInterval(timer);
  }, [resendTimeout]);

  // إخفاء جزء من البريد الإلكتروني لعرضه للمستخدم
  const maskedEmail = email ? 
    email.replace(/(.{2})(.*)(@.*)/, (match, p1, p2, p3) => 
      p1 + p2.replace(/./g, '*') + p3
    ) : '******';

  return (
    <div id="Body">
      <div className="verifyEmailContainer">
        <h2 id="Enter-code">Enter the code</h2>
        <p>
          Enter the 6-digit code that we sent to your email <span>{maskedEmail}</span>.
          Be careful not to share the code with anyone!
        </p>

        {error && <p className="error">{error}</p>}

        <form className="otp-form" onSubmit={handleSubmit}>
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              className="otpInput"
              value={value}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !value && e.target.previousSibling) {
                  e.target.previousSibling.focus();
                }
              }}
              maxLength="1"
              disabled={loading}
              inputMode="numeric"
              autoFocus={index === 0}
            />
          ))}
          <center id="verify">
            <button
              type="submit"
              className="verify-button"
              id="verify"
              disabled={loading || otp.join("").length !== 6}
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </center>
        </form>

        <span id="received">
          Haven't received the OTP yet?{" "}
          <span
            id="resend-button"
            onClick={handleResend}
            style={{ 
              cursor: resendTimeout ? "not-allowed" : "pointer", 
              color: resendTimeout ? "#888" : "#000",
              textDecoration: resendTimeout ? "none" : "underline"
            }}
          >
            {resendLoading ? "Resending..." : 
             resendTimeout ? `Resend in ${resendTimeout}s` : "Resend again"}
          </span>
        </span>
      </div>
    </div>
  );
}

export default VerifyEmail;