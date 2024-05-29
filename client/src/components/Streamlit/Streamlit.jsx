/* import React, { useState } from "react";
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
          src="https://chatybe.streamlit.app/?embed=true&embed_options=hide_toolbar&shide_toolbar"
        ></iframe>
      ) : (
        <button onClick={handleButtonClick}>
          <img src={chattyBot} alt="Chatty Bot" className="bot-image"/>
        </button>
      )}
    </div>
  );
};

export default Streamlit; */

import React, { useState, useEffect, useRef } from "react";
import chattyBot from '../../../src/assets/chatty-logo.png';

const Streamlit = () => {
  const [showIframe, setShowIframe] = useState(false);
  const iframeRef = useRef(null);

  const handleButtonClick = () => {
    setShowIframe(true);
  };

  const handleClickOutside = (event) => {
    if (iframeRef.current && !iframeRef.current.contains(event.target)) {
      setShowIframe(false);
    }
  };

  useEffect(() => {
    if (showIframe) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showIframe]);

  return (
    <div className="streamlit">
      {showIframe ? (
        <iframe
          ref={iframeRef}
          className="chatty"
          src="https://chatybe.streamlit.app/?embed=true&embed_options=hide_toolbar&shide_toolbar"
        ></iframe>
      ) : (
        <button onClick={handleButtonClick}>
          <img src={chattyBot} alt="Chatty Bot" className="bot-image"/>
        </button>
      )}
    </div>
  );
};

export default Streamlit;

