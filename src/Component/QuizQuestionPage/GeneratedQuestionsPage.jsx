// // // // import React, { useState, useEffect } from 'react';
// // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // import './GeneratedQuestionsPage.css';

// // // // export default function GeneratedQuestionsPage() {
// // // //   const [questions, setQuestions] = useState([]);
// // // //   const [selected, setSelected] = useState({});
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();
// // // //   const courseId = new URLSearchParams(location.search).get("courseId");
// // // //   const token = localStorage.getItem("token") || "";
// // // //   const userId = localStorage.getItem("userId") || "";

// // // //   const fetchGeneratedQuestions = async () => {
// // // //     try {
// // // //       const response = await fetch(`http://localhost:5000/generate-questions?courseId=${courseId}&userId=${userId}`);
// // // //       const data = await response.json();
// // // //       setQuestions(data.questions);
// // // //     } catch (error) {
// // // //       console.error("Error fetching questions:", error);
// // // //     }
// // // //   };

// // // //   const toggleSelect = (index) => {
// // // //     setSelected(prev => ({ ...prev, [index]: !prev[index] }));
// // // //   };

// // // //   const saveAndReturn = () => {
// // // //     const selectedQuestions = questions.filter((_, idx) => selected[idx]);
// // // //     localStorage.setItem("selectedFlaskQuestions", JSON.stringify(selectedQuestions));
// // // //     navigate(`/quiz-question-page?courseId=${courseId}`);
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchGeneratedQuestions();
// // // //   }, []);

// // // //   return (
// // // //     <div className="generated-page">
// // // //       <div className="header">
// // // //         <h2>Generated Questions</h2>
// // // //         <button onClick={fetchGeneratedQuestions}>🔄 Regenerate</button>
// // // //       </div>

// // // //       <div className="question-list">
// // // //         {questions.map((q, i) => (
// // // //           <div key={i} className="question-card">
// // // //             <input
// // // //               type="checkbox"
// // // //               checked={!!selected[i]}
// // // //               onChange={() => toggleSelect(i)}
// // // //             />
// // // //             <div className="question-text">{q.text}</div>
// // // //             <ul>
// // // //               {q.options && q.options.map((opt, j) => <li key={j}>{opt}</li>)}
// // // //             </ul>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <div className="footer">
// // // //         <button className="done-button" onClick={saveAndReturn}>
// // // //           ✅ Save Selected & Return
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';
// // // import './GeneratedQuestionsPage.css';

// // // export default function GeneratedQuestionsPage() {
// // //   const [questions, setQuestions] = useState([]);
// // //   const [selected, setSelected] = useState({});
// // //   const [numQuestions, setNumQuestions] = useState(5);
// // //   const [difficulty, setDifficulty] = useState("medium");
// // //   const [topic, setTopic] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [chatLog, setChatLog] = useState([]);
// // //   const [chatInput, setChatInput] = useState("");
// // //   const [file, setFile] = useState(null);

// // //   const navigate = useNavigate();
// // //   const location = useLocation();
// // //   const courseId = new URLSearchParams(location.search).get("courseId");
// // //   const userId = localStorage.getItem("userId") || "";

// // //   useEffect(() => {
// // //     const savedNum = localStorage.getItem("numQuestions");
// // //     const savedDiff = localStorage.getItem("difficulty");
// // //     if (savedNum) setNumQuestions(parseInt(savedNum));
// // //     if (savedDiff) setDifficulty(savedDiff);

// // //     const saved = localStorage.getItem("selectedFlaskQuestions");
// // //     if (saved) {
// // //       try {
// // //         setQuestions(JSON.parse(saved));
// // //         localStorage.removeItem("selectedFlaskQuestions");
// // //       } catch (err) {
// // //         console.error("Failed to parse saved questions:", err);
// // //       }
// // //     }
// // //   }, []);

// // //   const handleNumChange = (e) => {
// // //     const value = e.target.value;
// // //     setNumQuestions(value);
// // //     localStorage.setItem("numQuestions", value);
// // //   };

// // //   const handleDiffChange = (e) => {
// // //     const value = e.target.value;
// // //     setDifficulty(value);
// // //     localStorage.setItem("difficulty", value);
// // //   };

// // //  const fetchFromFlask = async () => {
// // //   setLoading(true);
// // //   try {
// // //     const response = await fetch("http://localhost:5000/generate_questions", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({
// // //         num_questions: parseInt(numQuestions),
// // //         difficulty: difficulty
// // //       })
// // //     });

// // //     const data = await response.json();
// // //     const examQuestions = data.exam_data?.questions || [];
// // //     setQuestions(prev => [...prev, ...examQuestions]);
// // //   } catch (error) {
// // //     console.error("Error fetching questions:", error);
// // //   } finally {
// // //     setLoading(false);
// // //   }
// // // };


