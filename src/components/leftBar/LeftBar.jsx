import React, { useState } from "react";
import "./LeftBar.css";
import { BiHomeAlt, BiTimeFive, BiLogIn } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { BsAward, BsPatchCheck } from "react-icons/bs";
import {
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlinePlusCircle,
  AiOutlineCheckSquare,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { AiOutlineAlignRight } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

function LeftBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <aside className={click ? "leftbar active" : "leftbar"}>
      <div className="mobile-container">
        <img src="./assets/logo.svg" alt="" className="logo" />
        <div className="handler" onClick={handleClick}>
          {click ? (
            <RiCloseLine className="hamburger" />
          ) : (
            <AiOutlineAlignRight className="hamburger" />
          )}
        </div>
      </div>
      <div className="nav-boxes">
        <div className="nav-box">
          <h4>Menu</h4>
          <ul>
            <li>
              <a href="/">
                <BiHomeAlt />
                Home
              </a>
            </li>
            <li>
              <a href="/">
                <MdOutlineExplore />
                Discover
              </a>
            </li>
            <li>
              <a href="/">
                <BsAward />
                Awards
              </a>
            </li>
            <li>
              <a href="/">
                <BsPatchCheck />
                Celebrities
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-box">
          <h4>Library</h4>
          <ul>
            <li>
              <a href="/">
                <BiTimeFive />
                Recent
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineStar />
                Top-Rated
              </a>
            </li>
            <li>
              <a href="/">
                <FiDownload />
                Downloaded
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineHeart />
                Playlists
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlinePlusCircle />
                Watchlist
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineCheckSquare />
                Completed
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-box">
          <h4>General</h4>
          <ul>
            <li>
              <a href="/">
                <AiOutlineSetting />
                Settings
              </a>
            </li>
            <li>
              <a href="/">
                <BiLogIn />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default LeftBar;
