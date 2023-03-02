import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__main">
          <div className="footer__main__upper">
            <div className="footer__main__upper__social-link">
              <ul id="img-li">
                <li>
                  <FaFacebookSquare />{" "}
                </li>
                <li>
                  <FaYoutubeSquare />{" "}
                </li>
              </ul>
            </div>
            <div className="footer__main__upper__list">
              <ul>
                <li>
                  <b>Participant support</b>
                </li>
                <li>Topline FAQs</li>
                <li>Topline Privacy Policy</li>
                <li>Topline Terms of Service</li>
                <li>Contact us</li>
              </ul>
              <ul>
                <li>
                  <b>Careers</b>
                </li>
                <li>Open roles</li>
              </ul>
              <ul>
                <li>
                  <b>Newsroom</b>
                </li>
                <li>BLog</li>
                <li>Press kit</li>
              </ul>
            </div>
          </div>
          <div className="footer__main__bottom">
            <div id="img-logo">
              <img
                src="https://freesvg.org/img/1499437188.png"
                alt=""
              />
              <h3>
                Project Topline <span> by </span> toppers
              </h3>
            </div>

            <div className="copyright">
              © 2023 Toppers Life Sciences LLC. | Alpha, Inc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
