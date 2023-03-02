import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCoffee } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useState, useEffect } from "react";
// import {GiHamburgerMenu} from "react-icons/"

const Navbar = ({ alert }) => {
  const [toggle1, setToggle1] = useState("");//faq
  // const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setScrollPosition(false);
    } else if (scrollPosition && window.pageYOffset <= 10) {
      setScrollPosition(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const handleClick1 = (op) => {  
    if (toggle1 === "" || toggle1 !== op) {
      setToggle1(op);
    } else if (toggle1 === op) {
      setToggle1("");
    }
  };

  const handleClickMedia = () => {
    toggle3 === false ? setToggle3(true) : setToggle3(false);
  };


  return (
    <>
      <div className="header">
        <div className="header__main">
          {scrollPosition && alert && (
            <div className="header__main__nav-disclaimer">
              <p>{alert}</p> 
            </div>
          )}

          <div className="header__main__nav-upper">
            <div className="title">
              <img
                src="https://freesvg.org/img/1499437188.png"
                alt=""
              />
              <h3>
                {" "}
                Project Topline <span> by </span> toppers{" "}
              </h3>
            </div>
            <div className="icon">
              <a href="/">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} className="user" /> Sign in
              </a>
              <FontAwesomeIcon
                icon={toggle3 ? faCoffee : faEnvelope}
                className="ham"
                onClick={handleClickMedia}
              />
            </div>
          </div>

          <div className={`header__main__nav-bottom ${toggle3 ? "show3" : ""}`}>
            <div className="header__main__nav-bottom__item">
              <ul>
                <li
                  className="down"
                  onClick={() => handleClick1("Search opportunities")}
                >
                  Search opportunities<AiOutlineDown className="down-icon"/>
                </li>
                <li>Help humanity</li>
                <li>Shape healthtech</li>
                <li>About us</li>
                <li className="down" onClick={() => handleClick1("faqs")}>
                  FAQ<AiOutlineDown className="down-icon" />
                </li>
                <li>Blog</li>
              </ul>
            </div>

            {toggle1 === "Search opportunities" && (
              <div
                className={`header__main__nav-bottom__item-option ${
                  toggle1 ? "show1" : ""
                }`}
                id="search-op"
              >
                <ul>
                  <li>Covid-19</li>
                  <li>Depression</li>
                  <li>Genereal health</li>
                  <li>gut Health</li>
                  <li>Heart health</li>
                  <li>Sleep health</li>
                  <li>Skin health</li>
                  <li>Technology testers</li>
                </ul>
              </div>
            )}

            {toggle1 === "faqs" && (
              <div
                className={`header__main__nav-bottom__item-option ${
                  toggle1 ? "show1" : ""
                }`}
                id="faq"
              >
                <ul>
                  <li>General FAQs</li>
                  <li>Study FAQs</li>
                  <li>COVID-19 FAQs</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
