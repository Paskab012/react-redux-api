import React from 'react';
import { BiMicrophone } from 'react-icons/bi';
import { BsFillGearFill } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="Navbar">
    <Link to="/">
      <IoIosArrowBack className="arrow-back" />
    </Link>
    <div className="logo">Look at your weather!</div>
    <div className="icons">
      <BiMicrophone />
      <BsFillGearFill />
    </div>
  </div>
);
export default Nav;
