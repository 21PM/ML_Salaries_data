import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/generate-response`, {
        message: message,
      });

      setResponse(result.data.response);
    } catch (error) {
      setResponse("An error occurred while generating the response.");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Chatbot Assistant</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask your question..."
          style={{ width: '100%', height: '100px', padding: '10px', marginBottom: '10px' }}
          required
        />
        <button type="submit" style={{ padding: '10px', width: '100%' }}>
          {loading ? 'Generating Response...' : 'Submit'}
        </button>
      </form>

      {response && (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