// // //   const generateAIQuestions = async () => {
// // //     const prompt = `Generate ${numQuestions} ${difficulty} multiple choice questions about ${topic || 'the course'}.`;
// // //     setLoading(true);
// // //     try {
// // //       const response = await fetch("http://localhost:11434/api/generate", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ model: "llama3", prompt: prompt, stream: false })
// // //       });
// // //       const data = await response.json();
// // //       const aiQuestions = parseQuestionsFromLLM(data.response);
// // //       setQuestions(prev => [...prev, ...aiQuestions]);
// // //     } catch (err) {
// // //       console.error("AI error:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const parseQuestionsFromLLM = (text) => {
// // //     // Placeholder: parse text to extract questions
// // //     return [
// // //       {
// // //         text: "What is AI?",
// // //         type: "mcq",
// // //         options: ["Artificial Intelligence", "Animal Instinct", "Auto Industry", "Apple Interface"],
// // //         correct_answer: "Artificial Intelligence"
// // //       }
// // //     ];
// // //   };

// // //   const toggleSelect = (index) => {
// // //     setSelected(prev => ({ ...prev, [index]: !prev[index] }));
// // //   };

// // //   const saveAndReturn = () => {
// // //     const selectedQuestions = questions.filter((_, idx) => selected[idx]);
// // //     localStorage.setItem("selectedFlaskQuestions", JSON.stringify(selectedQuestions));
// // //     navigate(`/quiz-question-page?courseId=${courseId}`);
// // //   };

// // //   const sendMessage = async () => {
// // //     if (!chatInput.trim()) return;
// // //     const userMsg = { role: "user", text: chatInput };
// // //     setChatLog(prev => [...prev, userMsg]);
// // //     setChatInput("");

// // //     try {
// // //       const res = await fetch("http://localhost:11434/api/chat", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ model: "llama3", messages: [{ role: "user", content: chatInput }] })
// // //       });
// // //       const data = await res.json();
// // //       const botMsg = { role: "bot", text: data.message.content };
// // //       setChatLog(prev => [...prev, botMsg]);
// // //     } catch (err) {
// // //       console.error("Chat error:", err);
// // //     }
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setFile(e.target.files[0]);
// // //   };

// // //   return (
// // //     <div className="generated-page">
// // //       <div className="header">
// // //         <h2>Generated Questions</h2>
// // //       </div>

// // //       <div className="generate-controls">
// // //         <input type="number" min="1" max="50" value={numQuestions} onChange={handleNumChange} />
// // //         <select value={difficulty} onChange={handleDiffChange}>
// // //           <option value="easy">Easy</option>
// // //           <option value="medium">Medium</option>
// // //           <option value="hard">Hard</option>
// // //         </select>
// // //         <input type="text" placeholder="Topic for AI" value={topic} onChange={(e) => setTopic(e.target.value)} />
// // //         <button onClick={fetchFromFlask}>🔥 Flask</button>
// // //         <button onClick={generateAIQuestions}>🔮 AI</button>
// // //       </div>

// // //       <div className="file-upload">
// // //         <label>Upload file:</label>
// // //         <input type="file" onChange={handleFileChange} />
// // //       </div>

// // //       {loading && <p>Loading...</p>}

// // //       <div className="question-list">
// // //         {questions.map((q, i) => (
// // //           <div key={i} className="question-card">
// // //             <input
// // //               type="checkbox"
// // //               checked={!!selected[i]}
// // //               onChange={() => toggleSelect(i)}
// // //             />
// // //             <div className="question-text">{q.text}</div>
// // //             <ul>
// // //               {q.options && q.options.map((opt, j) => <li key={j}>{opt}</li>)}
// // //             </ul>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {questions.length > 0 && (
// // //         <div className="footer">
// // //           <button className="done-button" onClick={saveAndReturn}>
// // //             ✅ Save & Return
// // //           </button>
// // //         </div>
// // //       )}

// // //       <div className="chat-container">
// // //         <div className="chat-log">
// // //           {chatLog.map((msg, idx) => (
// // //             <div key={idx} className={`chat-message ${msg.role}`}>
// // //               {msg.text}
// // //             </div>
// // //           ))}
// // //         </div>
// // //         <input
// // //           type="text"
// // //           value={chatInput}
// // //           onChange={(e) => setChatInput(e.target.value)}
// // //           placeholder="Ask something..."
// // //         />
// // //         <button onClick={sendMessage}>💬 Send</button>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import './GeneratedQuestionsPage.css';

// // export default function GeneratedQuestionsPage() {
// //   const [questions, setQuestions] = useState([]);
// //   const [selected, setSelected] = useState({});
// //   const [numQuestions, setNumQuestions] = useState(5);
// //   const [difficulty, setDifficulty] = useState("medium");
// //   const [topic, setTopic] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [chatLog, setChatLog] = useState([]);
// //   const [chatInput, setChatInput] = useState("");
// //   const [file, setFile] = useState(null);

// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const courseId = new URLSearchParams(location.search).get("courseId");
// //   const userId = localStorage.getItem("userId") || "";

