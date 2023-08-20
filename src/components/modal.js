
import React, { useEffect, useState } from "react";


export default function Modal({ url, onClose, visible }) {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };


  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [margin, setMargin] = useState(0);

  const modalSizing = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    if (windowWidth > windowHeight) {
      setHeight(windowHeight * 0.8);
      setWidth((windowHeight * 0.8) / 1.414);
      setMargin(windowHeight * 0.1);
    } else {
      setWidth(windowWidth * 0.8);
      setHeight(windowWidth * 0.8 * 1.414);
      setMargin((windowHeight - windowWidth * 0.8 * 1.414) / 2);
    }
  };

  useEffect(() => {
    modalSizing();
    window.addEventListener("resize", modalSizing);
    return () => {
      window.removeEventListener("resize", modalSizing);
    };
  }, []);

  return (
    <>
      <div className="modal" style={{ display: `${visible ? "block" : "none"}` }}>
        <div className="modal_close" onClick={handleCloseClick}>
          CLOSE ☓
        </div>
        <div className="modal_body">
          <h1 className="wow">Wow! New Order is Here!</h1>
          <div className="modal1">
          <img className="bibimbap" alt="Group 141" src="img/Group 141.png" />
          <button className='decline' onClick={handleCloseClick}>Decline</button> 
          <button className='accept' onClick={handleCloseClick}>Accept</button> 


          </div>
        </div>
      </div>
    </>
  );
}
