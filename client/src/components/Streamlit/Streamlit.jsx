import React, { useState } from "react";
import chattyBot from '../../../src/assets/chatty-logo.png';

const Streamlit = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    setShowIframe(true);
  };


  return (
    <div className="streamlit">
      {showIframe ? (
        <iframe
          className="chatty"
          src="https://chatybe.streamlit.app/?embed=true"
        ></iframe>
      ) : (
        <button onClick={handleButtonClick}>
          <img src={chattyBot} alt="Chatty Bot" />
        </button>
      )}
    </div>
  );
};

export default Streamlit;


