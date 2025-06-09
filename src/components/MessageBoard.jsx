import { useState } from 'react';

function MessageBoard() {
  const [messages, setMessage] = useState(["Hello all ! This is first message."]);
  const [messageText, setMessageText] = useState("");

  const handleMessageTextChange = (event) => { setMessageText(event.target.value) };

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...messages];
    newMessage.push(messageText);
    setMessage(newMessage);
  }

  const deleteMessage = (messageIndex) => {
    const newMessage = [...messages];
    newMessage.splice(messageIndex, 1);
    setMessage(newMessage);
  }
  
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText}
            onChange={handleMessageTextChange}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>Submit</button>
      </div>
      <div className="board">
        <ul>
          {messages.map((message, index) => (
            <li key={index} className="message">
              <h1>{message}</h1>
              <button className="delete-button" onClick={() => {deleteMessage(index)}}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MessageBoard;