// //   useEffect(() => {
// //     const savedNum = localStorage.getItem("numQuestions");
// //     const savedDiff = localStorage.getItem("difficulty");
// //     if (savedNum) setNumQuestions(parseInt(savedNum));
// //     if (savedDiff) setDifficulty(savedDiff);

// //     const saved = localStorage.getItem("selectedFlaskQuestions");
// //     if (saved) {
// //       try {
// //         setQuestions(JSON.parse(saved));
// //         localStorage.removeItem("selectedFlaskQuestions");
// //       } catch (err) {
// //         console.error("Failed to parse saved questions:", err);
// //       }
// //     }
// //   }, []);

// //   const handleNumChange = (e) => {
// //     const value = e.target.value;
// //     setNumQuestions(value);
// //     localStorage.setItem("numQuestions", value);
// //   };

// //   const handleDiffChange = (e) => {
// //     const value = e.target.value;
// //     setDifficulty(value);
// //     localStorage.setItem("difficulty", value);
// //   };

// //   const fetchFromFlask = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:5001/generate_questions", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         credentials: "include",
// //         body: JSON.stringify({
// //           num_questions: parseInt(numQuestions),
// //           difficulty: difficulty
// //         })
// //       });

// //       const data = await response.json();
// //       const examQuestions = data.exam_data?.questions || [];
// //       setQuestions(prev => [...prev, ...examQuestions]);
// //     } catch (error) {
// //       console.error("Error fetching questions:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const generateAIQuestions = async () => {
// //     const prompt = `Generate ${numQuestions} ${difficulty} multiple choice questions about ${topic || 'the course'}.`;
// //     setLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:11434/api/generate", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ model: "llama3", prompt: prompt, stream: false })
// //       });
// //       const data = await response.json();
// //       const aiQuestions = parseQuestionsFromLLM(data.response);
// //       setQuestions(prev => [...prev, ...aiQuestions]);
// //     } catch (err) {
// //       console.error("AI error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const parseQuestionsFromLLM = (text) => {
// //     // Placeholder: parse text to extract questions
// //     return [
// //       {
// //         text: "What is AI?",
// //         type: "mcq",
// //         options: ["Artificial Intelligence", "Animal Instinct", "Auto Industry", "Apple Interface"],
// //         correct_answer: "Artificial Intelligence"
// //       }
// //     ];
// //   };

// //   const toggleSelect = (index) => {
// //     setSelected(prev => ({ ...prev, [index]: !prev[index] }));
// //   };

// //   const saveAndReturn = () => {
// //     const selectedQuestions = questions.filter((_, idx) => selected[idx]);
// //     localStorage.setItem("selectedFlaskQuestions", JSON.stringify(selectedQuestions));
// //     navigate(`/quiz-question-page?courseId=${courseId}`);
// //   };

// //   const sendMessage = async () => {
// //     if (!chatInput.trim()) return;
// //     const userMsg = { role: "user", text: chatInput };
// //     setChatLog(prev => [...prev, userMsg]);
// //     setChatInput("");

