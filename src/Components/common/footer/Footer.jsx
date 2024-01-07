import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>CODEPAL</h1>
            <span>
              At Fine Software Company where innovation speaks in every code
              line.
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              recusandae et. Eaque quaerat aut reprehenderit et voluptas a,
              quidem similique corporis consequatur eos atque iusto sequi?
              Itaque earum ad atque?
            </p>

            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>

              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>

              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +2 392 3929 210
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                info@yourdomain.com
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved to <i className="fa fa-heart"></i>{" "}
          CODEPAL
        </p>
      </div>
    </>
  );
};

export default Footer;
