import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";


const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO CODEPAL"
              title="Leading Software Development Proficiency"
            />
            <p>
              Deep in the realms of coding, far from ordinary landscapes and
              tech frontiers, reside the lines of powerful code and innovative
              solutions.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <FaLongArrowAltRight className="icons" />
              </button>
              <button>
                VIEW COURSE <FaLongArrowAltRight className="icons" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
