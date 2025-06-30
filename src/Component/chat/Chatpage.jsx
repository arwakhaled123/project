import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ChatPage.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "مرحباً بك!" },
    { sender: "bot", text: "أنا بوت مصمم لمساعدتك في الإجابة على أسئلتك" },
  ]);
  const [input, setInput] = useState("");
  const [chatId, setChatId] = useState(null);
  const [chatList, setChatList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    const initializeChat = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/?user_id=${userId}`);
        const data = await response.json();

        if (data.status === "success") {
          setChatId(data.chat_id || data.user_id);

          const historyRes = await fetch(`http://127.0.0.1:5000/history`);
          const historyData = await historyRes.json();
          if (historyData.status === "success") {
            const formattedMessages = historyData.chat_history.map((msg) => ({
              sender: msg.role === "user" ? "user" : "bot",
              text: msg.content,
            }));
            setMessages((prev) => [...prev, ...formattedMessages]);
          }
        }
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    };

    const fetchAllChats = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/all_chats");
        const data = await res.json();
        if (data.status === "success") {
          setChatList(data.chats);
        }
      } catch (error) {
        console.error("Error fetching old chats:", error);
      }
    };

    initializeChat();
    fetchAllChats();
  }, [userId, navigate]);

  const handleSendMessage = async () => {
    if (!input.trim() || loading || !userId) return;

    setLoading(true);
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          user_id: userId,
          chat_id: chatId,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        const botMessage = { sender: "bot", text: data.response };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const errorMessage = { sender: "bot", text: "حدث خطأ أثناء معالجة طلبك." };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = { sender: "bot", text: "تعذر الاتصال بالخادم. حاول لاحقاً." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const startNewChat = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/new_chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId }),
      });

      const data = await response.json();
      if (data.status === "success") {
        setChatId(data.chat_id);
        setMessages([
          { sender: "bot", text: "تم بدء محادثة جديدة!" },
          { sender: "bot", text: "كيف يمكنني مساعدتك اليوم؟" },
        ]);
      }
    } catch (error) {
      console.error("Error starting new chat:", error);
    }
  };

  const loadOldChat = async (chatId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/load_chat?chat_id=${chatId}`);
      const data = await response.json();
      if (data.status === "success") {
        const formattedMessages = data.chat_history.map((msg) => ({
          sender: msg.role === "user" ? "user" : "bot",
          text: msg.content,
        }));
        setMessages([
          { sender: "bot", text: "📂 تم تحميل المحادثة المختارة" },
          ...formattedMessages,
        ]);
        setChatId(chatId);
      }
    } catch (error) {
      console.error("Error loading chat:", error);
    }
  };

  return (
    <div className="page-layout">
      {/* ✅ Sidenav */}
      <div className="sidenav">
        <h4>💬 المحادثات السابقة</h4>
        {chatList.length === 0 ? (
          <p>لا توجد محادثات</p>
        ) : (
          <ul className="chat-list">
            {chatList.map((chat) => (
              <li key={chat.chat_id}>
                <button className="chat-button" onClick={() => loadOldChat(chat.chat_id)}>
                  {chat.first_message.content.slice(0, 30)}...
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ✅ Main Chat */}
      <div className="chat-container">
        <div className="chat-header">
          <h2 className="Chat">Chat with us</h2>
          <button className="close-button" onClick={startNewChat} title="شات جديد">
            🗘
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${
                message.sender === "bot" ? "bot-message" : "user-message"
              }`}
            >
              <div className={`message-bubble ${message.sender}`}>{message.text}</div>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            className="input-field"
            placeholder="Ask your questions here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage} className="btn" disabled={loading}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none">
              <rect
                x="1.17478"
                y="0.925391"
                width="24.15"
                height="24.15"
                rx="12.075"
                stroke="#765378"
                strokeWidth="1.05"
              />
              <path
                d="M5.90782 20.3504L23.0497 13.0004L5.90782 5.65039L5.89966 11.3671L18.1497 13.0004L5.89966 14.6337L5.90782 20.3504Z"
                fill="#765378"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
