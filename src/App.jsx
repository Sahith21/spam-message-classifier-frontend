import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleCheckSpam = async () => {
    try {
      const response = await axios.post("https://spam-message-classifier-backend.onrender.com/api/classify", { text });
      setResult(response.data.isSpam ? "Spam" : "Not Spam");
    } catch (error) {
      console.error("Error checking spam:", error);
      setResult("Error: Could not classify message");
    }
  };

  return (
    <div className="container">
      <h1>Spam Message Classifier</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleCheckSpam}>Check Spam</button>
      {result && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
