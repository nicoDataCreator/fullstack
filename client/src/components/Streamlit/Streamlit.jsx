import React, { useState } from "react";

const Streamlit = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    setShowIframe(true);
  };


  return (
    <div>
      {showIframe ? (
        <iframe
          className="chatty"
          src="https://chatybe.streamlit.app/?embed=true"
        ></iframe>
      ) : (
        <button onClick={handleButtonClick}>Show Iframe</button>
      )}
    </div>
  );
};

export default Streamlit;