// //     try {
// //       const res = await fetch("http://localhost:11434/api/chat", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ model: "llama3", messages: [{ role: "user", content: chatInput }] })
// //       });
// //       const data = await res.json();
// //       const botMsg = { role: "bot", text: data.message.content };
// //       setChatLog(prev => [...prev, botMsg]);
// //     } catch (err) {
// //       console.error("Chat error:", err);
// //     }
// //   };

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   return (
// //     <div className="generated-page">
// //       <div className="header">
// //         <h2>Generated Questions</h2>
// //       </div>

// //       <div className="generate-controls">
// //         <input type="number" min="1" max="50" value={numQuestions} onChange={handleNumChange} />
// //         <select value={difficulty} onChange={handleDiffChange}>
// //           <option value="easy">Easy</option>
// //           <option value="medium">Medium</option>
// //           <option value="hard">Hard</option>
// //         </select>
// //         <input type="text" placeholder="Topic for AI" value={topic} onChange={(e) => setTopic(e.target.value)} />
// //         <button onClick={fetchFromFlask}>🔥 Flask</button>
// //         <button onClick={generateAIQuestions}>🔮 AI</button>
// //       </div>

// //       <div className="file-upload">
// //         <label>Upload file:</label>
// //         <input type="file" onChange={handleFileChange} />
// //       </div>

// //       {loading && <p>Loading...</p>}

// //       <div className="question-list">
// //         {questions.map((q, i) => (
// //           <div key={i} className="question-card">
// //             <input
// //               type="checkbox"
// //               checked={!!selected[i]}
// //               onChange={() => toggleSelect(i)}
// //             />
// //             <div className="question-text">{q.text}</div>
// //             <ul>
// //               {q.options && q.options.map((opt, j) => <li key={j}>{opt}</li>)}
// //             </ul>
// //           </div>
// //         ))}
// //       </div>

// //       {questions.length > 0 && (
// //         <div className="footer">
// //           <button className="done-button" onClick={saveAndReturn}>
// //             ✅ Save & Return
// //           </button>
// //         </div>
// //       )}

// //       <div className="chat-container">
// //         <div className="chat-log">
// //           {chatLog.map((msg, idx) => (
// //             <div key={idx} className={`chat-message ${msg.role}`}>
// //               {msg.text}
// //             </div>
// //           ))}
// //         </div>
// //         <input
// //           type="text"
// //           value={chatInput}
// //           onChange={(e) => setChatInput(e.target.value)}
// //           placeholder="Ask something..."
// //         />
// //         <button onClick={sendMessage}>💬 Send</button>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from 'react';
// import './GeneratedQuestionsPage.css';

// export default function GeneratedQuestionsPage() {
//   const [chatLog, setChatLog] = useState([]);
//   const [chatInput, setChatInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [numQuestions, setNumQuestions] = useState(10);
//   const [difficulty, setDifficulty] = useState("medium");
//   const [questions, setQuestions] = useState([]);
//   const [selected, setSelected] = useState({});
//   const [examList, setExamList] = useState([]);
//   const [file, setFile] = useState(null);
//   const [isFileUploaded, setIsFileUploaded] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [sessionInitialized, setSessionInitialized] = useState(false);

//   const token = localStorage.getItem("token") || "";

//   const API_BASE = "http://localhost:5001";

//   useEffect(() => {
//     if (!sessionInitialized) {
//       initializeSession();
//     }
//   }, [sessionInitialized]);

//   const initializeSession = async () => {
//     try {
//       const response = await fetch(`${API_BASE}/`, {
//         credentials: "include"
//       });
//       if (response.ok) {
//         setSessionInitialized(true);
//         fetchExamList();
//       }
//     } catch (err) {
//       console.error("Failed to initialize session:", err);
//     }
//   };

//   const uploadFileOnly = async () => {
//     if (!file) {
//       alert("Please select a file first");
//       return;
//     }

//     setLoading(true);
//     const formData = new FormData();
//     formData.append("files", file);

//     try {
//       const response = await fetch(`${API_BASE}/upload?force_reprocess=true`, {
//         method: "POST",
//         body: formData,
//         credentials: "include"
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (data.success) {
//         setIsFileUploaded(true);
//         setUploadedFiles(data.processed_files || []);
//         alert("File uploaded and processed successfully");
//       } else {
//         alert("File upload failed: " + (data.error || "Unknown error"));
//       }
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert("Error uploading file: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sendChat = async () => {
//     if (!chatInput.trim()) return;
//     if (!isFileUploaded) {
//       alert("Please upload a file before using chat");
//       return;
//     }

//     const userMessage = { role: 'user', content: chatInput };
//     setChatLog(prev => [...prev, userMessage]);
//     setChatInput("");

//     try {
//       const response = await fetch(`${API_BASE}/chat`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ prompt: chatInput })
//       });

//       const data = await response.json();
//       setChatLog(prev => [...prev, { role: 'assistant', content: data.response }]);
//     } catch (err) {
//       console.error("Chat error:", err);
//       setChatLog(prev => [...prev, {
//         role: 'assistant',
//         content: "Sorry, I encountered an error. Please try again."
//       }]);
//     }
//   };

//   const generateQuestions = async () => {
//     if (!isFileUploaded) {
//       alert("Please upload a file first");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(`${API_BASE}/generate_questions`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({
//           num_questions: numQuestions,
//           difficulty: difficulty
//         })
//       });

//       const data = await response.json();
//       if (data.success && data.exam_data) {
//         setQuestions(data.exam_data.questions);
//         setSelected({});
//       } else {
//         alert("Failed to generate questions");
//       }
//     } catch (err) {
//       console.error("Generate error:", err);
//       alert("Error generating questions");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const saveSelected = async () => {
//     const selectedQuestions = questions.filter((_, idx) => selected[idx]);
//     if (selectedQuestions.length === 0) {
//       alert("Please select at least one question");
//       return;
//     }

//     const selectedNumbers = selectedQuestions.map(q => q.number);

//     try {
//       const flaskResponse = await fetch(`${API_BASE}/save_questions`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ selected_questions: selectedNumbers })
//       });

//       const flaskData = await flaskResponse.json();

//       let dotnetSuccess = true;
//       try {
//         const dotnetResponse = await fetch("https://localhost:7217/api/Quiz/questions", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//           },
//           body: JSON.stringify(selectedQuestions)
//         });
//         dotnetSuccess = dotnetResponse.ok;
//       } catch (dotnetErr) {
//         console.error("Dotnet save error:", dotnetErr);
//         dotnetSuccess = false;
//       }

//       if (flaskData.success) {
//         alert(dotnetSuccess
//           ? "Saved successfully to both systems!"
//           : "Saved to Flask but failed to save to .NET");
//         fetchExamList();
//       } else {
//         alert("Failed to save questions to Flask");
//       }
//     } catch (err) {
//       console.error("Save error:", err);
//       alert("Error saving questions");
//     }
//   };

//   const fetchExamList = async () => {
//     try {
//       const response = await fetch(`${API_BASE}/api/exams`, {
//         credentials: "include"
//       });
//       const data = await response.json();
//       if (data.success) {
//         setExamList(data.exams || []);
//       }
//     } catch (err) {
//       console.error("Failed to load exams:", err);
//     }
//   };

//   const loadExam = async (examId) => {
//     try {
//       const response = await fetch(`${API_BASE}/load_exam`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ exam_id: examId })
//       });

//       const data = await response.json();
//       if (data.questions) {
//         setQuestions(data.questions);
//       }
//     } catch (err) {
//       console.error("Load exam error:", err);
//     }
//   };

//   const toggleSelect = (index) => {
//     setSelected(prev => ({ ...prev, [index]: !prev[index] }));
//   };

//   return (
//     <div className="generated-page">
//       <aside className="sidebar">
//         <h3>📁 Exams</h3>
//         <ul>
//           {examList.map((exam, i) => (
//             <li key={i} onClick={() => loadExam(exam.exam_id)}>
//               {exam.title} ({new Date(exam.created_at).toLocaleDateString()})
//             </li>
//           ))}
//         </ul>
//         <hr />
//         <h3>⚙️ Settings</h3>

//         <div className="form-group">
//           <label>Number of Questions</label>
//           <input
//             type="number"
//             min="1"
//             max="50"
//             value={numQuestions}
//             onChange={e => setNumQuestions(Number(e.target.value))}
//           />
//         </div>

//         <div className="form-group">
//           <label>Difficulty</label>
//           <select
//             value={difficulty}
//             onChange={e => setDifficulty(e.target.value)}
//           >
//             <option value="easy">Easy</option>
//             <option value="medium">Medium</option>
//             <option value="hard">Hard</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Upload File</label>
//           <input
//             type="file"
//             onChange={e => setFile(e.target.files[0])}
//             disabled={loading}
//           />
//         </div>

//         <button
//           onClick={uploadFileOnly}
//           disabled={!file || loading}
//         >
//           {loading ? 'Uploading...' : '📤 Upload File'}
//         </button>

//         <button
//           onClick={generateQuestions}
//           disabled={!isFileUploaded || loading}
//         >
//           📝 Generate Questions
//         </button>

//         <button
//           onClick={saveSelected}
//           disabled={!questions.length || loading}
//         >
//           💾 Save Selected
//         </button>
//       </aside>

//       <main className="main-area">
//         {loading && <div className="loading-indicator">Loading...</div>}

//         <section className="question-list">
//           {questions.map((q, i) => (
//             <div key={i} className="question-card">
//               <input
//                 type="checkbox"
//                 checked={!!selected[i]}
//                 onChange={() => toggleSelect(i)}
//                 disabled={loading}
//               />
//               <div className="question-content">
//                 <div className="question-text">{q.text}</div>
//                 {q.options && (
//                   <ul className="options-list">
//                     {q.options.map((opt, j) => (
//                       <li key={j}>{opt}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           ))}
//         </section>

//         <section className="chat-box">
//           <h3>💬 Chat with Document</h3>
//           <div className="chat-log">
//             {chatLog.map((msg, i) => (
//               <div key={i} className={`chat-message ${msg.role}`}>
//                 <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong> {msg.content}
//               </div>
//             ))}
//           </div>
//           <div className="chat-input-container">
//             <input
//               type="text"
//               value={chatInput}
//               onChange={(e) => setChatInput(e.target.value)}
//               placeholder="Ask about the document content..."
//               disabled={!isFileUploaded || loading}
//               onKeyPress={(e) => e.key === 'Enter' && sendChat()}
//             />
//             <button
//               onClick={sendChat}
//               disabled={!chatInput.trim() || !isFileUploaded || loading}
//             >
//               Send
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import './GeneratedQuestionsPage.css';
// import { useNavigate } from 'react-router-dom';

// export default function GeneratedQuestionsPage() {
//   const [chatLog, setChatLog] = useState([]);
//   const [chatInput, setChatInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [numQuestions, setNumQuestions] = useState(10);
//   const [difficulty, setDifficulty] = useState("medium");
//   const [questions, setQuestions] = useState([]);
//   const [selected, setSelected] = useState({});
//   const [examList, setExamList] = useState([]);
//   const [file, setFile] = useState(null);
//   const [isFileUploaded, setIsFileUploaded] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [sessionInitialized, setSessionInitialized] = useState(false);

//   const navigate = useNavigate();
//   const token = localStorage.getItem("token") || "";
//   const user = JSON.parse(localStorage.getItem("user"));

//   // Only allow access to admins and instructors
//   useEffect(() => {
//     if (!user || !["admin", "Instructor"].includes(user.role)) {
//       navigate("/login");
//     }
//   }, [user, navigate]);

//   useEffect(() => {
//     if (!sessionInitialized) {
//       initializeSession();
//     }
//   }, [sessionInitialized]);

//   const initializeSession = async () => {
//     try {
//       const response = await fetch("http://localhost:5001/", {
//         credentials: "include"
//       });
//       if (response.ok) {
//         setSessionInitialized(true);
//         fetchExamList();
//       }
//     } catch (err) {
//       console.error("Failed to initialize session:", err);
//     }
//   };

//   const uploadFileOnly = async () => {
//     if (!file) {
//       alert("Please select a file first");
//       return;
//     }

//     setLoading(true);
//     const formData = new FormData();
//     formData.append("files", file);

//     try {
//       const response = await fetch("http://localhost:5001/upload?force_reprocess=true", {
//         method: "POST",
//         body: formData,
//         credentials: "include"
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (data.success) {
//         setIsFileUploaded(true);
//         setUploadedFiles(data.processed_files || []);
//         alert("File uploaded and processed successfully");
//       } else {
//         alert("File upload failed: " + (data.error || "Unknown error"));
//       }
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert("Error uploading file: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sendChat = async () => {
//     if (!chatInput.trim()) return;
//     if (!isFileUploaded) {
//       alert("Please upload a file before using chat");
//       return;
//     }

//     const userMessage = { role: 'user', content: chatInput };
//     setChatLog(prev => [...prev, userMessage]);
//     setChatInput("");

//     try {
//       const response = await fetch("http://localhost:5001/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ prompt: chatInput })
//       });

//       const data = await response.json();
//       setChatLog(prev => [...prev, { role: 'assistant', content: data.response }]);
//     } catch (err) {
//       console.error("Chat error:", err);
//       setChatLog(prev => [...prev, {
//         role: 'assistant',
//         content: "Sorry, I encountered an error. Please try again."
//       }]);
//     }
//   };

//   const generateQuestions = async () => {
//     if (!isFileUploaded) {
//       alert("Please upload a file first");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5001/generate_questions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({
//           num_questions: numQuestions,
//           difficulty: difficulty
//         })
//       });

//       const data = await response.json();
//       if (data.success && data.exam_data) {
//         setQuestions(data.exam_data.questions);
//         setSelected({});
//       } else {
//         alert("Failed to generate questions");
//       }
//     } catch (err) {
//       console.error("Generate error:", err);
//       alert("Error generating questions");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const saveSelected = async () => {
//     const selectedQuestions = questions.filter((_, idx) => selected[idx]);
//     if (selectedQuestions.length === 0) {
//       alert("Please select at least one question");
//       return;
//     }

//     const selectedNumbers = selectedQuestions.map(q => q.number);

//     try {
//       const flaskResponse = await fetch("http://localhost:5001/save_questions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ selected_questions: selectedNumbers })
//       });

//       const flaskData = await flaskResponse.json();

//       let dotnetSuccess = true;
//       try {
//         const dotnetFormattedQuestions = selectedQuestions.map((q, idx) => ({
//           questionText: q.text,
//           questionType: q.type || 1,
//           courseId: user?.courseId || 1,
//           contentId: 0,
//           hasCode: false,
//           codeSnippet: "",
//           programmingLanguage: "",
//           points: q.points || 5,
//           explanation: "",
//           options: (q.options || []).map((opt, i) => ({
//             optionText: opt,
//             isCorrect: i === 0,
//             orderIndex: i + 1
//           }))
//         }));

//         const dotnetResponse = await fetch("https://localhost:7217/api/Quiz/questions", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//           },
//           body: JSON.stringify(dotnetFormattedQuestions)
//         });
//         dotnetSuccess = dotnetResponse.ok;
//       } catch (dotnetErr) {
//         console.error("Dotnet save error:", dotnetErr);
//         dotnetSuccess = false;
//       }

//       if (flaskData.success) {
//         alert(dotnetSuccess
//           ? "Saved successfully to both systems!"
//           : "Saved to Flask but failed to save to .NET");
//         fetchExamList();
//       } else {
//         alert("Failed to save questions to Flask");
//       }
//     } catch (err) {
//       console.error("Save error:", err);
//       alert("Error saving questions");
//     }
//   };

//   const fetchExamList = async () => {
//     try {
//       const response = await fetch("http://localhost:5001/api/exams", {
//         credentials: "include"
//       });
//       const data = await response.json();
//       if (data.success) {
//         setExamList(data.exams || []);
//       }
//     } catch (err) {
//       console.error("Failed to load exams:", err);
//     }
//   };

//   const loadExam = async (examId) => {
//     try {
//       const response = await fetch("http://localhost:5001/load_exam", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ exam_id: examId })
//       });

//       const data = await response.json();
//       if (data.questions) {
//         setQuestions(data.questions);
//       }
//     } catch (err) {
//       console.error("Load exam error:", err);
//     }
//   };

//   const toggleSelect = (index) => {
//     setSelected(prev => ({ ...prev, [index]: !prev[index] }));
//   };

//   return (
//     <div className="generated-page">
//       <aside className="sidebar">
//         <h3>📁 Exams</h3>
//         <ul>
//           {examList.map((exam, i) => (
//             <li key={i} onClick={() => loadExam(exam.exam_id)}>
//               {exam.title} ({new Date(exam.created_at).toLocaleDateString()})
//             </li>
//           ))}
//         </ul>
//         <hr />
//         <h3>⚙️ Settings</h3>

//         <div className="form-group">
//           <label>Number of Questions</label>
//           <input
//             type="number"
//             min="1"
//             max="50"
//             value={numQuestions}
//             onChange={e => setNumQuestions(Number(e.target.value))}
//           />
//         </div>

//         <div className="form-group">
//           <label>Difficulty</label>
//           <select
//             value={difficulty}
//             onChange={e => setDifficulty(e.target.value)}
//           >
//             <option value="easy">Easy</option>
//             <option value="medium">Medium</option>
//             <option value="hard">Hard</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Upload File</label>
//           <input
//             type="file"
//             onChange={e => setFile(e.target.files[0])}
//             disabled={loading}
//           />
//         </div>

//         <button
//           onClick={uploadFileOnly}
//           disabled={!file || loading}
//         >
//           {loading ? 'Uploading...' : '📤 Upload File'}
//         </button>

//         <button
//           onClick={generateQuestions}
//           disabled={!isFileUploaded || loading}
//         >
//           📝 Generate Questions
//         </button>

//         <button
//           onClick={saveSelected}
//           disabled={!questions.length || loading}
//         >
//           💾 Save Selected
//         </button>
//       </aside>

//       <main className="main-area">
//         {loading && <div className="loading-indicator">Loading...</div>}

//         <section className="question-list">
//           {questions.map((q, i) => (
//             <div key={i} className="question-card">
//               <input
//                 type="checkbox"
//                 checked={!!selected[i]}
//                 onChange={() => toggleSelect(i)}
//                 disabled={loading}
//               />
//               <div className="question-content">
//                 <div className="question-text">{q.text}</div>
//                 {q.options && (
//                   <ul className="options-list">
//                     {q.options.map((opt, j) => (
//                       <li key={j}>{opt}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           ))}
//         </section>

//         <section className="chat-box">
//           <h3>💬 Chat with Document</h3>
//           <div className="chat-log">
//             {chatLog.map((msg, i) => (
//               <div key={i} className={`chat-message ${msg.role}`}>
//                 <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong> {msg.content}
//               </div>
//             ))}
//           </div>
//           <div className="chat-input-container">
//             <input
//               type="text"
//               value={chatInput}
//               onChange={(e) => setChatInput(e.target.value)}
//               placeholder="Ask about the document content..."
//               disabled={!isFileUploaded || loading}
//               onKeyPress={(e) => e.key === 'Enter' && sendChat()}
//             />
//             <button
//               onClick={sendChat}
//               disabled={!chatInput.trim() || !isFileUploaded || loading}
//             >
//               Send
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import './GeneratedQuestionsPage.css';
import { useNavigate } from 'react-router-dom';

export default function GeneratedQuestionsPage() {
  const [chatLog, setChatLog] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [numQuestions, setNumQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState("medium");
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState({});
  const [examList, setExamList] = useState([]);
  const [file, setFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [sessionInitialized, setSessionInitialized] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || !["Admin", "Instructor"].includes(user.role)) {
      navigate("/unauthorized");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!sessionInitialized) {
      initializeSession();
    }
  }, [sessionInitialized]);

  const initializeSession = async () => {
    try {
      const response = await fetch("http://localhost:5001/", {
        credentials: "include"
      });
      if (response.ok) {
        setSessionInitialized(true);
        fetchExamList();
      }
    } catch (err) {
      console.error("Failed to initialize session:", err);
    }
  };

  const uploadFileOnly = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await fetch("http://localhost:5001/upload?force_reprocess=true", {
        method: "POST",
        body: formData,
        credentials: "include"
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setIsFileUploaded(true);
        setUploadedFiles(data.processed_files || []);
        alert("File uploaded and processed successfully");
      } else {
        alert("File upload failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading file: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const sendChat = async () => {
    if (!chatInput.trim()) return;
    if (!isFileUploaded) {
      alert("Please upload a file before using chat");
      return;
    }

    const userMessage = { role: 'user', content: chatInput };
    setChatLog(prev => [...prev, userMessage]);
    setChatInput("");

    try {
      const response = await fetch("http://localhost:5001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ prompt: chatInput })
      });

      const data = await response.json();
      setChatLog(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (err) {
      console.error("Chat error:", err);
      setChatLog(prev => [...prev, {
        role: 'assistant',
        content: "Sorry, I encountered an error. Please try again."
      }]);
    }
  };

  const generateQuestions = async () => {
    if (!isFileUploaded) {
      alert("Please upload a file first");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/generate_questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          num_questions: numQuestions,
          difficulty: difficulty
        })
      });

      const data = await response.json();
      if (data.success && data.exam_data) {
        setQuestions(data.exam_data.questions);
        setSelected({});
      } else {
        alert("Failed to generate questions");
      }
    } catch (err) {
      console.error("Generate error:", err);
      alert("Error generating questions");
    } finally {
      setLoading(false);
    }
  };

 const saveSelected = async () => {
  const selectedQuestions = questions.filter((_, idx) => selected[idx]);
  if (selectedQuestions.length === 0) {
    alert("Please select at least one question");
    return;
  }

  const selectedNumbers = selectedQuestions.map(q => q.number);

  try {
    // First save to Flask
    const flaskResponse = await fetch("http://localhost:5001/save_questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ selected_questions: selectedNumbers })
    });

    const flaskData = await flaskResponse.json();

    let dotnetSuccess = true;
    // Save each question to .NET API
    for (const q of selectedQuestions) {
      const payload = {
        questionText: `${q.text}`,
        questionType: q.type === "mcq" ? 1 : 2, // Assuming 1 for MCQ, 2 for other types
        courseId: user?.courseId || 1,
        contentId: 1,
        hasCode: false,
        codeSnippet: "",
        programmingLanguage: "",
        points: q.points || 5,
        explanation: "",
        options: (q.options || []).map((opt, i) => ({
          optionText: opt,
          isCorrect: opt === q.correct_answer,
          orderIndex: i + 1
        }))
      };

      try {
        const dotnetResponse = await fetch("https://localhost:7217/api/Quiz/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });

        if (!dotnetResponse.ok) {
          dotnetSuccess = false;
          console.error("Dotnet save error:", await dotnetResponse.text());
        }
      } catch (err) {
        dotnetSuccess = false;
        console.error("Dotnet request failed:", err);
      }
    }

    if (flaskData.success) {
      alert(dotnetSuccess
        ? "Saved successfully to both systems!"
        : "Saved to Flask but failed to save to .NET");
      fetchExamList();
    } else {
      alert("Failed to save questions to Flask");
    }
  } catch (err) {
    console.error("Save error:", err);
    alert("Error saving questions");
  }
};

  const fetchExamList = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/exams", {
        credentials: "include"
      });
      const data = await response.json();
      if (data.success) {
        setExamList(data.exams || []);
      }
    } catch (err) {
      console.error("Failed to load exams:", err);
    }
  };

  const loadExam = async (examId) => {
    try {
      const response = await fetch("http://localhost:5001/load_exam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ exam_id: examId })
      });

      const data = await response.json();
      if (data.questions) {
        setQuestions(data.questions);
      }
    } catch (err) {
      console.error("Load exam error:", err);
    }
  };

  const toggleSelect = (index) => {
    setSelected(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="generated-page">
       <aside className="sidebar">
         <h3>📁 Exams</h3>
         <ul>
           {examList.map((exam, i) => (
            <li key={i} onClick={() => loadExam(exam.exam_id)}>
              {exam.title} ({new Date(exam.created_at).toLocaleDateString()})
            </li>
          ))}
        </ul>
        <hr />
        <h3>⚙️ Settings</h3>

        <div className="form-group">
          <label>Number of Questions</label>
          <input
            type="number"
            min="1"
            max="50"
            value={numQuestions}
            onChange={e => setNumQuestions(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label>Difficulty</label>
          <select
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="form-group">
          <label>Upload File</label>
          <input
            type="file"
            onChange={e => setFile(e.target.files[0])}
            disabled={loading}
          />
        </div>

        <button
          onClick={uploadFileOnly}
          disabled={!file || loading}
        >
          {loading ? 'Uploading...' : '📤 Upload File'}
        </button>

        <button
          onClick={generateQuestions}
          disabled={!isFileUploaded || loading}
        >
          📝 Generate Questions
        </button>

        <button
          onClick={saveSelected}
          disabled={!questions.length || loading}
        >
          💾 Save Selected
        </button>
      </aside>

      <main className="main-area">
        {loading && <div className="loading-indicator">Loading...</div>}

        <section className="question-list">
          {questions.map((q, i) => (
            <div key={i} className="question-card">
              <input
                type="checkbox"
                checked={!!selected[i]}
                onChange={() => toggleSelect(i)}
                disabled={loading}
              />
              <div className="question-content">
                <div className="question-text">{q.text}</div>
                {q.options && (
                  <ul className="options-list">
                    {q.options.map((opt, j) => (
                      <li key={j}>{opt}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="chat-box">
          <h3>💬 Chat with Document</h3>
          <div className="chat-log">
            {chatLog.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.role}`}>
                <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong> {msg.content}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about the document content..."
              disabled={!isFileUploaded || loading}
              onKeyPress={(e) => e.key === 'Enter' && sendChat()}
            />
            <button
              onClick={sendChat}
              disabled={!chatInput.trim() || !isFileUploaded || loading}
            >
              Send
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}