import React, { useState } from 'react';
import './popup.css';

const Popup = ({ success, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div
      className={`popup ${
        isVisible ? 'visible opacity-100 visible' : ''
      } position-fixed top-0 start-0 end-0 bottom-0`}
    >
      <div
        className={`popup-content ${
          success ? 'success' : 'failure'
        } text-center rounded-3 p-4`}
      >
        {success ? (
          <>
            <h2 className="mt-0">Email Sent Successfully</h2>
            <p>Your email has been sent successfully.</p>
          </>
        ) : (
          <>
            <h2 className="mt-0">Email Sending Failed</h2>
            <p>
              Sorry, we encountered an error while sending your email. Please
              try again later.
            </p>
          </>
        )}
        <button
          className="close-button border-0 fs-5 mt-4 p-0 text-decoration-underline"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
