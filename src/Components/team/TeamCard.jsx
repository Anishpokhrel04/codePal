import React from "react";
import { team } from "../../dummydata";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import "./team.css"
const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="items shadow">
          <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
              
                {" "}
                <FaFacebookF className="icon" />
            
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
              <FaTiktok className="icon" />
            </div>
          </div>
          <div className="details">
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
