import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./head.css"
const Head = () => { 
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>CODEPAL</h1>
            <span>
              At Fine Software Company where innovation speaks in every code
              line.
            </span>
          </div>

          <div className="social">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
