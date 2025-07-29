import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "👋 Hello! I'm your AI assistant. Ask me anything!", sender: 'bot' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    const userMsg = { id: Date.now(), text: userText, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');

    const typingId = Date.now() + 1;
    setMessages((prev) => [...prev, { id: typingId, text: "✍️ Thinking...", sender: 'bot' }]);

    try {
      const chatHistory = messages
        .filter(msg => msg.sender === 'user' || msg.sender === 'bot')
        .map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        }))
        .concat({ role: "user", parts: [{ text: userText }] });

      const payload = { contents: chatHistory };

      const apiKey = "AIzaSyAMiYc-6QT9snrUDaMP22FfHuicqwix9ZI"; // Replace securely
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      let botReply = "🤖 Sorry, I couldn't generate a response.";

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content?.parts?.length > 0
      ) {
        botReply = result.candidates[0].content.parts[0].text;
      }

      setMessages((prev) =>
        prev
          .filter((msg) => msg.id !== typingId)
          .concat({ id: Date.now(), text: botReply, sender: 'bot' })
      );
    } catch (err) {
      console.error(err);
      setMessages((prev) =>
        prev
          .filter((msg) => msg.id !== typingId)
          .concat({ id: Date.now(), text: "❌ Error: Could not reach AI. Try again later.", sender: 'bot' })
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 px-3">
      <div className="chat-container d-flex flex-column w-100">
        <div className="chat-header text-center p-3">
          <h4 className="mb-0">🧠 AI LLM Chat Assistant</h4>
        </div>

        <div className="message-area p-3 d-flex flex-column">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
            >
              <div className={`message-bubble ${msg.sender === 'user' ? 'message-user' : 'message-bot'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-area d-flex p-3 bg-white">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Ask something..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn btn-send"
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
